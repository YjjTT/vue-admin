<template>
    <div id="main-wrap">
        <div class="main-content">
            <div class="content">
                <router-view />
            </div>
        </div>
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
        @include webkit(box-sizing, border-box);
        @include webkit(transition, all .3s ease 0s);
        .content {

        }
    }
    .open {
        .main-content {
            padding-left: 280px;
        }
    }
    .close {
        .main-content {
            padding-left: 94px;
        }
    }
</style>
