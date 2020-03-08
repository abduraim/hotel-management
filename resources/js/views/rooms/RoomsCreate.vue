<template>

    <el-container direction="vertical" v-loading="isLoading">

        <h3>Создание нового номера</h3>

        <el-form ref="form" :model="form" label-width="240px" label-position="left">

            <el-form-item label="Название номера">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="Статус">
                <el-switch
                    v-model="form.status"
                    active-text="Вкл."
                    inactive-text="Выкл."
                ></el-switch>
            </el-form-item>

<!--            <el-form-item label="Сортировка">-->
<!--                <el-input-number size="small" v-model="form.sort" :step="1" :min="0" :max="100"></el-input-number>-->
<!--            </el-form-item>-->


            <el-form-item label="Краткое описание номера">
                <el-input v-model="form.lead"></el-input>
            </el-form-item>

            <el-form-item label="Полное описание номера">
                <el-input v-model="form.description" type="textarea" :rows="4"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="plain" @click="$router.push({ name: 'rooms-index' })">Отмена</el-button>
                <el-button type="primary" @click="submitForm">Создать</el-button>
            </el-form-item>

        </el-form>

    </el-container>

</template>

<script>

    import Helpers from '../../components/helpers';
    import Controller from '../../components/commonController';

    export default {
        name: "RoomsCreate",
        data() {
            return {
                isLoading: false,

                form: {
                    name: '',
                    lead: '',
                    description: '',
                    status: false,
                    sort: 0,
                }

            }
        },
        methods: {

            submitForm() {
                this.isLoading = true;
                Controller.createRoom(this.form)
                    .then(response => {
                        this.isLoading = false;
                        if (response.status == 201) {
                            Helpers.showSuccessMessage('Номер успешно создан!');
                            this.$router.push({name: 'rooms-index'});
                        }
                    });
            },

        }
    }

</script>

<style scoped>

</style>
