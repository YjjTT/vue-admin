<template>
    <div>
        <el-row :gutter="16">
            <el-col :span="3">
                <div class="label-wrap category">
                    <label for>类型:</label>
                    <div class="wrap-content">
                        <el-select v-model="category" placeholder="请选择" style="width: 100%;">
                            <el-option
                                    v-for="item in categorys"
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
                                v-model="date"
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
            <el-col :span="3">
                <div class="label-wrap keyword">
                    <label for>关键字:</label>
                    <div class="wrap-content">
                        <el-select v-model="keyword" placeholder="请选择" style="width: 100%;">
                            <el-option
                                    v-for="item in keywords"
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
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="2">
                <el-button style="width: 100%;" type="danger" class="pull-right">新增</el-button>
            </el-col>
        </el-row>
        <div class="padding30"></div>
<!--        表格数据-->
        <el-table
                :data="tableData"
                border
                header-align="center"
                style="width: 99%;">
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
                    align="center"
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="danger" size="mini">删除</el-button>
                    <el-button type="success" size="mini">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="padding30"></div>
<!--        底部分页-->
        <el-row>
            <el-col :span="12" class="pull-left">
                <el-button>批量删除</el-button>
            </el-col>
            <el-col :span="12">
                <el-pagination
                        class="pull-right"
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-sizes="[10, 20, 30, 40]"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="1000">
                </el-pagination>
            </el-col>
        </el-row>
    </div>
</template>
￿
<script>
    import {reactive, ref} from "@vue/composition-api";

    export default {
        name: "Index",
        setup() {
            const categorys = reactive([
                {value: "1", label:"国内信息"},
                {value: "2", label:"国外信息"},
                {value: "3", label:"海外信息"},
            ])
            const keywords = reactive([
                {value: "1", label:"ID"},
                {value: "2", label:"名字"},
            ])
            const tableData =  reactive([{
                title: '家具大昆仑决发可垃圾费昆仑决啊双份昆仑决挨罚可垃圾费咖啡',
                category: '国内信息',
                date: '2016-05-02',
                user: '王小虎'
            }, {
                title: '家具大昆仑决发可垃圾费昆仑决家具大昆仑决发可垃圾费昆仑决啊双份昆仑决挨罚可垃圾费咖啡啊双份昆仑决挨罚可垃圾费咖啡',
                category: '国内信息',
                date: '2016-05-02',
                user: '王小虎'
            }, {
                title: '家具大昆仑决发可垃圾份昆仑决挨罚可垃圾费咖啡',
                category: '国内信息',
                date: '2016-05-02',
                user: '王小虎'
            }, {
                title: '家具大份昆仑决挨罚可垃圾费咖啡',
                category: '国内信息',
                date: '2016-05-02',
                user: '王小虎'
            }])
            const category = ref("");
            const date = ref("");
            const keyword = ref("")
            const handleSizeChange = (val) => {

            }
            const handleCurrentChange = (val) => {

            }
            return {
                keyword,
                date,
                category,
                tableData,
                categorys,
                keywords,
                handleCurrentChange,
                handleSizeChange
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
