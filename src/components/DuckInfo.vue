<template>
<div id="main">
    <div class="duckTable">
        <b-table caption-top>
        <template #table-caption>This is a table  will contain information on the duck.</template>
        </b-table>
  </div>
</div>
</template>

<script>
export default {
  name: 'DuckInfo',
  data(){
    return {
        feedingTime: '',
        food: '',
        location: '',
        duckQty: '',
        foodAmount: ''
      }
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