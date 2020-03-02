import {Message} from 'element-ui';

export default {

    // Показать сообщение об успешном выполнении чего-либо
    showSuccessMessage(text) {
        Message({
            type: 'success',
            message: text
        });
    },

    // Обработка ошибочного ответа
    handleError(error) {
        Message({
            type: 'error',
            message: `Произошла ошибка! (код: ${error.response.status})`
        });
        console.log(error.response);
    },

}
