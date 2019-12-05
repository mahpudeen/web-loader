<template>
  <div class="q-pa-md" style="width: 100%">

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="searchUser"
        label="Search LDAP"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        class="setengah"
      >
      <template v-slot:append>
          <q-btn flat icon="search" @click="search()" />
        </template>
      </q-input>

      <q-list bordered class="rounded-borders" style="max-width: 100%; margin-bottom:5px;" v-if="hasilSearch">
      <div v-if="typeof(dataUser) === 'undefined'">
        <q-item-label header style="text-align:center">Hasil tidak ditemukan</q-item-label>  
      </div>
      <div v-else>
      <q-item-label header style="text-align:center">Hasil Pencarian</q-item-label>
      <q-item style="border-bottom: 1px solid #d9d9d9">
          <div class="col-3">
            <q-item-section top side>
              <q-item-label lines="1">
                <span class="text-weight-medium text-primary">Kode</span>
              </q-item-label>
            </q-item-section>
          </div>
          <div class="col-4">
            <q-item-section top side>
              <q-item-label lines="1">
                <span class="text-weight-medium text-primary">Nama</span>
              </q-item-label>
            </q-item-section>
          </div>
          <div class="col-4">
            <q-item-section top side>
              <q-item-label lines="1">
                <span class="text-weight-medium text-primary">Email</span>
              </q-item-label>
            </q-item-section>
          </div>
        </q-item>

      <div v-for="item in dataUser" v-bind:key="item">
        <q-item style="border-bottom: 1px solid #d9d9d9">
          <div class="col-3">
            <q-item-section top side>
              <q-item-label lines="1">
                <span class="text-weight-medium">{{item.sAMAccountName}}</span>
              </q-item-label>
            </q-item-section>
          </div>
          <div class="col-4">
            <q-item-section top side>
              <q-item-label lines="1">
                <span class="text-weight-medium">{{item.displayName}}</span>
              </q-item-label>
            </q-item-section>
          </div>
          <div class="col-4">
            <q-item-section top side>
              <q-item-label lines="1">
                <span class="text-weight-medium">{{item.mail}}</span>
              </q-item-label>
            </q-item-section>
          </div>
          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn class="gt-xs" size="12px" flat dense round icon="done"  @click="add(item)"/>
             </div>
          </q-item-section>
        </q-item>

      </div>
      </div>
    </q-list>

      <q-input
        filled
        v-model="username"
        label="User Code"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        disable
        class="setengah"
      />

      <q-input
        filled
        v-model="fullname"
        label="Full Name User"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        disable
        class="setengah"
      />

      <q-input
        filled
        v-model="email"
        label="Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        disable
        class="setengah"
      />

      <!-- <q-input
        filled
        type="password"
        v-model="password"
        label="Password *"
        hint="Password harus terdiri dari minimal 8 digit"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      /> -->

      <!-- <q-select rounded outlined bottom-slots v-model="model" :options="options" label="Role" counter maxlength="12" :dense="dense" :options-dense="denseOpts" style="margin-top: 50px; margin-bottom: 50px">
        <template v-slot:before>
          <q-icon name="people" />
        </template>

        <template v-slot:append>
          <q-icon v-if="model !== ''" name="close" @click.stop="model = ''" class="cursor-pointer" />
          <q-icon name="search" @click.stop />
        </template>

        <template v-slot:hint>
          Pilih salah satu role user
        </template>
      </q-select> -->
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
            class="setengah"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>


      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<style>
.setengah {
    max-width: 50%;
    margin-bottom: -25px;
}
</style>
<script>

import history  from '../api/history/index';
import kuser  from '../api/user/index';
import role  from '../api/roles/index';
import account  from '../api/account/index';
import Actv  from '../api/activities/index';
import user  from '../api/user/index';

const stringOptions = []

export default {
  name: "history",
  data () {
    return {
      hasilSearch: false,
      searchUser: "",
      code: null,
      username: null,
      password: null,
      email: null,
      jabatan: null,
      fullname: null,
      role: null,
      dataUser: [],

      model: null,

      options: stringOptions,

      dense: false,
      denseOpts: false
    }
  },

  methods: {
    search() {
      let self = this
      
      user.findLdapUser(this.searchUser).then(function (result) {
        return result;
      }).then(function (datas) {
        console.log(datas)
        self.dataUser = datas;
        console.log("ini data ", self.dataUser)
      }).catch(function (err) {
        console.log(err)
      });
      this.hasilSearch = true
    },
    add(item) {
      this.username = item.sAMAccountName;
      this.fullname = item.displayName;
      this.email = item.mail;
      this.hasilSearch = false;
    },
    
    filterFn (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.options = stringOptions.filter(v => v.name.toLowerCase().indexOf(needle) > -1)
      })
    },
    onSelectionChanged: function (val) {
      let self = this
      this.role = val.id;
      this.jabatan = val.name;
    },
    onSubmit () {
      let self = this
        console.log(self.username, self.fullname, self.jabatan, self.role, self.email)
      kuser.postUser(self.username, self.email)
      .then(function(result){
        if(!result){
        }
      })
      .catch(function(err) {
          console.log(err);
        });
       account
        .postAccount(self.username, self.fullname, self.jabatan, self.role)
        .then(function(result) {
            if (result) {
                self.$q.notify({
                  color: 'green-4',
                  textColor: 'white',
                  icon: 'cloud_done',
                  message: 'Submitted'
                })
//                Actv.postUserAct(self.username,localStorage.getItem("userNow"),"Create User")
                Actv.postUserAct(self.username,self.$ls.get("username"),"Create User")
                .then(function(result){
                  if(result){
                    self.$router.go("/user-management");
                    self.name = null
                    self.age = null
                    self.accept = false
                  }else{
                    console.log(self.username)
                  }
                 });
                
            } else {
              if (!result) {
                self.$q.notify({
                  color: 'red-5',
                  textColor: 'white',
                  icon: 'warning',
                  message: 'Cannot register a User for while, please try again'
                })
            }
          }

        })
        .catch(function(err) {
          console.log(err);
        });
        
      }
    },

    beforeCreate() {
      const self = this;

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

      // account.getDataAccount(window).then(function (result) {
      //     return result;
      //   }).then(function (datas) {
      //     self.dataUser = datas;
      //     return datas;
      //   }).catch(function (err) {
      //     console.log(err)
      //   });
      },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
</script>