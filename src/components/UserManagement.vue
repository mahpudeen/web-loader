<template>

  <div class="q-pa-md q-gutter-md">
       <h4 style="text-align:center; margin-top: 5%">User Management</h4>
      <q-btn color="black" icon="add" label="New User" @click="openNewUser()"/>
      <q-btn color="black" icon="people" label="List Roles" @click="openListUser()"/>
      <q-btn color="black" icon="refresh" label="Refresh" />

        <q-list bordered class="rounded-borders" v-if="!isNewUser">
            <q-item-label header>Please fill the information</q-item-label>
            <q-item style="max-width: 50%">
                <add-new-user ></add-new-user>
            </q-item>
            
        </q-list>


     <q-dialog v-model="basic" transition-show="fade" transition-hide="fade">
      <q-card>
        <q-card-section>
          <div class="text-h6"> Role Management</div>
        </q-card-section>

        <q-card-section>
                    <q-list bordered padding>

      <q-item-label header>Role Access</q-item-label>

      <q-item tag="label" >
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>All Access</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict the menus or sub menus
          </q-item-label>
        </q-item-section>
      </q-item>
    

      <q-item-label header>Menu Sektor Jasa Keuangan</q-item-label>

      <q-item tag="label" >
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>All Menu</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict the menus or sub menus
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" >
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Overview</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict the menus or sub menus
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" >
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Protokol Manajemen Krisis</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict the menus or sub menus
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" >
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Kondisi Makro dan Potensi SJK Daerah</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict the menus or sub menus
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" >
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Kondisi Sektor Jasa Keuangan</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict the menus or sub menus
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" >
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Market</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict the menus or sub menus
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" >
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Bank Wakaf Mikro</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict the menus or sub menus
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" >
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Daily News</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict the menus or sub menus
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" >
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Hot Issue</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict the menus or sub menus
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" >
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Asesmen</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict the menus or sub menus
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item-label header>Menu Non Sektor Jasa Keuangan</q-item-label>

      <q-item tag="label" >
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>All Menu</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict the menus or sub menus
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" >
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Kegiatan ADK</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict the menus or sub menus
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item tag="label" >
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Disposisi</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict the menus or sub menus
          </q-item-label>
        </q-item-section>
      </q-item>


      <q-item tag="label" >
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Smart HR</q-item-label>
          <q-item-label caption>
            Set the content filtering level to restrict the menus or sub menus
          </q-item-label>
        </q-item-section>
      </q-item>


      <q-item-label header>Application Control</q-item-label>

      <q-item tag="label" >
        <q-item-section>
          <q-item-label>Login Application</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="notif1" val="battery" />
        </q-item-section>
      </q-item>

      <q-item tag="label">
        <q-item-section>
          <q-item-label>Notification</q-item-label>
          <q-item-label caption>Allow notification</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="green" v-model="notif2" val="friend" />
        </q-item-section>
      </q-item>

      <q-item tag="label">
        <q-item-section>
          <q-item-label>Push Notification</q-item-label>
          <q-item-label caption>Allow notification when uploading images</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="red" v-model="notif3" val="picture" />
        </q-item-section>
      </q-item>

      <q-item-label header>Other settings</q-item-label>

    </q-list>
    
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="black"  @click="closePopUp()"/>
          <q-btn flat label="Apply" color="black"  @click="closePopUp()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
      


    <q-list bordered class="rounded-borders" style="max-width: 100%" v-if="isNewUser">
        
      <q-item-label header>Users</q-item-label>

      <div v-for="item in dataUser" v-bind:key="item">
        <q-item style="border-bottom: 1px solid #d9d9d9">

          <q-item-section top side>
            <div>
              <q-btn class="gt-xs" size="12px" flat dense round icon="people" />
            </div>
          </q-item-section>
    
          <q-item-section top class="col-2 gt-sm">
            <q-item-label class="q-mt-sm">{{item.fullname}}</q-item-label>
          </q-item-section>

          <q-item-section top class="col-2 gt-sm">
            <q-item-label class="q-mt-sm">{{item.userLoginId}}</q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium">Jabatan</span>
            </q-item-label>
            <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary">
              <span class="cursor-pointer">{{item.position}}</span>
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete"  @click="deleteUser(item.userLoginId)"/>
              <q-btn class="gt-xs" size="12px" flat dense round icon="person_add" @click="basic = true" />
              <q-btn size="12px" flat dense round icon="more_vert" />
            </div>
          </q-item-section>
        </q-item>

      </div>
    </q-list>
  </div>
</template>

<style>
</style>
<script>

import history  from '../api/history/index';
import user  from '../api/user/index';
import account  from '../api/account/index';
import addNewUser from './AddNewUser';
import Actv  from '../api/activities/index';

export default {
  data () {
    return {
        isNewUser: true,
      columns: [
        { name: 'date', align: 'center', label: 'Date', field: 'date', sortable: true },
        { name: 'files', align: 'center', label: 'Files', field: 'files' },
        { name: 'category', align: 'center', label: 'Category', field: 'category' },
        { name: 'uploader', align: 'center', label: 'Uploader', field: 'uploader' }
       ],
      data: [],
      dataUser: [],
      basic: false,
      check1: true,
      check2: false,
      check3: false,

      notif1: true,
      notif2: true,
      notif3: false,

      volume: 6,
      brightness: 3,
      mic: 8
    }
  },

  components: {
      addNewUser
  },

  methods : {

      openNewUser() {
          this.isNewUser = false
      },

      openListUser() {
          this.isNewUser = true
      },

      closePopUp() {
          this.basic = false
      },

      deleteUser(userLoginId) {
        let self = this
        account.deleteAccount(userLoginId).then(function (result) {
          if (result) {
          Actv.postUserAct(userLoginId,localStorage.getItem("username"),"Delete User")
                .then(function(result){
                 });
            self.$router.go("/user-management");
          } else {
          Actv.postUserAct(userLoginId,localStorage.getItem("username"),"Failed Delete User")
                .then(function(result){
                 });
          }
          return result;
        }).catch(function (err) {
          console.log(err)
        });
      }
  },

  beforeCreate() {
    const self = this;

    history.getHistory(window).then(function (result) {
      return result;
    }).then(function (datas) {
      self.data = datas;
      return datas;
    }).catch(function (err) {
      console.log(err)
    });

    account.getDataAccount(window).then(function (result) {
      return result;
    }).then(function (datas) {
      self.dataUser = datas;
      return datas;
    }).catch(function (err) {
      console.log(err)
    });


  },
}
</script>