<template>
    <div id="nav-wrap">
        <h1 class="logo"><img src="../assets/logo.png" alt=""></h1>
        <el-menu
                background-color="transparent"
                text-color="#fff"
                :collapse="isCollapse"
                active-text-color="#fff" router>
            <template v-for="(item, index) in routers">
                <el-submenu v-if="!item.hidden" :key="item.id" :index="index+''">
                    <template slot="title">
                        <svg-icon class="icon" :name="item.meta.icon"></svg-icon>
                        <span>{{item.meta.name}}</span>
                    </template>
                    <el-menu-item v-for="(subItem, index) in item.children" :key="subItem.id" :index="subItem.path">
                        {{subItem.meta.name}}
                    </el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import {ref, reactive, computed} from '@vue/composition-api'

    export default {
        name: "Nav",
        setup(props, {root}) {
            const isCollapse = computed(() => root.$store.state.isCollapse);
            const routers = reactive(root.$router.options.routes)
            return {
                routers,
                isCollapse
            }
        }
    }
</script>

<style lang="scss">
    #nav-wrap {
        position: fixed;
        height: 100vh;
        top: 0;
        left: 0;
        background-color: #344a5f;
        @include webkit(transition, all .3s ease 0s)
    }

    .el-submenu .el-menu-item.is-active {
        background-color: $main_color !important;
    }

    .el-menu {
        border: 0 !important;
    }

    .el-menu--vertical {
        .el-menu {
            background-color: $main_color !important;
        }
        .el-menu-item {
            line-height: 56px !important;
        }
        .el-menu-item:hover {
            background-color: $main_color !important;
        }
    }

    .icon {
        margin-right: 10px;
    }

    .logo {
        text-align: center;

        img {
            margin: 28px auto 25px;
        }
    }

    .open {
        #nav-wrap {
            width: 250px;
        }

        .logo {
            img {
                width: 92px;
            }
        }
    }

    .close {
        #nav-wrap {
            width: 64px;
        }
        .logo {
            img {
                width: 32px;
            }
        }
        .el-submenu {
            &.is-opened {
                > .el-submenu__title {
                    background-color: $main_color !important;
                }
            }
        }
    }
</style>
