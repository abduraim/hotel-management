<template>

    <el-container class="wrapper">

        <el-header class="header">

            <a href="/">
                <img src="hotel.svg" alt="Hotel management" class="logo-main">
                <span>Hotel Management</span>
            </a>

        </el-header>

        <el-container class="main">

            <div>

                <el-menu :router="true" :collapse="isCollapse">

                    <el-menu-item index="reservations" route="/reservations" >
                        <i class="el-icon-date"></i>
                        <span slot="title">Бронирование</span>
                    </el-menu-item>

                    <el-menu-item index="contacts" route="/contacts">
                        <i class="el-icon-user"></i>
                        <span slot="title">Контакты</span>
                    </el-menu-item>

                    <el-menu-item index="rooms" route="/rooms">
                        <i class="el-icon-office-building"></i>
                        <span slot="title">Номера</span>
                    </el-menu-item>

                    <el-menu-item index="settings" route="/settings">
                        <i class="el-icon-setting"></i>
                        <span slot="title">Настройки</span>
                    </el-menu-item>

                </el-menu>

            </div>



            <el-main style="border: 1px solid #eee">

                <router-view></router-view>

            </el-main>

        </el-container>

    </el-container>

</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                isCollapse: false,
            }
        },
        methods: {
            hhh() {
                console.log(this.isCollapse);
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>

    .wrapper {
        min-height: 100vh;
    }

    .header {
        border: 1px solid #eee;
        display: flex;
        align-items: center;

        a {
            .logo-main {
                height: 40px;
                margin-right: 20px;
            }

            color: #000;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 22px;
            font-weight: bold;

        }




    }

    .main {
        flex-grow: 1;
    }

</style>
