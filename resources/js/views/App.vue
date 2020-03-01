<template>

    <el-container>

        <el-header>

            <a href="/">
                <img src="hotel.svg" alt="Hotel management" class="logo-main">
                <span>Hotel Management</span>
            </a>

        </el-header>

        <el-container style="border: 1px solid #eee">

            <el-aside style="border: 1px solid #eee" hidden-xs-only>

                <router-link :to="{ name: 'rooms' }">Rooms</router-link>
                <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>

            </el-aside>

            <el-main style="border: 1px solid #eee">

                <router-view></router-view>

            </el-main>

        </el-container>

    </el-container>

</template>

<script>
    export default {
        name: "App",
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>

    .el-header {
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



</style>
