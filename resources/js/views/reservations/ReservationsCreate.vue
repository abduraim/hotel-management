<template>

    <el-container v-loading="isLoading" direction="vertical">

        <h3>Создание нового бронирования</h3>

        <el-form ref="form" :model="formReservation" label-width="200px">

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

            <el-form-item label="Email">
                <el-select v-model="formReservation.room_id" :disabled="selectRoomDisabled" placeholder="Выберите номер">
                    <el-option
                        v-for="room in rooms"
                        :key="room.id"
                        :label="room.name"
                        :value="room.id"
                        :disabled="room.disabled"
                    ></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="Даты бронирования">
                <functional-calendar
                    v-model="calendarData"
                    :configs="calendarConfig"
                    @selectedDaysCount="selectedDaysCount"
                    @choseDay="choseDay"
                ></functional-calendar>
            </el-form-item>

            <el-form-item>

                <el-button
                    size="small"
                    type="plain"
                    @click="$router.push({ name: 'reservations-index'} )"
                    title="Отменить создание бронирования и вернуться"
                >
                    Отмена
                </el-button>

                <el-button
                    size="small"
                    type="success"
                    icon="el-icon-check"
                    @click="doReservation"
                    title="Сохранить бронирование"
                >
                    Забронировать
                </el-button>

            </el-form-item>

        </el-form>




    </el-container>

</template>

<script>

    import Helpers from '../../components/helpers';
    import {FunctionalCalendar} from 'vue-functional-calendar';

    export default {
        name: "ReservationsCreate",
        data() {
            return {
                Helpers,
                isLoading: false,   // Флаг отображения загрузки
                calendarData: {},
                calendarConfig: {
                    disabledDates: ['beforeToday'],
                    isDateRange: true,
                    withTimePicker: true,
                    changeMonthFunction: true,
                    changeYearFunction: true,
                    changeYearStep: 1,
                    dayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ],
                    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                    shortMonthNames: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                },

                // Данные бронирования
                formReservation: {
                    room_id: 3,
                    name: '',
                    surname: '',
                    phone: '',
                    email: '',
                },

                selectRoomDisabled: false,

                rooms: [
                    {
                        id: 1,
                        name: 'First',
                        disabled: false,
                    },
                    {
                        id: 2,
                        name: 'Second',
                        disabled: true,
                    },
                    {
                        id: 3,
                        name: 'Third',
                        disabled: false,
                    },
                ],

            }
        },
        components: {
            FunctionalCalendar,
        },
        methods: {

            choseDay(ob) {
                console.log(this.calendarData.dateRange.start.dateTime);
                console.log(this.calendarData.dateRange.end.dateTime);
            },

            selectedDaysCount(selectedDaysAmount) {
                // console.log(this.calendarData.dateRange.start.dateTime);
                // console.log(this.calendarData.dateRange.end.dateTime);
            },

            // Клик по кнопке Забронировать
            doReservation() {
                console.log(this.formReservation)
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

        }
    }
</script>

<style lang="scss">

    .vfc-styles-conditional-class {
        max-width: 380px;
        .vfc-main-container {
            max-height: 344px !important;
        }
    }

</style>
