<template>

    <el-container v-loading="isLoading" direction="vertical">

        <h3>Создание нового бронирования</h3>

        <functional-calendar
            v-model="calendarData"
            :configs="calendarConfig"
            @selectedDaysCount="selectedDaysCount"
            @choseDay="choseDay"
        ></functional-calendar>


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



</style>
