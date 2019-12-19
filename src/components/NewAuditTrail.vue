

<template>
  <div class="row" style="margin-top:50px;">
    <div class="col-md-1"></div>
    <div class="col-md-10">
      <h4 style="text-align:center;">Audit-Trail</h4>
      <div style="text-align: right; margin-bottom:10px">
        <q-card style="text-align: center; width:150px;height:25px">
          <downloadexcel
            :data="data"
            :fields="json_fields"
            type="csv"
            :name="getFileName()"
          >Download Excel</downloadexcel>
        </q-card>
      </div>

      <q-table :columns="columns" :data="data" row-key="name"></q-table>
    </div>
    <div class="col-md-1"></div>
  </div>
</template>

<style>
</style>
<script>
import downloadexcel from "vue-json-excel";
import Actv from "../api/activities/index";
export default {
  name: "audit trail",
  components: {
    downloadexcel
  },
  data() {
    return {
      columns: [
        {
          name: "ActivityDateTime",
          align: "center",
          label: "Date",
          field: "ActivityDateTime",
          sortable: true
        },
        {
          name: "ActivityUserLoginId",
          align: "center",
          label: "Userlogin",
          field: "ActivityUserLoginId"
        },
        {
          name: "ActivityTypeCode",
          align: "center",
          label: "Kegiatan",
          field: "ActivityTypeCode"
        },
        { name: "MenuCode", align: "center", label: "Menu", field: "MenuCode" }
      ],
      data: [],
      json_fields: {
        Date: "ActivityDateTime",
        UserLogin: "ActivityUserLoginId",
        Kegiatan: "ActivityTypeCode",
        Menu: "MenuCode"
      }
    };
  },
  methods: {
    getFileName() {
      let date = new Date();
      let month = date.getMonth() + 1 + "";
      if (month.length === 1) month = "0" + month;
      return (
        "Audit Trail " +
        date.getFullYear() +
        "-" +
        month +
        "-" +
        date.getDate() +
        ".csv"
      );
    }
  },

  beforeCreate() {
    const self = this;

    Actv.getActv(window)
      .then(function(result) {
        return result;
      })
      .then(function(datas) {
        console.log("ini datas", datas);
        self.data = datas;
        return datas;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>