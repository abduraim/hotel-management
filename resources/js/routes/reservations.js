// Пути для Бронирований

const ReservationsIndex = () => import('../views/reservations/ReservationsIndex');
const ReservationsCreate = () => import('../views/reservations/ReservationsCreate');

export default [

    {
        path: '/reservations',
        name: 'reservations-index',
        component: ReservationsIndex,
    },
    {
        path: '/reservations/create',
        name: 'reservations-create',
        component: ReservationsCreate,
    },

];
