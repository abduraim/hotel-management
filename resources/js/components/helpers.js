import {Message} from 'element-ui';

export default {

    // Показать сообщение об успешном выполнении чего-либо
    showSuccessMessage(text) {
        Message({
            type: 'success',
            message: text,
            showClose: true,
        });
    },

    // Обработка ошибочного ответа
    handleError(error) {
        Message({
            type: 'error',
            message: `Произошла ошибка! (код: ${error.response.status})`,
            showClose: true,
        });
        console.log(error.response);
    },

}
