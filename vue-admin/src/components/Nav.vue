<template>
    <div id="nav-wrap">
        <el-menu
                background-color="transparent"
                text-color="#fff"
                active-text-color="#fff" router>
            <template v-for="(item, index) in routers">
                <el-submenu v-if="!item.hidden" :key="item.id" :index="index">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{item.meta.name}}</span>
                    </template>
                    <el-menu-item v-for="(subItem, index) in item.children" :key="subItem.id" :index="subItem.path">{{subItem.meta.name}}</el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import {ref, reactive} from '@vue/composition-api'
    export default {
        name: "Nav",
        setup(props, {root}) {
            const routers = reactive(root.$router.options.routes)
            console.log(routers)
            return {
                routers
            }
        }
    }
</script>

<style lang="scss">
    #nav-wrap {
        position: fixed;
        width: 250px;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: #344a5f;
    }
    .el-submenu .el-menu-item.is-active{
        background-color: #f56c6c !important;
    }
</style>
