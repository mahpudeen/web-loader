<template>

  <div class="q-pa-md q-gutter-md">
       <h4 style="text-align:center; margin-top: 5%">User Management</h4>

      <q-input
        v-model="search"
        debounce="500"
        filled
        placeholder="Search"
        style="max-width: 30%"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
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
          <div class="text-h7" style="color: green"> Muhamad Rizki </div>
        </q-card-section>

        <q-card-section>
                    <q-list bordered padding>

      <q-separator spaced />
      <q-item-label header>Role Access</q-item-label>

      <q-item tag="label" v-ripple>
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
    

      <q-separator spaced />
      <q-item-label header>Menu Sektor Jasa Keuangan</q-item-label>

      <q-item tag="label" v-ripple>
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

      <q-item tag="label" v-ripple>
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

      <q-item tag="label" v-ripple>
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

      <q-item tag="label" v-ripple>
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

      <q-item tag="label" v-ripple>
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

      <q-item tag="label" v-ripple>
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

      <q-item tag="label" v-ripple>
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

      <q-item tag="label" v-ripple>
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

      <q-item tag="label" v-ripple>
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

      <q-item tag="label" v-ripple>
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


      <q-separator spaced />
      <q-item-label header>Menu Non Sektor Jasa Keuangan</q-item-label>

      <q-item tag="label" v-ripple>
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

      <q-item tag="label" v-ripple>
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

      <q-item tag="label" v-ripple>
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


      <q-item tag="label" v-ripple>
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




      

      <q-separator spaced />
      <q-item-label header>Application Control</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Login Application</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="notif1" val="battery" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Notification</q-item-label>
          <q-item-label caption>Allow notification</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="green" v-model="notif2" val="friend" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Push Notification</q-item-label>
          <q-item-label caption>Allow notification when uploading images</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="red" v-model="notif3" val="picture" />
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item-label header>Other settings</q-item-label>

      <q-item>
        <q-item-section side>
          <q-icon color="teal" name="volume_down" />
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="volume"
            :min="0"
            :max="10"
            label
            color="teal"
          />
        </q-item-section>
        <q-item-section side>
          <q-icon  color="teal" name="volume_up" />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section side>
          <q-icon color="deep-orange" name="brightness_medium" />
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="brightness"
            :min="0"
            :max="10"
            label
            color="deep-orange"
          />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section side>
          <q-icon color="primary" name="mic" />
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="mic"
            :min="0"
            :max="50"
            label
          />
        </q-item-section>
      </q-item>
    </q-list>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="black" v-close-popup @click="closePopUp()"/>
          <q-btn flat label="Apply" color="black" v-close-popup @click="closePopUp()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
      


    <q-list bordered class="rounded-borders" style="max-width: 100%" v-if="isNewUser">
        
      <q-item-label header>Users</q-item-label>

      <q-item>
        <q-item-section avatar top>
          <q-icon name="fab fa-github" color="black" size="34px" />
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Muhamad Rizki</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">Jabatan</span>
            <span class="text-grey-8"> Deputi Komisioner</span>
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <span class="cursor-pointer">All Access</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="person_add" @click="basic = true" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item>
        <q-item-section avatar top>
          <q-icon name="fab fa-github" color="black" size="34px" />
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Marla Laksma Maranti</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">Jabatan</span>
            <span class="text-grey-8"> Admin GDST</span>
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <span class="cursor-pointer">Administrator</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="person_add" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar top>
          <q-icon name="fab fa-github" color="black" size="34px" />
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Muhamad Rizki</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">Jabatan</span>
            <span class="text-grey-8"> Deputi Komisioner</span>
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <span class="cursor-pointer">All Access</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="person_add" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item>
        <q-item-section avatar top>
          <q-icon name="fab fa-github" color="black" size="34px" />
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Muhamad Rizki</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">Jabatan</span>
            <span class="text-grey-8"> Deputi Komisioner</span>
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <span class="cursor-pointer">All Access</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="person_add" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item>
        <q-item-section avatar top>
          <q-icon name="fab fa-github" color="black" size="34px" />
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Muhamad Rizki</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">Jabatan</span>
            <span class="text-grey-8"> Deputi Komisioner</span>
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <span class="cursor-pointer">All Access</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="person_add" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced />
    </q-list>
  </div>
</template>

<style>
</style>
<script>

import history  from '../api/history/index';
import addNewUser from './AddNewUser'
export default {
  name: "history",
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
      }
  },

  beforeCreate() {
    const self = this;

    history.getHistory(window).then(function (result) {
      console.log('ini result', result)
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