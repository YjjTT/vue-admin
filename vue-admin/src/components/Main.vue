<template>
    <div id="main-wrap">
        <div class="main-content">
            <div class="content"></div>
        </div>
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
        height: 100vh;
    }
    .main-content {
        width: 100%;
        height: 100%;
        padding-top: 105px;
        padding-left: 280px;
        @include webkit(box-sizing, border-box);
        .content {

        }
    }
</style>
