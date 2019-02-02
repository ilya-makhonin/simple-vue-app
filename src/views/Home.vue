<template>
    <div class="home">
        <form @submit.prevent="sendData" id="main-form">

            <md-input-container class="form-control">
                <label>Name</label>
                <md-input v-model="name" id="name" type="text" />
            </md-input-container>

            <md-input-container class="form-control">
                <label>Email</label>
                <md-input v-model="email" id="email" type="email" />
            </md-input-container>

            <md-input-container class="form-control">
                <label>Address</label>
                <md-input v-model="address" id="address" type="text" />
            </md-input-container>

            <div class="form-control">
                <label>Gender</label>
                <md-radio v-model="gender" id="male" md-value="male" class="md-primary">Male</md-radio>
                <md-radio v-model="gender" id="female" md-value="female" class="md-primary">Female</md-radio>
            </div>
            <md-button type="summit" class="md-raised md-primary" id="send">Send</md-button>

        </form>
    </div>
</template>


<script>
    export default {
        name: 'home',
        data: function () {
            return {
                name: '',
                email: '',
                address: '',
                gender: ''
            };
            },
        methods: {
            sendData() {
                console.log(this.name, this.email, this.address, this.gender);
            }
        }
    }
</script>


<style>
    .form-control {
        padding: 5px;
    }

    .form-control label {
        display: block;
    }

    .form-control:nth-child(4) {
        padding-left: 0;
    }

    .form-control:nth-child(4) > label {
        font-size: 17px;
        color: rgba(0, 0, 0, 0.6);
    }

    #send {
        margin: 5px;
    }

    #main-form {
        width: 30%;
        min-width: 250px;
        border: 1px solid lightgray;
        border-radius: 8px;
        padding: 5px;
        margin: 10px auto;
    }
</style>
