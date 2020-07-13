<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li v-for="item in menuTab"
            :key="item.txt"
            :class="{'current': item.current}"
            @click="toggleMenu(item)">{{item.txt}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      menuTab: [
        {txt: '登录', current: true},
        {txt: '注册', current: false}
      ]
    }
  },
  methods: {
    toggleMenu(data) {
      this.menuTab.forEach(element => {
        element.current = false
      })
      data.current = true
    }
  }
};
</script>

<style lang="scss" scoped>
    #login {
        background-color: $color_main;
        height: 100vh;
    }
  .login-wrap {
    width: 330px;
    margin: auto;
    .menu-tab {
      text-align: center;
      li {
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: #ffffff;
        border-radius: 2px;
        cursor: pointer;
      }
      .current {
        background-color: rgba(0, 0, 0, .1);
      }
    }
  }
</style>
