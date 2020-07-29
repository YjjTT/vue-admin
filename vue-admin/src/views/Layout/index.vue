<template>
    <div id="layout" :class="[menuStatus ? 'close': 'open']">
        <Header />
        <Main />
        <Nav />
    </div>
</template>

<script>
    import {ref, reactive, computed} from '@vue/composition-api'
    import Header from "../../components/Header"
    import Main from "../../components/Main"
    import Nav from "../../components/Nav"
    export default {
        name: "Layout",
        setup(props, { root }) {
            const menuStatus = computed(() => root.$store.state.isCollapse)
            return {
                menuStatus
            }
        },
        components: {
            Header,
            Main,
            Nav
        }
    }
</script>

<style lang="scss">

</style>
