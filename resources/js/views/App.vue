<template>
    <div>
        <h1>Vue Router Demo App</h1>

        <p>
            <router-link :to="{ name: 'rooms' }">Rooms</router-link> |
            <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </p>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App",
        mounted() {

        }
    }
</script>

<style scoped>

</style>
