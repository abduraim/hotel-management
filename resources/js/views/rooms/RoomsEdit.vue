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

            <el-form-item label="Сортировка">
                <el-input-number size="small" v-model="room.sort" :step="1" :min="0" :max="100"></el-input-number>
            </el-form-item>


            <el-form-item label="Краткое описание номера">
                <el-input v-model="room.lead"></el-input>
            </el-form-item>

            <el-form-item label="Полное описание номера">
                <el-input v-model="room.description" type="textarea" :rows="4"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button size="small" type="plain" @click="$router.push({ name: 'rooms'} )" title="Отмена">Отмена</el-button>
                <el-button size="small" type="primary" @click="update()" title="Сохранить, но не выходить">Применить</el-button>
                <el-button size="small" type="success" @click="update(true)" title="Сохранить и вернуться к списку номеров">Сохранить</el-button>
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
                            this.$router.push('/rooms');
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
