<template>
<div>
    <q-header elevated  class="bg-black">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Web Loader App
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>  
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Sidebar</q-item-label>
        <q-item clickable tag="a" href="/#/berita">
          <q-item-section avatar>
            <q-icon name="cloud_upload" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Berita</q-item-label>
            <q-item-label caption>Upload Berita</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/kssk">
          <q-item-section avatar>
            <q-icon name="cloud_upload" />
          </q-item-section>
          <q-item-section>
            <q-item-label>KSSK</q-item-label>
            <q-item-label caption>Upload Dokumen KSSK</q-item-label>
          </q-item-section>
        </q-item>
         <q-item clickable tag="a" href="/#/rdkb">
          <q-item-section avatar>
            <q-icon name="cloud_upload" />
          </q-item-section>
          <q-item-section>
            <q-item-label>RDKB</q-item-label>
            <q-item-label caption>Upload Data RDKB</q-item-label>
          </q-item-section>
        </q-item>
         <q-item clickable tag="a" href="/#/rdkm">
          <q-item-section avatar>
            <q-icon name="cloud_upload" />
          </q-item-section>
          <q-item-section>
            <q-item-label>RDKM</q-item-label>
            <q-item-label caption>Upload Data RDKM</q-item-label>
          </q-item-section>
        </q-item>
        <!--
        <q-item clickable tag="a" href="/#/data-manual">
          <q-item-section avatar>
            <q-icon name="cloud_upload" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Upload Manual</q-item-label>
            <q-item-label caption>Upload Manual</q-item-label>
          </q-item-section>
        </q-item>
        --> 
        <q-item clickable tag="a" href="/#/history-audit-trail">
          <q-item-section avatar>
            <q-icon name="history" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Audit Trail</q-item-label>
            <q-item-label caption>Audit Trail Event History</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/user-management">
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>
            <q-item-label>User Management</q-item-label>
            <q-item-label caption>User Management</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/ETL-Runner">
          <q-item-section avatar>
            <q-icon name="schedule" />
          </q-item-section>
          <q-item-section>
            <q-item-label>ETL</q-item-label>
            <q-item-label caption>ETL Data Runner</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/dashboard">
          <q-item-section avatar>
            <q-icon name="show_chart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
            <q-item-label caption>ETL Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a"  @click="logout()">
          <q-item-section avatar>
            <q-icon name="exit_to_app" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
            <q-item-label caption>Keluar dari aplikasi</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
</div>
</template>
<script>
import Actv  from '../api/activities/index';
export default {
  data () {
    return {
      leftDrawerOpen: !this.$q.platform.is.desktop
    }
  },

  methods:{
    logout(){
       Actv.postUserAct("Web Loader",this.$ls.get("userNow"), "Logout Web Loader")
      this.$ls.remove("userNow")
      this.$router.push("/")
    }
  }
}
</script>
