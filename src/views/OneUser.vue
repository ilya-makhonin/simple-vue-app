<template>
    <div class="user">
        <router-link to="/">
            <md-button class="md-raised md-primary">Home</md-button>
        </router-link>
        <div class="user-info">
            <md-card md-with-hover>
                <md-card-header>
                    <md-avatar>
                        <img :src="getAvatarLink" alt="People">
                    </md-avatar>
                    <div class="md-title">User: {{ name }}</div>
                    <div class="md-subhead">User's email: {{ email }}</div>
                </md-card-header>
                <md-card-content>
                    <md-list class="md-double-line">
                        <md-list-item>
                            <div class="md-list-text-container">
                                <span>{{ address }}</span>
                                <span>Work address</span>
                            </div>
                            <div class="md-list-text-container">
                                <span>{{ gender }}</span>
                                <span>Gender</span>
                            </div>
                        </md-list-item>
                    </md-list>
                </md-card-content>
                <md-card-actions>
                    <md-button class="md-raised md-primary" @click="isOpenUpdates">Update profile</md-button>
                    <md-button class="md-raised md-primary" @click="deleteUserById">Delete account</md-button>
                </md-card-actions>
            </md-card>
        </div>
        <div class="model-down-layout" v-show="modelIsOpen" @click.self="isOpenUpdates">
            <update-user
                    :userData="getFullParams"
                    @newData="isOpenUpdates"
            />
        </div>
    </div>
</template>


<script>
    import axios from 'axios';
    import avatar from '../avatar_random';
    import UpdateUser from './UpdateUser.vue';

    export default {
        name: 'user',
        components: { UpdateUser },
        data: function () {
            this.getUserId();
            return {
                name: 'Loading...', email: 'Loading...',
                address: 'Loading...', gender: 'Loading...',
                modelIsOpen: false
            };
        },

        computed: {
            getAvatarLink() { return `https://api.adorable.io/avatars/100/${avatar()}@adorable.io.png`; },
            getFullParams() {
                return {
                    name: this.name, email: this.email,
                    address: this.address, gender: this.gender,
                    modelIsOpen: this.modelIsOpen, userId: this.$route.params.id
                }
            }
        },

        methods: {
            async getUserId() {
                try {
                    let response = await axios.get(`http://localhost:3000/api/records/${this.$route.params.id}`);
                    this.name = response.data.name;
                    this.email = response.data.email;
                    this.address = response.data.address;
                    this.gender = response.data.gender;
                } catch (error) {
                    throw new Error(error);
                }
            },
            async deleteUserById() {
                await axios({
                    url: `http://localhost:3000/api/records/${this.$route.params.id}`,
                    method: 'delete'
                });
                this.$router.go(-1);
            },
            isOpenUpdates() { this.modelIsOpen = !this.modelIsOpen; }
        }
    }
</script>


<style>
    .user {
        width: 100vw;
        height: 100vh;
    }

    .user-info {
        width: 40%;
        min-width: 300px;
        margin: 20px auto;
    }

    .model-down-layout {
        width: inherit;
        height: inherit;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        top: 0;
        left: 0;
        z-index: 100;
    }
</style>
