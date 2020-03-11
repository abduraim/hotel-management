<template>

    <el-container v-loading="isLoading" direction="vertical">

        <h3>Создание нового бронирования</h3>

        <el-form ref="form" :model="formReservation" label-width="200px">

            <el-form-item label="Номер">
                <el-select v-model="formReservation.room_id" :disabled="selectRoomDisabled" placeholder="Выберите номер">
                    <el-option
                        v-for="room in rooms"
                        :key="room.id"
                        :label="room.name"
                        :value="room.id"
                        :disabled="!room.status"
                    ></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="Имя">
                <el-input v-model="formReservation.name" placeholder="Введите имя"></el-input>
            </el-form-item>

            <el-form-item label="Фамилия">
                <el-input v-model="formReservation.surname" placeholder="Введите фамилию"></el-input>
            </el-form-item>

            <el-form-item label="Телефон">
                <el-input v-model="formReservation.phone" placeholder="Введите телефон"></el-input>
            </el-form-item>

            <el-form-item label="Email">
                <el-input v-model="formReservation.email" placeholder="Введите email"></el-input>
            </el-form-item>

            <el-form-item label="Даты бронирования">
                <functional-calendar
                    v-model="formReservation.period"
                    :configs="calendarConfig"
                    @selectedDaysCount="selectedDaysCount"
                    @choseDay="choseDay"
                ></functional-calendar>
            </el-form-item>

            <el-form-item>

                <el-button-group>

                    <el-button
                        type="plain"
                        @click="$router.push({ name: 'reservations-index'} )"
                        title="Отменить создание бронирования и вернуться"
                    >
                        Отмена
                    </el-button>

                    <el-button
                        type="success"
                        @click="doReservation"
                        title="Сохранить бронирование"
                    >
                        Забронировать
                    </el-button>

                </el-button-group>

            </el-form-item>

        </el-form>

    </el-container>

</template>

<script>

    import Helpers from '../../components/helpers';
    import Controller from '../../components/commonController';
    import {FunctionalCalendar} from 'vue-functional-calendar';

    export default {
        name: "ReservationsCreate",
        data() {
            return {
                isLoading: false,   // Флаг отображения загрузки
                calendarData: {},
                calendarConfig: {
                    dateFormat: 'yyyy.mm.dd',
                    disabledDates: ['beforeToday'],
                    isDateRange: true,
                    // withTimePicker: true,
                    changeMonthFunction: true,
                    changeYearFunction: true,
                    changeYearStep: 1,
                    dayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ],
                    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                    shortMonthNames: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                },

                // Данные бронирования
                formReservation: {
                    room_id: '',
                    name: '',
                    surname: '',
                    phone: '',
                    email: '',
                    period: {},
                },

                selectRoomDisabled: false,

                rooms: [],

            }
        },
        components: {
            FunctionalCalendar,
        },
        methods: {

            // Загрузка списка номеров
            getRooms() {

                this.isLoading = true;

                Controller.getRoomList()
                    .then(response => {
                        this.rooms = response.data.data;

                        // Если бронирование открыто на определнный номер
                        if (this.$route.query.room_id) {
                            this.formReservation.room_id = parseInt(this.$route.query.room_id);
                            this.selectRoomDisabled = true;
                        }

                        this.isLoading = false;
                    });

            },






            choseDay(ob) {
                // console.log(this.formReservation.period.dateRange.start.date);
                // console.log(this.formReservation.period.dateRange.end.date);
            },

            selectedDaysCount(selectedDaysAmount) {
                console.log(this.formReservation.period.dateRange.start.date);
                console.log(this.formReservation.period.dateRange.end.date);
            },

            // Клик по кнопке Забронировать
            doReservation() {
                console.log(this.formReservation);

                this.isLoading = true;

                Controller.createReservation(this.formReservation)
                    .then(response => {
                        if (response.status == 201) {
                            Helpers.showSuccessMessage('Бронирование успешно создано!');
                        }
                        this.isLoading = false;
                    });

            },


            // v-model="calendar"

            // :day-names="dayNames" //dayNames=['Su','Mo','Tu','We','Th','Fr','Sa']
            // :month-names="monthNames" //monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"]

            // v-on:choseDay="clickDay"
            // v-on:changeMonth="changeDate"
            // v-on:isToday="clickToday"

            // :sundayStart="true"

            // :is-date-range="true"
            // :is-date-picker="true"
            // :is-modal="false"

            // :is-multiple="true"
            // :calendars-count="3"

            // :change-month-function="true"
            // :change-year-function="true"

            // :markDate=arr // arr=['2018/10/20','2018/10/28', '2018/10/16']
            // :agoDayHide='1514937600' //Do not click before a date. Timestamp 10 digits
            // :futureDayHide='1525104000' //Do not click after a date Timestamp 10 digits

        },
        mounted() {
            this.getRooms();
            console.log(this.$route.query);
        },
    }

</script>

<style lang="scss">



</style>
