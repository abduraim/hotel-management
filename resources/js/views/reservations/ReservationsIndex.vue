<template>

    <el-container v-loading="isLoading" direction="vertical">

        <h3>Бронирования</h3>

        <div class="controls">
            <el-button size="small" circle icon="el-icon-plus" type="primary" title="Добавить бронирование" @click="$router.push({ name: 'reservations-create' })"></el-button>
        </div>

        <el-table
            :data="tableData"
            style="width: 100%">

            <el-table-column
                :fixed="fixed"
                prop="name"
                label="Номер"
                width="100">
            </el-table-column>



            <el-table-column
                prop="busy"
                :label="index + 1"
                width="40"
                v-for="(days, index) in daysInMonth"
                :key="index"
            >
            </el-table-column>


        </el-table>

        <div class="chart-box__wrapper">

            <div class="chart-box">

                <div class="row">
                    <div class="row-title">Номер</div>
                    <div class="day-cell" v-for="(days, index) in daysInMonth">{{index + 1}}</div>
                </div>

                <div class="row" v-for="room in rooms">
                    <div class="row-title">{{room.name}}</div>
                    <div class="day-cell" v-for="days in daysInMonth"></div>
                </div>



            </div>

        </div>


    </el-container>

</template>

<script>

    import Helpers from '../../components/helpers';

    export default {
        name: "Reservations",
        data() {
            return {
                Helpers,
                isLoading: false,   // Флаг отображения загрузки

                fixed: 'fixed',

                tableData: [{
                    name: 'First',
                    busy: 'X',
                }, {
                    name: 'Second',
                    busy: 'X',
                }, {
                    name: 'Third',
                    busy: 'X',
                }, {
                    name: 'Fourth',
                    busy: 'X',
                }],


                rooms: [
                    {
                        id: 1,
                        name: 'First',
                    },
                    {
                        id: 2,
                        name: 'Second',
                    },
                    {
                        id: 3,
                        name: 'Third',
                    },
                ],
                daysInMonth: 0,
            }
        },
        methods: {
            handleClick() {
                console.log('click');
            },
        },
        mounted() {
            let date = new Date();

            let day = date.getDate()
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let daysInMonth = new Date(year, month, 0).getDate()

            this.daysInMonth = daysInMonth;

            console.log(daysInMonth);
        }
    }
</script>

<style lang="scss" scoped>

    .chart-box__wrapper {
        overflow-x: auto;
        .chart-box {
            /*min-width: 767px;*/

            padding: 20px;

            .row {
                display: flex;
                flex-wrap: nowrap;

                .row-title {
                    flex-shrink: 0;
                    width: 100px;
                    border: 1px solid green;
                    display: flex;
                    align-items: center;
                }

                .day-cell {
                    flex-shrink: 0;
                    width: 30px;
                    height: 30px;
                    border: 1px solid green;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }



        }
    }

</style>
