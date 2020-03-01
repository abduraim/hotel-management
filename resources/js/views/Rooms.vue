<template>

    <el-container v-loading="isLoading" direction="vertical">

        <p>Номера</p>

        <!--        <el-row>-->
        <!--            <el-col :xs="24" :sm="12">qwer</el-col>-->
        <!--            <el-col :xs="24" :sm="12" class="hidden-xs-only">asdf</el-col>-->
        <!--        </el-row>-->


        <div class="controls">
            <el-button size="small" circle icon="el-icon-plus" type="primary" title="Добавить номер" @click="$router.push({ name: 'create-room', params: {}})"></el-button>
        </div>

        <el-card v-for="room in roomsList" :key="room.id">

            <div slot="header" class="clearfix">
                <span>{{room.name}}</span>
                <el-button size="small" circle icon="el-icon-edit" type="warning" title="Редактировать" style="float: right;" @click="showRoomForm(room)"></el-button>
                <el-button size="small" circle icon="el-icon-delete" type="danger" title="Удалить номер" @click="deleteRoom(room)"></el-button>
            </div>

            <el-switch
                v-model="room.status"
                active-text="Вкл."
                inactive-text="Выкл."
                @change="changeRoomStatus(room)"
            ></el-switch>

            <ul>
                <li>Name: {{ room.name }}</li>
                <li>Lead: {{ room.lead }}</li>
                <li>Desc: {{ room.description }}</li>
                <li>Status: {{ room.status }}</li>
                <li>Sort: {{ room.sort }}</li>
                <li>Create: {{ room.created_at }}</li>
                <li>Update: {{ room.updated_at }}</li>
                <li>Delete: {{ room.deleted_at }}</li>
            </ul>

        </el-card>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur cum delectus dicta enim iste labore, modi nihil nulla pariatur perferendis placeat quia ratione sed sit, suscipit temporibus voluptates voluptatum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur cum delectus dicta enim iste labore, modi nihil nulla pariatur perferendis placeat quia ratione sed sit, suscipit temporibus voluptates voluptatum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur cum delectus dicta enim iste labore, modi nihil nulla pariatur perferendis placeat quia ratione sed sit, suscipit temporibus voluptates voluptatum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur cum delectus dicta enim iste labore, modi nihil nulla pariatur perferendis placeat quia ratione sed sit, suscipit temporibus voluptates voluptatum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur cum delectus dicta enim iste labore, modi nihil nulla pariatur perferendis placeat quia ratione sed sit, suscipit temporibus voluptates voluptatum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur cum delectus dicta enim iste labore, modi nihil nulla pariatur perferendis placeat quia ratione sed sit, suscipit temporibus voluptates voluptatum.</p>

        <el-dialog
            title="Tips"
            custom-class="modal-form"
            :visible.sync="editRoomDialogVisible">

            <el-form ref="form" :model="form" label-position="top">

                <el-form-item label="Название номера">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-switch
                        v-model="form.status"
                        active-text="Вкл."
                        inactive-text="Выкл."
                    ></el-switch>
                </el-form-item>

                <el-form-item label="Сортировка">
                    <el-input-number v-model="form.sort" :step="1" :min="0" :max="100"></el-input-number>
                </el-form-item>


                <el-form-item label="Краткое описание номера">
                    <el-input v-model="form.lead"></el-input>
                </el-form-item>

                <el-form-item label="Полное описание номера">
                    <el-input v-model="form.description" type="textarea"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                    <el-button>Cancel</el-button>
                </el-form-item>

            </el-form>



            <!--            <span slot="footer" class="dialog-footer">-->
            <!--                <el-button @click="editRoomDialogVisible = false">Cancel</el-button>-->
            <!--                <el-button type="primary" @click="editRoomDialogVisible = false">Confirm</el-button>-->
            <!--            </span>-->

        </el-dialog>

    </el-container>

</template>

<script>
    export default {
        name: "Rooms",
        data() {
            return {

                isLoading: false,   // Флаг отображения загрузки

                roomsList: [],      // Список номеров

                editRoomDialogVisible: false,       // Флаг отображения окна редактирования Номера
                form: {
                    id: null,
                    name: '',
                    lead: '',
                    description: '',
                    status: true,
                    sort: 0,
                }
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

                        console.log(response.data);

                        this.isLoading = false;

                        console.log(this.roomsList);
                    });
            },

            // Изменение статуса Вкл./Выкл. у номера
            changeRoomStatus(room) {

                console.log(room.status, room.name);

            },

            // Удалить номер
            deleteRoom(room) {
                console.log(room);

                axios
                    .delete('api/rooms', {id: room.id})
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });

            },

            // Отобразить форму редактирования/создания номера
            showRoomForm(room = null) {

                if (room) {

                    this.form = room;

                } else {

                }

                this.editRoomDialogVisible = true;

            },


            onSubmit() {
                console.log('submit form');
                console.log(this.form);
            },

        },
        mounted() {
            this.getRooms();

            console.log(window.innerWidth)

        }
    }
</script>

<style lang="scss">

    .controls {
        margin-bottom: 20px;
    }

    .modal-form {

        width: 60%;
        margin-top: 15vh !important;

        @media screen and (max-width: 900px) {
            width: 100%;
            margin-top: 0 !important;
            margin-bottom: 0;
            height: 100%;
            overflow: auto;

        }

    }

</style>
