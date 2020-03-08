<template>

    <el-container v-loading="isLoading" direction="vertical">

        <h3>Контакты</h3>

        <div class="controls">

            <el-button
                circle
                icon="el-icon-plus"
                type="primary"
                title="Добавить контакт"
                @click="$router.push({ name: 'contacts-create' })"
            ></el-button>

        </div>

        <el-input
            class="search-input"
            prefix-icon="el-icon-search"
            placeholder="Введите имя, либо фамилию для поиска"
            v-model="needleStr"
            clearable
            @input="searchContact"
        ></el-input>

        <div class="card-list">
            <el-card
                class="contact-card"
                v-for="contact in contactsList"
                :key="contact.id"
            >

                <div class="name-block">
                    {{contact.name}} {{contact.surname}}
                </div>

                <div class="actions-block">

                    <div class="hidden-xs-only">

                        <el-button
                            circle
                            icon="el-icon-phone"
                            type="success"
                            title="Позвонить"
                            v-if="contact.phone"
                            @click="callContact(contact.phone)"
                        ></el-button>

                        <el-button
                            circle
                            icon="el-icon-message"
                            type="primary"
                            title="Написать email"
                            v-if="contact.email"
                            @click="mailContact(contact.email)"
                        ></el-button>

                        <el-button
                            circle
                            icon="el-icon-edit"
                            type="warning"
                            title="Редактировать"
                            @click="$router.push({ name: 'contacts-edit', params: {id: contact.id} })"
                        ></el-button>

                        <el-button
                            circle
                            icon="el-icon-delete"
                            type="danger"
                            title="Удалить контакт"
                            @click="deleteContact(contact)"
                        ></el-button>

                    </div>

                    <el-dropdown type="primary" @command="mobileContactActionClick" trigger="click" class="hidden-sm-and-up">
                        <el-button icon="el-icon-more" type="primary"></el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-phone" :command="{action: 'call', contact: contact}" v-if="contact.phone">Позвонить</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-message" :command="{action: 'email', contact: contact}" v-if="contact.email">Написать email</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-edit" :command="{action: 'edit', contact: contact}">Редактировать</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-delete" :command="{action: 'delete', contact: contact}">Удалить контакт</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                </div>

            </el-card>
        </div>

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

    import Helpers from "../../components/helpers";
    import Controller from '../../components/commonController';

    export default {
        name: "ContactsIndex",
        data() {
            return {

                isLoading: false,       // Флаг отображения загрузки
                contactsList: [],       // Список контактов

                needleStr: '',          // Поисковая строка
                findTimer: null,        // Таймер "успокаивающий" посылки запроса

                // Данные пагинатора
                paginatorData: {
                    total: 0,
                    perPage: 0,
                    currentPage: 1,
                },

            }
        },
        methods: {

            // Получение всех контактов
            getContacts() {

                this.isLoading = true;

                let requestData = {
                    page: this.paginatorData.currentPage,
                };

                if (this.needleStr != '') {
                    requestData.needleStr = this.needleStr;
                }

                Controller.getContactsPaginated(requestData)
                    .then(response => {
                        this.contactsList = response.data.data;
                        this.paginatorData.total = response.data.meta.total;
                        this.paginatorData.perPage = response.data.meta.per_page;
                        this.paginatorData.currentPage = response.data.meta.current_page;
                        this.isLoading = false;
                    });

            },

            // Поиск контакта по имени-фамилии
            searchContact() {

                // Создаем искусственный ограничитель запросов таймером
                if (this.findTimer != null) {
                    return false;
                }

                let self = this;

                this.findTimer = setTimeout(function () {
                    self.getContacts();
                    self.findTimer = null;
                }, 500);

            },

            // Клик по выпадающим действиям с контактов в мобильной версии
            mobileContactActionClick(command) {

                console.log(command);

                switch (command.action) {
                    case 'call':
                        this.callContact(command.contact.phone);
                        break;
                    case 'email':
                        this.mailContact(command.contact.email);
                        break;
                    case 'edit':
                        this.$router.push({ name: 'contacts-edit', params: {id: command.contact.id} });
                        break;
                    case 'delete':
                        this.deleteContact(command.contact);
                        break;
                    default:
                        break;
                }
            },

            // Смена страницы в пагинации
            paginatorPageChange(val) {
                this.paginatorData.currentPage = val;
                window.scrollTo(0,0);
                this.getContacts();
            },

            // Удаление контакта
            deleteContact(contact) {

                this.$confirm(`Вы действительно хотите удалить контакт ${contact.name}?`, 'Удаление контакта', {
                    confirmButtonText: 'Да',
                    cancelButtonText: 'Отмена',
                    type: 'warning'
                }).then(() => {

                    this.isLoading = true;

                    Controller.deleteContact(contact.id)
                        .then(response => {
                            this.isLoading = false;
                            if (response) {
                                Helpers.showSuccessMessage('Контакт успешно удален!');
                                this.getContacts();
                            }
                        });

                }).catch(() => {
                    // Клик по кнопке Отмена
                });

            },

            // Позвонить контакту
            callContact(phone) {
                window.location = `tel:${phone}`;
            },

            // Написать сообщение контакту
            mailContact(email) {
                window.location = `mailto:${email}`;
            },

        },
        mounted() {
            this.getContacts();
        }
    }

</script>

<style lang="scss">

    .search-input {
        margin-bottom: 20px;
    }

    .card-list {
        margin-bottom: 20px;
    }

    .contact-card {
        .el-card__body {
            display: flex;
            justify-content: space-between;

            .name-block {
                display: flex;
                align-items: center;
                margin-right: 20px;

                white-space: nowrap;
                overflow: hidden;
                text-overflow: clip;
            }

            .actions-block {
                display: flex;
                align-items: center;
            }

        }
    }

    .contact-pagination {
        text-align: center;
    }

</style>
