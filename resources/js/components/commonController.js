// Общий контроллер для работы с API

import Helpers from "./helpers";

export default {

    Helpers,

    // Получить список активных Номеров
    async getActiveRooms() {
        let result = false;
        await axios
            .get('/api/rooms')
            .then(response => {
                result = response;
            })
            .catch(error => {
                Helpers.handleError(error);
                console.log(error);
            });
        return result;
    },

    // Получить список контактов
    async getContactsPaginated(page = 1) {
        let result = false;
        await axios
            .get(`/api/contacts?page=${page}`)
            .then(response => {
                result = response;
            })
            .catch(error => {
                Helpers.handleError(error);
                console.log(error);
            });
        return result;
    },



}
