<template>
<div id="main">
    <div class="duckTable">
        <b-table :items="ducks" caption-top>
        <template #table-caption>This is a table  will contain information on the duck.</template>
        </b-table>
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
        ducks: []
      }
    },
    async created() {
      const ducks = await axios.get("http://localhost:5000/all");
      console.log(ducks.data);
      this.ducks = ducks.data;
    }
}
</script>

<style scoped>
#main {
}
.duckTable {
    margin: 10px;
    padding: 10px;
    box-shadow: 10px 5px 10px 10px rgba(0, 0, 0, 0.2);

}

</style>