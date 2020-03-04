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

    export default {
        name: "ContactsEdit",
        data() {
            return {
                Helpers,
                isLoading: false,
                contact: {},
            }
        },
        methods: {

            getContact() {

                this.isLoading = true;

                let contactId = this.$route.params.id;

                axios
                    .get(`/api/contacts/${contactId}`)
                    .then(response => {
                        this.isLoading = false;
                        this.contact = response.data;
                    })
                    .catch(error => {
                        this.isLoading = false;
                        Helpers.handleError(error);
                    });

            },

            // Обновление информации о Номере
            update(returnToPage = false) {

                axios
                    .post('/api/contacts/update', this.contact)
                    .then(response => {
                        this.isLoading = false;
                        Helpers.showSuccessMessage('Информация о контакте успешно обновлена!');
                        if (returnToPage) {
                            this.$router.push({name: 'contacts-index'});
                        }
                    })
                    .catch(error => {
                        this.isLoading = false;
                        Helpers.handleError(error);
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
