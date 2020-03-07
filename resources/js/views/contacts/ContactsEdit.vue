<template>

    <el-container direction="vertical" v-loading="isLoading">

        <h3>Редактирование Контакта "{{ contact.name }}"</h3>

        <el-form ref="form" :model="contact" label-width="240px" label-position="left">

            <el-form-item label="Имя">
                <el-input v-model="contact.name"></el-input>
            </el-form-item>

            <el-form-item label="Фамилия">
                <el-input v-model="contact.surname"></el-input>
            </el-form-item>

            <el-form-item label="Телефон">
                <el-input v-model="contact.phone"></el-input>
            </el-form-item>

            <el-form-item label="Email">
                <el-input v-model="contact.email"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button size="small" type="plain" @click="$router.push({ name: 'contacts-index'} )" title="Отмена">Отмена</el-button>
                <el-button size="small" type="primary" @click="update()" title="Сохранить, но не выходить">Применить</el-button>
                <el-button size="small" type="success" @click="update(true)" title="Сохранить и вернуться к списку контактов">Сохранить</el-button>
            </el-form-item>

        </el-form>

    </el-container>

</template>

<script>

    import Helpers from '../../components/helpers';
    import Controller from '../../components/commonController';

    export default {
        name: "ContactsEdit",
        data() {
            return {
                isLoading: false,
                contact: {},
            }
        },
        methods: {

            // Получение информации о Контакте
            getContact() {

                this.isLoading = true;

                let contactId = this.$route.params.id;

                Controller.getContact(contactId)
                    .then(response => {
                        this.isLoading = false;
                        if (response) {
                            this.contact = response.data;
                        }
                    });

            },

            // Обновление информации о Номере
            update(returnToIndexPage = false) {

                this.isLoading = true;

                Controller.updateContact(this.contact)
                .then(response => {
                    this.isLoading = false;
                    if (response) {
                        Helpers.showSuccessMessage('Информация о контакте успешно обновлена!');
                        if (returnToIndexPage) {
                            this.$router.push({name: 'contacts-index'});
                        }
                    }
                });

            },

        },
        mounted() {
            this.getContact();
        }
    }

</script>

<style scoped>

</style>
