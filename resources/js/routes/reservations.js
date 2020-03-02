// Пути для Бронирований

const ReservationsIndex = () => import('../views/reservations/ReservationsIndex');

export default [

    {
        path: '/reservations',
        name: 'reservations-index',
        component: ReservationsIndex,
    },

];
