

<template>
  <div class="row" style="margin-top:50px;">
    <div class="col-md-1"> </div>
    <div class="col-md-10">
      <h4 style="text-align:center;">Audit-Trail</h4>
      <q-table :columns="columns" :data="data" row-key="name">
      </q-table>
    </div>
    <div class="col-md-1"> </div>

  </div>
  
</template>

<style>
</style>
<script>

import Actv  from '../api/activities/index';
export default {
  name: "audit trail",
  data () {
    return {
      columns: [
        { name: 'ActivityDateTime', align: 'center', label: 'Date', field: 'ActivityDateTime', sortable: true },
        { name: 'ActivityUserLoginId', align: 'center', label: 'Userlogin', field: 'ActivityUserLoginId' },
        { name: 'ActivityTypeCode', align: 'center', label: 'Kegiatan', field: 'ActivityTypeCode' },
        { name: 'MenuCode', align: 'center', label: 'Menu', field: 'MenuCode' }
       ],
      data: []
    }
  },

  beforeCreate() {
    const self = this;

    Actv.getActv(window).then(function (result) {
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