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
           <q-input
            filled
            v-model="password"
            label="Password *"
            hint="Your Password"
            type="password"
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
      username: "",
      password: ""
    };
  },

  methods:{

    onSubmit() {
      let self = this;

      login_api
        .getLogin(window, self.username,self.password)
        .then(function(result) {
          if (!result) {
            Actv.postUserAct("",self.username, "Tried to login")
                .then(function(res){ 
                    self.$q.notify({
                      color: "red-5",
                      textColor: "white",
                      icon: "fas fa-exclamation-triangle",
                      message: "unfortunately failed to login. Check username or password."
                    });
               })
          } else {
            
            if(result.userInfo.position==='gdst'){
            self.$ls.set("userNow", result.userInfo.userLoginId);
            self.$ls.set("username", result.userInfo.fullName);

            Actv.postUserAct("",result.userInfo.userLoginId, "Login Web Loader")
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
            else{
              self.$q.notify({
                color: "red-5",
                textColor: "white",
                icon: "fas fa-exclamation-triangle",
                message: "You don't authorized to access pages."
              });
            }
          }
          return result;
        })
        .catch(function(err) {
           self.$q.notify({
                color: "red-5",
                textColor: "white",
                icon: "fas fa-exclamation-triangle",
                message: "Ouch! Our Function Failed to Fetch Some Data. Poor Me"
              });
        });
    },
    onReset() {
      this.username = null;
      this.password = null;
    }
  }
}
</script>
