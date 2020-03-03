<template>

    <el-container v-loading="isLoading" direction="vertical">

        <h3>Бронирования</h3>

        <div class="controls">
            <el-button size="small" circle icon="el-icon-plus" type="primary" title="Добавить бронирование" @click="$router.push({ name: 'reservations-create' })"></el-button>
        </div>

    </el-container>

</template>

<script>

    import Helpers from '../../components/helpers';

    export default {
        name: "Reservations",
        data() {
            return {
                Helpers,
                isLoading: false,   // Флаг отображения загрузки
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>

</style>
