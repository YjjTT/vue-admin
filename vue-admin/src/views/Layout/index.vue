<template>
    <div>
        <Header />
        <Main />
        <Nav />
    </div>
</template>

<script>
    import Header from "../../components/Header"
    import Main from "../../components/Main"
    import Nav from "../../components/Nav"
    export default {
        name: "Layout",
        setup() {

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
