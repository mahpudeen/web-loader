<template>
  <div class="q-pa-md" style="width: 100%">

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="username"
        label="Username*"
        hint="Username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="fullname"
        label="Fullname*"
        hint="Fullname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="jabatan"
        label="Jabatan*"
        hint="Jabatan"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
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
import user  from '../api/user/index';
import role  from '../api/roles/index';
import account  from '../api/account/index';

export default {
  name: "history",
  data () {
    return {
      username: null,
      password: null,
      email: null,
      jabatan: null,
      fullname: null,
      role: null,

      model: null,

      options: [
      ],

      dense: false,
      denseOpts: false
    }
  },

  methods: {
    onSubmit () {
      let self = this

        if (self.model === 'admin') {
          self.role = '1'
        } else if (self.model === 'adk-ojk') {
          self.role = '2'
        } else if (self.model === 'staff-adk-ojk') {
          self.role = '3'
        } else if (self.model === 'Deputi-Komisioner') {
          self.role = '4'
        } else if (self.model === 'Pimpinan-Satker') {
          self.role = '5'
        } else if (self.model === 'GDST') {
          self.role = '6'
        }


        console.log(self.username, self.fullname, self.jabatan, self.role)
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
                self.$router.go("/user-management");
                self.name = null
                self.age = null
                self.accept = false
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
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
</script>