<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li v-for="item in menuTab"
            :key="item.txt"
            :class="{'current': item.current}"
            @click="toggleMenu(item)">{{item.txt}}</li>
      </ul>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form">
        <el-form-item prop="username" class="item-form">
          <label>邮箱</label>
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item prop="password" class="item-form">
          <label>密码</label>
          <el-input type="text" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
        </el-form-item>

        <el-form-item prop="againPassword" class="item-form" v-show="model === 'register'">
          <label>确认密码</label>
          <el-input type="text" v-model="ruleForm.againPassword" autocomplete="off" minlength="6" maxlength="20"></el-input>
        </el-form-item>

        <el-form-item prop="code" class="item-form">
          <label>验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input v-model.number="ruleForm.code" minlength="6" maxlength="6"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button type="success" class="block">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn block" type="danger" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { stripscript, validateEmail, validatePasswords, validateCodes } from "../../utils/validate";
  export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else if (validateEmail(value)){
        callback(new Error('用户名格式有误'));
      } else {
        callback();
      }
    }
    const validatePassword = (rule, value, callback) => {
      this.ruleForm.password = stripscript(value)
      value = this.ruleForm.password
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (validatePasswords(value)) {
        callback(new Error('密码为6-20位字母加数字组合'));
      } else {
        callback();
      }
    }
    const validateAgainPassword = (rule, value, callback) => {
      if (this.model === 'login') { callback() }
      this.ruleForm.againPassword = stripscript(value)
      value = this.ruleForm.againPassword
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (this.ruleForm.password !== value) {
        callback(new Error('两次密码输入不一致'));
      } else {
        callback();
      }
    }
    const validateCode = (rule, value, callback) => {
      this.ruleForm.code = stripscript(value)
      value = this.ruleForm.code
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else if (validateCodes(value)) {
        callback(new Error('验证码格式有误'));
      } else {
        callback();
      }
    }
    return {
      menuTab: [
        {txt: '登录', current: true, type: 'login'},
        {txt: '注册', current: false, type: 'register'}
      ],
      model: 'login',
      ruleForm: {
        username: '',
        password: '',
        againPassword: '',
        code: ''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ],
        againPassword: [
          { validator: validateAgainPassword, trigger: 'blur' }
        ],
        code: [
          { validator: validateCode, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    toggleMenu(data) {
      this.menuTab.forEach(element => {
        element.current = false
      })
      data.current = true
      this.model = data.type
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
