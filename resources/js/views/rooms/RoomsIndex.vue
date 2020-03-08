<template>

    <el-container v-loading="isLoading" direction="vertical">

        <h3>Номера</h3>

        <div class="controls">
            <el-button circle icon="el-icon-plus" type="primary" title="Добавить номер" @click="$router.push({ name: 'rooms-create' })"></el-button>
        </div>

        <el-card class="room-card" v-for="room in roomsList" :key="room.id">

            <div slot="header" class="room-card__header">
                <span class="card-header__room-name">{{room.name}}</span>
                <div class="card-header__controls">
                    <el-button circle icon="el-icon-edit" type="warning" title="Редактировать" @click="$router.push({ name: 'rooms-edit', params: {id: room.id} })"></el-button>
                    <el-button circle icon="el-icon-delete" type="danger" title="Удалить номер" @click="deleteRoom(room)"></el-button>
                </div>
            </div>

            <el-switch
                v-model="room.status"
                active-text="Вкл."
                inactive-text="Выкл."
                @change="changeRoomStatus(room)"
            ></el-switch>

        </el-card>

        <el-pagination
            class="contact-pagination"
            background
            :pager-count="5"
            :hide-on-single-page="true"
            layout="prev, pager, next"
            :total="paginatorData.total"
            :page-size="paginatorData.perPage"
            :current-page.sync="paginatorData.currentPage"
            @current-change="paginatorPageChange"
        ></el-pagination>

    </el-container>

</template>

<script>

    import Helpers from '../../components/helpers';
    import Controller from '../../components/commonController';

    export default {
        name: "RoomsIndex",
        data() {
            return {
                isLoading: false,   // Флаг отображения загрузки
                roomsList: [],      // Список номеров

                // Данные пагинатора
                paginatorData: {
                    total: 0,
                    perPage: 0,
                    currentPage: 1,
                },
            }
        },
        methods: {

            // Получение всех номеров отеля
            getRooms() {
                this.isLoading = true;
                let requestData = {
                    page: this.paginatorData.currentPage,
                };
                Controller.getRoomList(requestData)
                    .then(response => {
                        this.roomsList = response.data.data;
                        this.paginatorData.total = response.data.meta.total;
                        this.paginatorData.perPage = response.data.meta.per_page;
                        this.paginatorData.currentPage = response.data.meta.current_page;
                        this.isLoading = false;
                    });
            },

            // Изменение статуса Вкл./Выкл. у номера
            changeRoomStatus(room) {
                this.isLoading = true;
                Controller.changeRoomStatus(room)
                    .then(repsonse => {
                        this.isLoading = false;
                        Helpers.showSuccessMessage('Статус номера успешно изменен!');
                    });
            },

            // Удалить номер
            deleteRoom(room) {

                this.$confirm(`Вы действительно хотите удалить номер ${room.name}?`, 'Удаление номера', {
                    confirmButtonText: 'Да',
                    cancelButtonText: 'Отмена',
                    type: 'warning'
                }).then(() => {

                    this.isLoading = true;

                    Controller.deleteRoom(room)
                        .then(response => {
                            this.isLoading = false;
                            Helpers.showSuccessMessage('Номер успешно удален!');
                            this.getRooms();
                        });

                }).catch(() => {
                    // Клик по кнопке Отмена
                });

            },

            // Смена страницы в пагинации
            paginatorPageChange(val) {
                this.paginatorData.currentPage = val;
                window.scrollTo(0,0);
                this.getRooms();
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

        .room-card__header {
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;

            .card-header__room-name {
                display: flex;
                align-items: center;
                font-size: 20px;
                margin-right: 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: clip;
            }

            .card-header__controls {
                flex-shrink: 0;
            }

        }


    }

</style>
