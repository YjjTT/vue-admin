<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="label-wrap">
            <label for>类型:</label>
            <div class="wrap-content">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
        </el-col>

        <el-col :span="8">
          <el-form-item label="日期: ">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :span="4">
          <el-form-item label="关键字: ">
            <el-select v-model="value" placeholder="请选择" style="width: 100px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="4">
          <el-input placeholder="请输入内容"></el-input>
        </el-col>

        <el-col :span="3">
          <el-button type="danger">搜索</el-button>
        </el-col>

        <el-col :span="2">
          <el-button type="danger" class="pull-right">新增</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/composition-api";
export default {
  name: "List",
  setup() {
    const options = reactive([
      {
        value: "选项1",
        label: "黄金糕"
      },
      {
        value: "选项2",
        label: "双皮奶"
      },
      {
        value: "选项3",
        label: "蚵仔煎"
      },
      {
        value: "选项4",
        label: "龙须面"
      },
      {
        value: "选项5",
        label: "北京烤鸭"
      }
    ]);
    const value = ref("");
    const value1 = ref("");
    return {
      options,
      value,
      value1
    };
  }
};
</script>

<style lang="scss">
.label-wrap {
  label {
    float: left;
    line-height: 40px;
    width: 60px;
  }
  .wrap-content {
    margin-left: 60px;
  }
}
</style>
