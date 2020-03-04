<template>

    <el-container v-loading="isLoading" direction="vertical">

        <h3>Бронирования</h3>

        <div class="controls">
            <el-button size="small" circle icon="el-icon-plus" type="primary" title="Добавить бронирование" @click="$router.push({ name: 'reservations-create' })"></el-button>
        </div>

        <el-switch v-model="fixed" active-text="Зафиксировать названия номеров">
        </el-switch>

        <el-table
            :data="rooms"
            style="width: 100%"
            @cell-click="handleClick"
            size="mini"
            class="reservation-table"
            border
        >

            <el-table-column
                :fixed="fixed"
                prop="name"
                label="Номер"
                width="100"
                class="room-name"
            ></el-table-column>

            <el-table-column
                :label="`${index + 1}`"
                width="30"
                v-for="(day, index) in daysInMonth"
                :key="index"
            >
                <template slot-scope="scope">
                    <i class="el-icon-circle-close" v-if="!scope.row.status"></i>
                </template>
            </el-table-column>

        </el-table>

    </el-container>

</template>

<script>

    import Helpers from '../../components/helpers';

    import Controller from '../../components/commonController';

    export default {
        name: "Reservations",
        data() {
            return {
                Helpers,
                Controller,

                isLoading: false,   // Флаг отображения загрузки

                fixed: true,        // Флаг фиксирования столбца с названиями номеров

                rooms: [],

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


                daysInMonth: 0,
            }
        },
        methods: {

            handleClick(row, column, cell, event) {
                console.log(row, column, cell, event);
            },

            getRooms() {

                this.isLoading = true;

                Controller.getActiveRooms()
                    .then(response => {
                        this.rooms = response.data;
                        console.log(this.rooms);
                        this.isLoading = false;
                    });
            },

            // Получение бронирований на принимаемы месяц
            getReservations(monthNumber = 3) {




                axios
                    .get('/api/reservations/')
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });

            }

        },
        mounted() {
            let date = new Date();

            let day = date.getDate()
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let daysInMonth = new Date(year, month, 0).getDate()

            this.daysInMonth = daysInMonth;

            console.log(daysInMonth);

            this.getRooms();

            this.getReservations();
        }
    }

</script>

<style lang="scss" scoped>



</style>
