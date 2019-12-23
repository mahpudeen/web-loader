<template>

    <div class="flex flex-center" style="padding-top: 80px">
      <div class="q-pa-md" style="max-width: 350px; width:100%;text-align:center;">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          
            <img src="../assets/ojk.png" alt="Logo Tekno" height="120" width="300" margin="20px" />
          
          <q-input
            filled
            v-model="username"
            label="Username *"
            hint="Your Username"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <div>
            <q-btn label="Login" type="submit" color="black" />
            <q-btn label="Reset" type="reset" color="black" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
    </div>
</template>

<style>
  .q-field__control{
    color: black !important;
  }
</style>

<script>
import Actv  from '../api/activities/index';
import login_api from '../api/login/index';

export default {
  name: 'Login',

  data() {
    return {
      username: ""
    };
  },

  methods:{

    onSubmit() {
      let self = this;

      login_api
        .getLogin(window, self.username)
        .then(function(result) {
          if (!result) {
            self.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "fas fa-exclamation-triangle",
              message: "Failed to login. Please try again."
            });
          } else {
            self.$ls.set("userNow", result.userLoginId);
            self.$ls.set("username", result.fullName);

            Actv.postUserAct(result.userLoginId, result.fullName, "Login Web Loader")
                .then(function(res){ 
                  self.$q.notify({
                    color: "green-4",
                    textColor: "white",
                    icon: "fas fa-check-circle",
                    message: "You're Logged In"
                  });
    
                  self.$router.push("berita");
                })
          }
          return result;
        })
        .catch(function(err) {
          console.log(err);
        });
    },

    onReset() {
      this.username = null;
    }
  }
}
</script>
