<template>
    <div class="user">
        <div>Пользователь {{ $route.params.id }}</div>
        <button @click="getMyParam">Go</button>
    </div>
</template>


<script>
    export default {
        name: 'user',
        data: function () {
            return {
                name: '',
                email: '',
                address: '',
                gender: ''
            };
        },
        methods: {
            getMyParam() {
                console.log(this.$route.params);
            }
        }
    }
</script>


<style>

</style>