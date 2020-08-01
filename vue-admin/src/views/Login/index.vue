<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          v-for="item in menuTab"
          :key="item.txt"
          :class="{'current': item.current}"
          @click="toggleMenu(item)"
        >{{item.txt}}</li>
      </ul>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="loginForm" class="login-form">
        <el-form-item prop="username" class="item-form">
          <label for="username">邮箱</label>
          <el-input id="username" type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="password" class="item-form">
          <label for="password">密码</label>
          <el-input
            id="password"
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <el-form-item prop="againPassword" class="item-form" v-show="model === 'register'">
          <label>确认密码</label>
          <el-input
            type="password"
            v-model="ruleForm.againPassword"
            autocomplete="off"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <el-form-item prop="code" class="item-form">
          <label>验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input v-model="ruleForm.code" minlength="6" maxlength="6"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button
                type="success"
                @click="getSms()"
                :disabled="codeStatus"
                class="block"
              >{{codeButtonText}}</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn block"
            type="danger"
            @click="submitForm('loginForm')"
            :disabled="loginStatus"
          >{{model==='login' ? '登录': '注册'}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import sha1 from "js-sha1";
import { reactive, ref, onMounted } from "@vue/composition-api";
import {
  stripscript,
  validateEmail,
  validatePasswords,
  validateCodes
} from "../../utils/validate";
import { GetSms, Login, Register } from "../../api/login";
export default {
  name: "Login",
  setup(props, { refs, root }) {
    const validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (validateEmail(value)) {
        callback(new Error("用户名格式有误"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      ruleForm.password = stripscript(value);
      value = ruleForm.password;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (validatePasswords(value)) {
        callback(new Error("密码为6-20位字母加数字组合"));
      } else {
        callback();
      }
    };
    const validateAgainPassword = (rule, value, callback) => {
      if (model.value === "login") {
        callback();
      }
      ruleForm.againPassword = stripscript(value);
      value = ruleForm.againPassword;
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (ruleForm.password !== value) {
        callback(new Error("两次密码输入不一致"));
      } else {
        callback();
      }
    };
    const validateCode = (rule, value, callback) => {
      ruleForm.code = stripscript(value);
      value = ruleForm.code;
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (validateCodes(value)) {
        callback(new Error("验证码格式有误"));
      } else {
        callback();
      }
    };
    const menuTab = reactive([
      { txt: "登录", current: true, type: "login" },
      { txt: "注册", current: false, type: "register" }
    ]);
    const model = ref("login");
    const loginStatus = ref(true);
    const codeStatus = ref(false);
    const codeButtonText = ref("获取验证码");
    let timer = ref(null);
    const ruleForm = reactive({
      username: "",
      password: "",
      againPassword: "",
      code: ""
    });
    const rules = reactive({
      username: [{ validator: validateUsername, trigger: "blur" }],
      password: [{ validator: validatePassword, trigger: "blur" }],
      againPassword: [{ validator: validateAgainPassword, trigger: "blur" }],
      code: [{ validator: validateCode, trigger: "blur" }]
    });
    onMounted(() => {});

    const getSms = () => {
      if (ruleForm.username === "") {
        root.$message.error("邮箱不能为空!");
        return false;
      }
      if (validateEmail(ruleForm.username)) {
        root.$message.error("邮箱格式不正确!");
        return false;
      }

      codeStatus.value = true;
      codeButtonText.value = "发送中";

      setTimeout(() => {
        GetSms({
          username: ruleForm.username,
          module: model.value
        }).then(res => {
          root.$message.success(res.data.message);
          loginStatus.value = false;
          countDown(60);
        });
      }, 1000);
    };
    const toggleMenu = data => {
      menuTab.forEach(element => {
        element.current = false;
      });
      data.current = true;
      model.value = data.type;
      // 重置表单
      refs["loginForm"].resetFields();
      clearCountDown();
    };
    const submitForm = formName => {
      refs[formName].validate(valid => {
        if (valid) {
          let data = {
            username: ruleForm.username,
            password: sha1(ruleForm.password),
            code: ruleForm.code,
            module: model.value
          };
          if (model.value === "login") {
            root.$store.dispatch("login", data).then(res => {
              root.$message.success(res.data.message);
              root.$router.push({
                name: "Console"
              });
            });
          } else {
            Register(data).then(res => {
              root.$message.success(res.data.message);
              toggleMenu(menuTab[0]);
              clearCountDown();
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    const countDown = number => {
      let time = number;
      if (timer) {
        clearInterval(timer.value);
      }
      timer.value = setInterval(() => {
        time--;
        if (time === 0) {
          clearInterval(timer.value);
          codeStatus.value = false;
          codeButtonText.value = "再次获取";
        } else {
          codeButtonText.value = `${time}秒重新获取`;
        }
      }, 1000);
    };
    const clearCountDown = () => {
      codeStatus.value = false;
      codeButtonText.value = "获取验证码";
      clearInterval(timer.value);
    };
    return {
      menuTab,
      model,
      toggleMenu,
      submitForm,
      ruleForm,
      rules,
      getSms,
      loginStatus,
      codeStatus,
      codeButtonText
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
