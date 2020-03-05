<template>

    <el-container v-loading="isLoading" direction="vertical">

        <h3>Контакты</h3>

        <div class="controls">

            <el-button
                size="small"
                circle
                icon="el-icon-plus"
                type="primary"
                title="Добавить контакт"
                @click="$router.push({ name: 'contacts-create' })"
            ></el-button>

            <el-input
                placeholder="Имя"
                v-model="needleStr"
                clearable
                @input="findContact"
            ></el-input>

        </div>

        <el-card class="contact-card" v-for="contact in contactsList" :key="contact.id">

            <div class="name-block">
                {{contact.name}} {{contact.surname}}
            </div>

            <div class="actions-block">

                <el-button
                    size="small"
                    circle
                    icon="el-icon-phone"
                    type="success"
                    title="Позвонить"
                    v-if="contact.phone"
                    @click="callContact(contact.phone)"
                ></el-button>

                <el-button
                    size="small"
                    circle
                    icon="el-icon-message"
                    type="primary"
                    title="Написать email"
                    v-if="contact.email"
                    @click="mailContact(contact.email)"
                ></el-button>

                <el-button
                    size="small"
                    circle
                    icon="el-icon-edit"
                    type="warning"
                    title="Редактировать"
                    @click="$router.push({ name: 'contacts-edit', params: {id: contact.id} })"
                ></el-button>

                <el-button
                    size="small"
                    circle
                    icon="el-icon-delete"
                    type="danger"
                    title="Удалить номер"
                    @click="deleteContact(contact)"
                ></el-button>

            </div>

        </el-card>

        <el-pagination
            background
            :pager-count="5"
            :hide-on-single-page="true"
            layout="prev, pager, next"
            :total="paginatorData.total"
            :page-size="paginatorData.perPage"
            :current-page.sync="paginatorData.currentPage"
            @current-change="handleCurrentChange"
        ></el-pagination>

    </el-container>

</template>

<script>

    import Helpers from "../../components/helpers";
    import Controller from '../../components/commonController';

    export default {
        name: "ContactsIndex",
        data() {
            return {
                Helpers,
                isLoading: false,   // Флаг отображения загрузки
                contactsList: [],      // Список контактов

                // Данные пагинатора
                paginatorData: {
                    total: 0,
                    perPage: 10,
                    currentPage: 1,
                },

                needleStr: '',        // Поисковая строка
                findTimer: null,        // Таймер "успокаивающий" посылки запроса

            }
        },
        methods: {

            // Получение всех контактов
            getContacts() {
                this.isLoading = true;

                Controller.getContactsPaginated(this.paginatorData.currentPage)
                    .then(response => {
                        console.log(response)
                        this.contactsList = response.data.data;
                        this.paginatorData.total = response.data.total;
                        this.paginatorData.perPage = response.data.per_page;
                        this.paginatorData.currentPage = response.data.current_page;
                        this.isLoading = false;
                    });

            },

            // Смена страницы в пагинации
            handleCurrentChange(val) {

                this.isLoading = true;

                this.paginatorData.currentPage = val;
                window.scrollTo(0,0);

                if (this.needleStr) {
                    this.findContact();
                } else {
                    this.getContacts();
                }

            },

            // Поиск контакта по имени-фамилии
            findContact() {

                let self = this;

                if (this.findTimer != null) {
                    return false;
                }

                this.findTimer = setTimeout(function () {

                    self.isLoading = true;

                    axios
                        .post(`/api/contacts/find?page=${self.paginatorData.page}&per_page=${self.paginatorData.perPage}`, {needleStr: self.needleStr})
                        .then(response => {

                            console.log(response);
                            self.contactsList = response.data.data;
                            self.paginatorData.total = response.data.total;
                            self.paginatorData.perPage = response.data.per_page;
                            self.paginatorData.currentPage = response.data.current_page;
                            self.isLoading = false;

                            if (self.paginatorData.currentPage > response.data.last_page) {
                                self.paginatorData.currentPage = response.data.last_page;
                            }

                        })
                        .catch(error => {
                            console.log(error);
                        });

                    self.findTimer = null;

                }, 500);

            },

            // Позвонить контакту
            callContact(phone) {
                window.location = `tel:${phone}`;
                // this.$router.push();
            },

            // Написать сообщение контакту
            mailContact(email) {
                window.location = `mailto:${email}`;
            },

            // Удаление контакта
            deleteContact(contact) {

                this.$confirm(`Вы действительно хотите удалить контакт ${contact.name}?`, 'Удаление контакта', {
                    confirmButtonText: 'Да',
                    cancelButtonText: 'Отмена',
                    type: 'warning'
                }).then(() => {

                    this.isLoading = true;

                    axios
                        .delete('api/contacts/' + contact.id)
                        .then(response => {
                            this.isLoading = false;
                            Helpers.showSuccessMessage('Контакт успешно удален!');
                            this.getContacts();
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
            this.getContacts();
        }
    }

</script>

<style lang="scss">

    .contact-card {
        .el-card__body {
            display: flex;
            justify-content: space-between;


            .name-block {
                display: flex;
                align-items: center;
                margin-right: 20px;

                overflow: hidden;
                text-overflow: ellipsis;
            }

            .actions-block {
                display: flex;
                align-items: center;
            }

        }
    }

</style>
