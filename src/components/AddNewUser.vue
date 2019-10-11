<template>
  <div class="q-pa-md" style="width: 100%">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Username / email *"
        hint="Username atau email ojk"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="jabatan"
        label="Jabatan *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
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
export default {
  name: "history",
  data () {
    return {
      name: null,
      password: null,
      jabatan: null,
      role: null,

      accept: false,

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
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>