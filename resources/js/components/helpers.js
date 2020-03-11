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

        let type, message;
        switch (error.response.status) {
            case 400:
                type = 'warning';
                message = `${error.response.data.message}`;
                break;
            default:
                type = 'error';
                message = `${error.response.data.message} (код: ${error.response.status})`;
                break;
        }


        Message({
            type,
            message,
            showClose: true,
        });
        console.log(error.response);
    },

}
