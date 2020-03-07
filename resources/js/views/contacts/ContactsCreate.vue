<template>

    <el-container direction="vertical" v-loading="isLoading">

        <h3>Создание нового контакта</h3>

        <el-form ref="form" :model="form" label-width="240px" label-position="left">

            <el-form-item label="Имя">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="Фамилия">
                <el-input v-model="form.surname"></el-input>
            </el-form-item>

            <el-form-item label="Телефон">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>

            <el-form-item label="Email">
                <el-input v-model="form.email"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button size="small" type="plain" @click="$router.push({ name: 'contacts-index' })">Отмена</el-button>
                <el-button size="small" type="primary" @click="submitForm">Создать</el-button>
            </el-form-item>

        </el-form>

    </el-container>

</template>

<script>

    import Helpers from '../../components/helpers';
    import Controller from '../../components/commonController';

    export default {
        name: "ContactsCreate",
        data() {
            return {

                isLoading: false,

                form: {
                    name: '',
                    surname: '',
                    phone: '',
                    email: '',
                }

            }
        },
        methods: {

            submitForm() {

                this.isLoading = true;

                Controller.createContact(this.form)
                    .then(response => {
                        this.isLoading = false;
                        if (response) {
                            Helpers.showSuccessMessage('Контакт успешно создан!');
                            this.$router.push({name: 'contacts-index'});
                        }
                    });

            },

        }
    }

</script>

<style scoped>

</style>
