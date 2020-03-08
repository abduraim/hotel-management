<template>

    <el-container direction="vertical" v-loading="isLoading">

        <h3>Редактирование Номера "{{ room.name }}"</h3>

        <el-form ref="form" :model="room" label-width="240px" label-position="left">

            <el-form-item label="Название номера">
                <el-input v-model="room.name"></el-input>
            </el-form-item>

            <el-form-item label="Статус">
                <el-switch
                    v-model="room.status"
                    active-text="Вкл."
                    inactive-text="Выкл."
                ></el-switch>
            </el-form-item>

            <el-form-item label="Краткое описание номера">
                <el-input v-model="room.lead"></el-input>
            </el-form-item>

            <el-form-item label="Полное описание номера">
                <el-input v-model="room.description" type="textarea" :rows="4"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button-group>
                    <el-button type="plain" @click="$router.push({ name: 'rooms-index'} )" title="Отмена" icon="el-icon-arrow-left"></el-button>
                    <el-button type="primary" @click="update()" title="Сохранить, но не выходить" icon="el-icon-check"></el-button>
                    <el-button type="success" @click="update(true)" title="Сохранить и вернуться к списку номеров" icon="el-icon-arrow-right"></el-button>
                </el-button-group>
            </el-form-item>

        </el-form>

    </el-container>

</template>

<script>

    import Helpers from '../../components/helpers';

    export default {
        name: "RoomsEdit",
        data() {
            return {
                Helpers,
                isLoading: false,
                room: {},
            }
        },
        methods: {

            getRoom() {

                this.isLoading = true;

                let roomId = this.$route.params.id;

                axios
                    .get(`/api/rooms/${roomId}`)
                    .then(response => {
                        this.isLoading = false;
                        this.room = response.data;
                    })
                    .catch(error => {
                        this.isLoading = false;
                        Helpers.handleError(error);
                    });

            },

            // Обновление информации о Номере
            update(returnToPage = false) {

                axios
                    .post('/api/rooms/update', this.room)
                    .then(response => {
                        this.isLoading = false;
                        Helpers.showSuccessMessage('Информация о номере успешно обновлена!');
                        if (returnToPage) {
                            this.$router.push({name: 'rooms-index'});
                        }
                    })
                    .catch(error => {
                        this.isLoading = false;
                        Helpers.handleError(error);
                    });

            },

        },
        mounted() {
            this.getRoom();
        }
    }
</script>

<style scoped>

</style>
