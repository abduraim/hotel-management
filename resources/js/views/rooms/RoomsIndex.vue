<template>

    <el-container v-loading="isLoading" direction="vertical">

        <h3>Номера</h3>

        <div class="controls">
            <el-button size="small" circle icon="el-icon-plus" type="primary" title="Добавить номер" @click="$router.push({ name: 'rooms-create' })"></el-button>
        </div>

        <el-card class="room-card" v-for="room in roomsList" :key="room.id">

            <div slot="header" class="clearfix">
                <span class="card-header__room-name">{{room.name}}</span>
                <div class="card-header__controls">
                    <el-button size="small" circle icon="el-icon-edit" type="warning" title="Редактировать" @click="$router.push({ name: 'rooms-edit', params: {id: room.id} })"></el-button>
                    <el-button size="small" circle icon="el-icon-delete" type="danger" title="Удалить номер" @click="deleteRoom(room)"></el-button>
                </div>
            </div>

            <el-switch
                v-model="room.status"
                active-text="Вкл."
                inactive-text="Выкл."
                @change="changeRoomStatus(room)"
            ></el-switch>

<!--            <ul>-->
<!--                <li>Name: {{ room.name }}</li>-->
<!--                <li>Lead: {{ room.lead }}</li>-->
<!--                <li>Desc: {{ room.description }}</li>-->
<!--                <li>Status: {{ room.status }}</li>-->
<!--                <li>Sort: {{ room.sort }}</li>-->
<!--                <li>Create: {{ room.created_at }}</li>-->
<!--                <li>Update: {{ room.updated_at }}</li>-->
<!--                <li>Delete: {{ room.deleted_at }}</li>-->
<!--            </ul>-->

        </el-card>

    </el-container>

</template>

<script>

    import Helpers from '../../components/helpers';

    export default {
        name: "RoomsIndex",
        data() {
            return {
                Helpers,
                isLoading: false,   // Флаг отображения загрузки
                roomsList: [],      // Список номеров
            }
        },
        methods: {

            // Получение всех номеров отеля
            getRooms() {
                this.isLoading = true;
                axios
                    .get('/api/rooms')
                    .then(response => {
                        this.roomsList = response.data;
                        this.isLoading = false;
                    })
                    .catch(error => {
                        Helpers.handleError(error);
                    })
            },

            // Изменение статуса Вкл./Выкл. у номера
            changeRoomStatus(room) {

                this.isLoading = true;

                axios
                    .post('/api/rooms/change-status/', room)
                    .then (response => {
                        this.isLoading = false;
                        Helpers.showSuccessMessage('Статус номера успешно изменен!');
                    })
                    .catch(error => {
                        this.isLoading = false;
                        Helpers.handleError(error);
                    });

            },

            // Удалить номер
            deleteRoom(room) {

                this.$confirm(`Вы действительно хотите удалить номер ${room.name}?`, 'Warning', {
                    confirmButtonText: 'Да',
                    cancelButtonText: 'Отмена',
                    type: 'warning'
                }).then(() => {

                    this.isLoading = true;

                    axios
                        .delete('api/rooms/' + room.id)
                        .then(response => {
                            this.isLoading = false;
                            Helpers.showSuccessMessage('Номер успешно удален!');
                            this.getRooms();
                        })
                        .catch(error => {
                            this.isLoading = false;
                            Helpers.handleError(error);
                        });


                }).catch(() => {
                    // Клик по кнопке Отмена
                });

            },

        },
        mounted() {
            this.getRooms();
        }
    }
</script>

<style lang="scss">

    .controls {
        margin-bottom: 20px;
    }

    .room-card {
        margin-bottom: 20px;

        .card-header__room-name {
            font-size: 20px;
        }

        .card-header__controls {
            float: right;
        }
    }

</style>
