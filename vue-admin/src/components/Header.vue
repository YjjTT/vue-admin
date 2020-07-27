<template>
    <div id="header-wrap">

    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss">
    #header-wrap {
        position: fixed;
        top: 0;
        right: 0;
        left: 250px;
        height: 75px;
        background-color: #fff;
        @include webkit(box-shadow, 0 3px 16px 0 rgba(0,0,0,.1))
    }
</style>
