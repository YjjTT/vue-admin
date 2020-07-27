<template>
    <div id="main-wrap">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style lang="scss">
    #main-wrap {
        width: 100vw;
        height: 100vh;
        padding: 75px 0 0 250px;
        @include webkit(box-sizing, border-box);
    }
</style>
