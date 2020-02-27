<template>
    <div class="container">
        <FunctionalCalendar
            v-model="calendarData"
            :configs="calendarConfigs"
        ></FunctionalCalendar>
    </div>
</template>

<script>

    import { FunctionalCalendar } from 'vue-functional-calendar';

    export default {
        components: {
            FunctionalCalendar
        },
        data() {
            return {
                calendarData: {},
                calendarConfigs: {
                    isDateRange: true,
                    withTimePicker: true,
                    changeMonthFunction: true,
                    changeYearFunction: true,
                    changeYearStep: 1,
                    dayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',],
                    shortMonthNames: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
                }
            }
        },
        mounted() {
            console.log('Component mounted.')

            axios
                .get('/api/test')
                .then(request => {
                    console.log(request);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
</script>
