<template>
    <div class="data-list">
        <button @click="getDataList">Get Data</button>
        <div class="list-wrapper">
            <div v-for="dataUser in dataList">
                <p>{{ dataUser }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
      name: 'data',
      data: function () {
        return {
          dataList: []
        };
      },
      methods: {
         async getDataList() {
          try {
            let response = await axios.get('http://localhost:3000/api/records');
            console.log(response);
            this.dataList = response.data;
          } catch (error) {
            console.error(error);
          }
        }
      }
    }
</script>

<style>

</style>