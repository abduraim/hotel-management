<template>
    <div>
        <p>Rooms</p>

        <div class="room-item" v-for="room in roomsList" style="border: 1px solid green;">
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
        </div>

    </div>
</template>

<script>
    export default {
        name: "Rooms",
        data() {
            return {
                roomsList: [],      // Список номеров
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

        },
        mounted() {
            this.getRooms();
        }
    }
</script>

<style scoped>

</style>
