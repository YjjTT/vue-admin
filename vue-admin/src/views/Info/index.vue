<template>
    <div>
        <el-row :gutter="16">
            <el-col :span="3">
                <div class="label-wrap category">
                    <label for>类型:</label>
                    <div class="wrap-content">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%;">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                            ></el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="label-wrap date">
                    <label for>日期:&nbsp;&nbsp;</label>
                    <div class="wrap-content">
                        <el-date-picker
                                v-model="value1"
                                type="daterange"
                                style="width: 100%;"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                        >
                        </el-date-picker>
                    </div>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="label-wrap keyword">
                    <label for>关键字:</label>
                    <div class="wrap-content">
                        <el-select v-model="value" placeholder="请选择" style="width: 100%;">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                            ></el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <el-col :span="3">
                <el-input style="width: 100%;" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="2">
                <el-button style="width: 100%;" type="danger">搜索</el-button>
            </el-col>
            <el-col :span="3">&nbsp;</el-col>
            <el-col :span="2">
                <el-button style="width: 100%;" type="danger" class="pull-right">新增</el-button>
            </el-col>
        </el-row>
<!--        表格数据-->
        <el-table
                :data="tableData"
                border
                header-align="center"
                style="width: 100%">
            <el-table-column
                    type="selection"
                    width="45">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="title"
                    label="标题"
                    width="830">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="category"
                    label="类型"
                    width="130">
            </el-table-column>
            <el-table-column
                    align="center"
                    width="230"
                    prop="date"
                    label="日期">
            </el-table-column>
            <el-table-column
                    width="115"
                    align="center"
                    prop="user"
                    label="管理员">
            </el-table-column>
            <el-table-column
                    label="操作">
            </el-table-column>
        </el-table>
    </div>
</template>
￿
<script>
    import {reactive, ref} from "@vue/composition-api";

    export default {
        name: "Index",
        setup() {
            const options = reactive([
                {
                    value: "选项1",
                    label: "黄金糕"
                },
                {
                    value: "选项2",
                    label: "双皮奶"
                },
                {
                    value: "选项3",
                    label: "蚵仔煎"
                },
                {
                    value: "选项4",
                    label: "龙须面"
                },
                {
                    value: "选项5",
                    label: "北京烤鸭"
                }
            ]);
            const tableData =  reactive([{
                title: '家具大昆仑决发可垃圾费昆仑决啊双份昆仑决挨罚可垃圾费咖啡',
                category: '国内信息',
                date: '2016-05-02',
                user: '王小虎'
            }, {
                title: '家具大昆仑决发可垃圾费昆仑决啊双份昆仑决挨罚可垃圾费咖啡',
                category: '国内信息',
                date: '2016-05-02',
                user: '王小虎'
            }, {
                title: '家具大昆仑决发可垃圾费昆仑决啊双份昆仑决挨罚可垃圾费咖啡',
                category: '国内信息',
                date: '2016-05-02',
                user: '王小虎'
            }, {
                title: '家具大昆仑决发可垃圾费昆仑决啊双份昆仑决挨罚可垃圾费咖啡',
                category: '国内信息',
                date: '2016-05-02',
                user: '王小虎'
            }])
            const value = ref("");
            const value1 = ref("");
            return {
                options,
                value,
                value1,
                tableData
            };
        }
    };
</script>

<style lang="scss" scoped>
    @import "../../styles/sassConfig.scss";

    .label-wrap {
        &.category {
            @include labelDom(left, 60, 40);
        }

        &.date {
            @include labelDom(right, 93, 40);
        }

        &.keyword {
            @include labelDom(right, 99, 40);
        }
    }
</style>
