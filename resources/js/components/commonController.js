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
    async getContactsPaginated(data = {}) {
        return this.sendGetRequest('/api/contacts', data);
    },

    // Получить информацию об определенном контакте
    async getContact(id) {
        return this.sendRequest(`/api/contacts/${id}`, {}, 'get');
    },

    // Получить информацию об определенном контакте
    async updateContact(data = {}) {
        return this.sendRequest('/api/contacts/update', data);
    },

    // Создать контакт
    async createContact(data = {}) {
        return this.sendPostRequest('/api/contacts', data);
    },

    // Удалить контакт
    async deleteContact(id = {}) {
        return this.sendRequest(`/api/contacts/${id}`, {}, 'delete');
    },



    // --- RESERVATIONS ---







    // Общий метод для отправки запросов
    async sendRequest(url = '', data = {}, method = 'post', timeout = 3000) {

        console.log(data);

        let result = false;
        await axios({
                url,
                method,
                params: data,
                timeout,
            })
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

    async sendGetRequest(url = '', data = {}) {
        let result = false;
        await axios
            .get(url, {params: data})
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

    async sendPostRequest(url = '', data = {}) {
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
