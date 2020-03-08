// Общий контроллер для работы с API

import Helpers from "./helpers";

export default {

    Helpers,


    // --- ROOMS ---

    // Получить список Номеров
    async getRoomList(data = {}) {
        return this.sendRequest('/api/rooms/get-list', data);
    },

    // Получить информацию об определенном номере
    async getRoomItem(data) {
        return this.sendRequest(`/api/rooms/get-item`, data);
    },

    // Создать контакт
    async createRoom(data = {}) {
        return this.sendRequest('/api/rooms/save', data);
    },

    // Обновить информацию о Номере
    async updateRoom(data = {}) {
        return this.sendRequest('/api/rooms/update', data);
    },

    // Изменить статус номера
    async changeRoomStatus(data = {}) {
        return this.sendRequest('/api/rooms/change-status', data);
    },

    // Удалить Номер
    async deleteRoom(data = {}) {
        return this.sendRequest('/api/rooms/delete', data);
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
