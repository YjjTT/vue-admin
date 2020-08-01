<template>
  <div id="header-wrap">
    <div class="pull-left header-icon" @click="navMenuState">
      <svg-icon name="menu"></svg-icon>
    </div>
    <div class="pull-right">
      <div class="user-info pull-left">
        <img src="../assets/logo.png" alt />
        {{ username }}
      </div>
      <div class="pull-left header-icon" @click="logout">
        <svg-icon name="logout"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/composition-api";
export default {
  name: "Header",
  setup(props, { root }) {
    const username = computed(() => root.$store.state.username);
    const navMenuState = () => {
      root.$store.commit("setCollapse");
    };
    const logout = () => {
      root.$store.dispatch("logout").then(() => {
        root.$router.push({
          name: "Login"
        });
      });
    };
    return {
      navMenuState,
      username,
      logout
    };
  }
};
</script>

<style lang="scss">
#header-wrap {
  position: fixed;
  top: 0;
  right: 0;
  height: 75px;
  line-height: 75px;
  background-color: #fff;
  @include webkit(box-shadow, 0 3px 16px 0 rgba(0, 0, 0, 0.1));
  @include webkit(transition, all 0.3s ease 0s);
  @include clearfix;
}
.header-icon {
  padding: 0 32px;
  svg {
    margin-bottom: -8px;
    font-size: 20px;
    cursor: pointer;
  }
}
.user-info {
  height: 100%;
  padding: 0 32px;
  border: 1px solid #ededed;
  + .header-icon {
    padding: 0 28px;
  }
  img {
    width: 30px;
    display: inline-block;
    margin-bottom: -12px;
    margin-right: 12px;
    border-radius: 50px;
  }
}
.open {
  #header-wrap {
    left: 250px;
  }
}
.close {
  #header-wrap {
    left: 64px;
  }
}
</style>
