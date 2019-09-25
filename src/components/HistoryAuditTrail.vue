

<template>
  <div class="row" style="margin-top:50px;">
    <div class="col-md-1"> </div>
    <div class="col-md-10">
      <h4 style="text-align:center;">User Logger</h4>
      <q-table :columns="columns" :data="data" row-key="name">
      </q-table>
    </div>
    <div class="col-md-1"> </div>

  </div>
  
</template>

<style>
</style>
<script>

import history  from '../api/audittrail/index';
export default {
  name: "audit trail",
  data () {
    return {
      columns: [
        { name: 'date', align: 'center', label: 'Date', field: 'date', sortable: true },
        { name: 'category', align: 'center', label: 'Category', field: 'category' },
        { name: 'uploader', align: 'center', label: 'User', field: 'uploader' }
       ],
      data: []
    }
  },

  beforeCreate() {
    const self = this;

    history.getAuditTrail(window).then(function (result) {
      return result;
    }).then(function (datas) {
      self.data = datas;
      return datas;
    }).catch(function (err) {
      console.log(err)
    });
  },
}
</script>