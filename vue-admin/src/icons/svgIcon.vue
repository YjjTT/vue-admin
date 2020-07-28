<template>
    <svg class="t-icon">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "svgIcon",
        props: ['name']
    }
</script>

<style lang="scss">
    .t-icon {
        width: 1.2em;
        height: 1.2em;
    }
</style>
