// Пути для Контактов

const ContactsIndex = () => import('../views/contacts/ContactsIndex');
const ContactsCreate = () => import('../views/contacts/ContactsCreate');
const ContactsEdit = () => import('../views/contacts/ContactsEdit');

export default [

    {
        path: '/contacts',
        name: 'contacts-index',
        component: ContactsIndex,
    },
    {
        path: '/contacts/create',
        name: 'contacts-create',
        component: ContactsCreate,
    },
    {
        path: '/contacts/:id(\\d+)/edit',
        name: 'contacts-edit',
        component: ContactsEdit,
    },

];
