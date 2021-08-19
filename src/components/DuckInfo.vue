<template>
<div id="main">
    <div class="duckPage">
        <b-table class="duckTable" striped hover bordered :items="ducks" :per-page="perPage" :current-page="currentPage" caption-top>
        <template #table-caption>This is a table  will contain information on the ducks.</template>
        </b-table>
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="duckTable"></b-pagination>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'DuckInfo',
  data(){
    return {
        feedingTime: '',
        food: '',
        location: '',
        duckQty: '',
        foodAmount: '',
        ducks: [],
        currentPage: 1,
        perPage: 10
      }
    },
    async created() {
      //gathers all duck information
      const ducks = await axios.get("http://localhost:5000/all");
      console.log(ducks.data);
      this.ducks = ducks.data;
    },
    computed: {
      rows() {
        return this.ducks.length;
      }
    }
}
</script>

<style scoped>

.duckPage {
    margin: 10px;
    padding: 10px;
    box-shadow: 10px 5px 10px 10px rgba(0, 0, 0, 0.2);

}

</style>