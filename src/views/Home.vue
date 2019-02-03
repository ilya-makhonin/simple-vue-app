<template>
    <div class="home">
        <md-card>
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
                    <br>
                    <md-radio v-model="gender" id="male" md-value="male" class="md-primary">Male</md-radio>
                    <md-radio v-model="gender" id="female" md-value="female" class="md-primary">Female</md-radio>
                </div>
                <md-button type="summit" class="md-raised md-primary" id="send">Send</md-button>
            </form>
        </md-card>
    </div>
</template>


<script>
    import axios from 'axios';
    import MdCard from "../../node_modules/vue-material/src/components/mdCard/mdCard.vue";
    import MdCardActions from "../../node_modules/vue-material/src/components/mdCard/mdCardActions.vue";


    export default {
        components: {
            MdCardActions,
            MdCard},
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
            async sendData() {
                await axios({
                    url: 'http://localhost:3000/api/records',
                    method: 'post',
                    data: {
                        name: this.name,
                        email: this.email,
                        address: this.address,
                        gender: this.gender
                    }
                });

                this.$router.push('thanks');
            }
        }
    }
</script>


<style>
    .form-control:nth-child(4) {
        padding-left: 0;
    }

    .form-control:nth-child(4) > label {
        font-size: 17px;
        color: rgba(0, 0, 0, 0.6);
    }

    #send {
        margin: 5px auto;
    }

    #main-form {
        padding: 5px;
    }

    .home {
        width: 30%;
        min-width: 250px;
        margin: 30px auto;
    }
</style>
