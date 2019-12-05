<template>

  <div class="q-pa-md q-gutter-md">
       <h4 style="text-align:center; margin-top: 5%">User Management</h4>
      <q-btn color="black" icon="add" label="New User" @click="openNewUser()"/>
      <q-btn color="black" icon="people" label="List Roles" @click="openListUser()"/>
      <q-btn color="black" icon="refresh" label="Refresh" />

        <q-list bordered class="rounded-borders" v-if="!isNewUser">
            <q-item-label header>Please fill the information</q-item-label>
            <q-item style="max-width: 100%">
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
              <span class="text-weight-medium">Roles</span>
            </q-item-label>
            <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary">
              <span class="cursor-pointer">{{item.position}}</span>
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete"  @click="deleteUser(item.userLoginId)"/>
              <!-- <q-btn class="gt-xs" size="12px" flat dense round icon="person_add" @click="basic = true" /> -->
              <q-btn class="gt-xs" size="12px" flat dense round icon="create" @click="updateUser(item)" />
              <q-btn size="12px" flat dense round icon="more_vert" />
            </div>
          </q-item-section>
        </q-item>

      </div>
    </q-list>
    <q-dialog v-model="update">
      <q-card>
        <q-card-section>
          <div class="text-h6">Update Role</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 60vh; width:500px" class="scroll">
          <q-input
            filled
            v-model="userLoginId"
            label="User Code"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
            disable
          />

          <q-input
            filled
            v-model="fullname"
            label="Full Name User"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
            disable
          />

          <q-select
            filled
            v-model="model"
            use-input
            hide-selected
            fill-input
            input-debounce="0"
            :options="options"
            :option-label="opt=>opt.name"
            :option-value="opt=>opt"
            @filter="filterFn"
            label="Role"
            hint="Pilih salah satu role user"
            style="margin-bottom: 30px"
            @input="onSelectionChanged"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>
          
        </q-card-section>

        <q-separator />

        <q-card-actions align="center">
          <q-btn flat label="Update" color="primary" @click="updateDataUser()" />
          <q-btn flat label="Cancel" color="grey" @click="close()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>

import history  from '../api/history/index';
import user  from '../api/user/index';
import account  from '../api/account/index';
import addNewUser from './AddNewUser';
import Actv  from '../api/activities/index';
import role  from '../api/roles/index';
const stringOptions = []

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
      update: false,
      userLoginId: null,
      username: null,
      password: null,
      email: null,
      model: null,
      jabatan: null,
      fullname: null,
      role: null,
      basic: false,
      check1: true,
      check2: false,
      check3: false,
      options: stringOptions,
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
      onSelectionChanged: function (val) {
        let self = this
        this.role = val.id;
        this.position = val.name;
      },
      close() {
        this.update = false;
      },
      updateUser(item) {
        this.userLoginId = item.userLoginId;
        this.fullname = item.fullname;
        this.update = true;
      },
      filterFn (val, update, abort) {
        update(() => {
          const needle = val.toLowerCase()
          this.options = stringOptions.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
        })
      },
      updateDataUser() {
        let self = this
        console.log(this.role, this.position, this.userLoginId)
        account.updateRole(this.role, this.position, this.userLoginId)
        .then(function(result){
          console.log(result)
          self.$router.go('/user-management')
        }).catch(function (err) {
          console.log(err)
        });
        this.update = false;
        // this.$router.go('/user-management')
      },

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

    role.getDataRoles(window).then(function (result) {
      return result;
    }).then(function (datas) {
      console.log(datas)
      for (let i=0; i < datas.length; i++) {
        self.options.push(datas[i]);
      }
      return datas;
    }).catch(function (err) {
      console.log(err)
    });


  },
}
</script>