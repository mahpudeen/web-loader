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
        v-model="email"
        label="Email *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your email'
        ]"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Password *"
        hint="Password harus terdiri dari minimal 8 digit"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

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
export default {
  name: "history",
  data () {
    return {
      username: null,
      password: null,
      email: null,
      role: null,

      model: null,

      options: [
        'Admin Satker', 'ADK', 'Staff ADK', 'Deputi Komisioner', 'Deputi Direktur', 'Pimpinan Satker', 'GDST'
      ],

      dense: false,
      denseOpts: false
    }
  },

  methods: {
    onSubmit () {
      let self = this
       user
        .postUser(self.username, self.email, self.password)
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

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
</script>