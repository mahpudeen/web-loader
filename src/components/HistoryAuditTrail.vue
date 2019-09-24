

<template>
  <div class="row" style="margin-top:50px;">
    <div class="col-md-1"> </div>
    <div class="col-md-10">
      <h4 style="text-align:center;">History</h4>
      <q-table :columns="columns" :data="data" row-key="name">
      </q-table>
    </div>
    <div class="col-md-1"> </div>

  </div>
  
</template>

<style>
</style>
<script>

import history  from '../api/history/index';
export default {
  name: "history",
  data () {
    return {
      columns: [
        { name: 'date', align: 'center', label: 'Date', field: 'date', sortable: true },
        { name: 'files', align: 'center', label: 'Category', field: 'login' },
        { name: 'category', align: 'center', label: 'Status', field: 'uploader' },
        { name: 'uploader', align: 'center', label: 'User', field: 'uploader' }
       ],
      data: []
    }
  },

  beforeCreate() {
    const self = this;

    history.getHistory(window).then(function (result) {
      return result;
    }).then(function (datas) {
      console.log(datas)
      self.data = datas;
      return datas;
    }).catch(function (err) {
      console.log(err)
    });
  },
}
</script>