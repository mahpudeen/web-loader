<template>
  <div class="q-pa-md" style="width: 100%">

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="username"
        label="Search LDAP"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      >
      <template v-slot:append>
          <q-btn flat icon="search" @click="search()" />
        </template>
      </q-input>

      <q-list bordered class="rounded-borders" style="max-width: 100%" v-if="hasilSearch">
        
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
                <span class="text-weight-medium">{{item.code}}</span>
              </q-item-label>
            </q-item-section>
          </div>
          <div class="col-4">
            <q-item-section top side>
              <q-item-label lines="1">
                <span class="text-weight-medium">{{item.name}}</span>
              </q-item-label>
            </q-item-section>
          </div>
          <div class="col-4">
            <q-item-section top side>
              <q-item-label lines="1">
                <span class="text-weight-medium">{{item.email}}</span>
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
    </q-list>

      <q-input
        filled
        v-model="code"
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

      <q-input
        filled
        v-model="email"
        label="Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        disable
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

      <q-select rounded outlined bottom-slots v-model="model" :options="options" label="Role" counter maxlength="12" :dense="dense" :options-dense="denseOpts" style="margin-top: 50px; margin-bottom: 50px">
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
      </q-select>


      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<style>
</style>
<script>

import history  from '../api/history/index';
import kuser  from '../api/user/index';
import role  from '../api/roles/index';
import account  from '../api/account/index';
import Actv  from '../api/activities/index';

export default {
  name: "history",
  data () {
    return {
      hasilSearch: false,
      code: null,
      username: null,
      password: null,
      email: null,
      jabatan: null,
      fullname: null,
      role: null,
      dataUser: [
        {
          code:"testasdasdasdadas",
          name:"Dindin",
          email:"mahpudeen@gmail.com"
        },
        {
          code:"testas",
          name:"oasdkas",
          email:"mahpasdasdudeen@gmail.com"
        }
      ],

      model: null,

      options: [
      ],

      dense: false,
      denseOpts: false
    }
  },

  methods: {
    search() {
      this.hasilSearch = true
    },
    add(item) {
      this.code = item.code;
      this.fullname = item.name;
      this.email = item.email;
      this.hasilSearch = false;
    },
    onSubmit () {
      let self = this

        if (self.model === 'admin') {
          self.role = '1'
        } else if (self.model === 'adk-ojk') {
          self.role = '2'
        } else if (self.model === 'staff-adk-ojk') {
          self.role = '3'
        } else if (self.model === 'Deputi-Komisioner') {
          self.role = '7'
        } else if (self.model === 'Pimpinan-Satker') {
          self.role = '5'
        } else if (self.model === 'admin-perbankan') {
          self.role = '6'
        } else if (self.model === 'admin-pasar-modal') {
          self.role = '4'
        } else if (self.model === 'admin-iknb') {
          self.role = '4'
        }
        console.log(self.username, self.fullname, self.jabatan, self.role)
        let email = self.username+'@ojk.go.id';
      kuser.postUser(self.username,email)
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
          self.options.push(datas[i].name);
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