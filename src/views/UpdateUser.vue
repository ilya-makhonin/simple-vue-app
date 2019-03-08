<template>
    <div class="update-model-window">
        <div class="model-closing">
            <button class="close-button" @click="closeModelWindow">X</button>
        </div>
        <form @submit.prevent="updateUserById" id="main-form">
            <md-input-container class="form-control">
                <label>Name</label>
                <md-input v-model="newName" id="name" type="text" :value="userData.name" />
            </md-input-container>
            <md-input-container class="form-control">
                <label>Email</label>
                <md-input v-model="newEmail" id="email" type="email" :value="userData.email" />
            </md-input-container>
            <md-input-container class="form-control">
                <label>Address</label>
                <md-input v-model="newAddress" id="address" type="text" :value="userData.address" />
            </md-input-container>
            <div class="send-wrapper">
                <md-button type="summit" class="md-raised md-primary" id="send">Send</md-button>
            </div>
        </form>
    </div>
</template>


<script>
    import axios from 'axios';

    export default {
        name: 'update-user',
        props: ['userData'],
        data: function () {
            return { newName: '', newEmail: '', newAddress: '' };
        },
        methods: {
            closeModelWindow() { this.$emit('newData', !this.userData.modelIsOpen); },
            async updateUserById() {
                await axios({
                    url: `http://localhost:3000/api/records/${this.userData.userId}`,
                    method: 'put',
                    data: {
                        name: this.newName || this.userData.name,
                        email: this.newEmail || this.userData.email,
                        address: this.newAddress || this.userData.address,
                        gender: this.userData.gender
                    }
                });
                this.closeModelWindow();
            }
        }
    }
</script>


<style>
    .update-model-window {
        width: 38%;
        min-width: 300px;
        position: absolute;
        background: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 110;
    }

    .model-closing {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .close-button {
        font-size: 20px;
        background: transparent;
        border: none;
        border-radius: 50%;
        padding: 5px 6px;
    }

    .close-button:hover {
        color: red;
    }
</style>
