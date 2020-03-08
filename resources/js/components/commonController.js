// Общий контроллер для работы с API

import Helpers from "./helpers";

export default {

    Helpers,


    // --- ROOMS ---

    // Получить список активных Номеров
    async getActiveRooms() {
        return this.sendRequest('/api/rooms', {}, 'get');
    },



    // --- CONTACTS ---

    // Получить список контактов
    async getContactList(data = {}) {
        return this.sendRequest('/api/contacts/get-list', data);
    },

    // Получить информацию об определенном контакте
    async getContactItem(data) {
        return this.sendRequest(`/api/contacts/get-item`, data);
    },

    // Получить информацию об определенном контакте
    async updateContact(data = {}) {
        return this.sendRequest('/api/contacts/update', data);
    },

    // Создать контакт
    async createContact(data = {}) {
        return this.sendRequest('/api/contacts/save', data);
    },

    // Удалить контакт
    async deleteContact(data) {
        return this.sendRequest('/api/contacts/delete', data);
    },



    // --- RESERVATIONS ---







    // Общий метод для отправки запросов
    async sendRequest(url = '', data = {}) {
        let result = false;
        await axios
            .post(url, data)
            .then(response => {
                result = response;
                console.log(response);
            })
            .catch(error => {
                Helpers.handleError(error);
                console.log(error);
            });
        return result;
    },


}
