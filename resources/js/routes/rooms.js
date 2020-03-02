// Пути для Номеров

const RoomsIndex = () => import('../views/rooms/RoomsIndex');
const RoomsCreate = () => import('../views/rooms/RoomsCreate');
const RoomsEdit = () => import('../views/rooms/RoomsEdit');

export default [

    {
        path: '/rooms',
        name: 'rooms',
        component: RoomsIndex,
    },
    {
        path: '/rooms/create',
        name: 'rooms-create',
        component: RoomsCreate,
    },
    {
        path: '/rooms/:id(\\d+)/edit',
        name: 'rooms-edit',
        component: RoomsEdit,
    },

];
