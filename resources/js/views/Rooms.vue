<template>
    <div>
        <p>Rooms</p>

<!--        <el-row>-->
<!--            <el-col :xs="24" :sm="12">qwer</el-col>-->
<!--            <el-col :xs="24" :sm="12" class="hidden-xs-only">asdf</el-col>-->
<!--        </el-row>-->


        <div class="controls">
            <el-button size="small" circle icon="el-icon-plus" type="primary" title="Добавить комнату"></el-button>
        </div>

        <el-card v-for="room in roomsList" :key="room.id">

            <div slot="header" class="clearfix">
                <span>{{room.name}}</span>
                <el-button size="small" circle icon="el-icon-edit" type="warning" title="Редактировать" style="float: right;" @click="editRoomDialogVisible = true"></el-button>
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

        <el-dialog
            title="Tips"
            custom-class="modal-form"
            :visible.sync="editRoomDialogVisible">

            <el-form ref="form" :model="form" label-position="top">

                <el-form-item label="Название номера">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="Краткое описание номера">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="Полное описание номера">
                    <el-input v-model="form.name" type="textarea"></el-input>
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

    </div>
</template>

<script>
    export default {
        name: "Rooms",
        data() {
            return {
                roomsList: [],      // Список номеров

                editRoomDialogVisible: false,       // Флаг отображения окна редактирования Номера
                form: {
                    name: '',
                }
            }
        },
        methods: {

            // Получение всех номеров отеля
            getRooms() {
                axios
                .get('/api/rooms')
                    .then(response => {

                        this.roomsList = response.data;

                        console.log(this.roomsList);
                    });
            },

            // Изменение статуса Вкл./Выкл. у номера
            changeRoomStatus(room) {

                console.log(room.status, room.name);

            },


            onSubmit() {
                console.log('submit form');
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
