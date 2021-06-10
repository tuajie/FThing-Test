<template>
  <div class="login">
    <div>
        <v-form v-model="valid" @submit.prevent="submit">
          <v-container>
            <v-row no-gutters>
              <v-col  cols="12" sm="4" />
              <v-col  cols="12" sm="4">
                <v-card
                  class="pa-2"
                  outlined
                  tile
                >
                <div class="general">
                  <img src="../assets/logo.png" width="100" /> 
                  <p> Please Login with : <br> eve.holt@reqres.in & cityslicka</p>
                  <v-text-field
                      label="Email"
                      v-model="form.email" 
                      placeholder="Email" 
                      :rules="[rules.required, rules.email]"
                      solo
                    ></v-text-field>
                    <v-text-field
                      label="Password"
                      v-model="form.password"
                      type="password"
                      placeholder="Password"
                      :rules="[rules.required, rules.password]"
                      solo
                    ></v-text-field> 
                </div> 
                <v-btn 
                  color="blue"
                  type="submit" 
                  :disabled="!valid"
                  :loading="loading"      
                  @click="loader = 'loading'"
                >
                  Submit
                </v-btn>
                <p class="anu">  Don't Have Already Account? Please <router-link to="/register"> Register </router-link>  </p>
              </v-card>
              </v-col>
               <v-col  cols="12" sm="4" />
            </v-row>
            <p class="error-p" v-if="showError" id="error">Username or Password is incorrect</p>
          </v-container>
        </v-form> 
    </div>
  </div>
</template>

<script> 
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      loader: null,
      loading: false,
      valid: true,
      form: {
        email: "",
        password: "",
      },
      showError: false,
      
      email: '',
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        password: value => value.length >= 5 || 'Password must have 5+ characters', 
      },
    }
  },  

  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l] 
      this.loader = null
    },
  },

  methods: {
    ...mapActions(["LogIn"]), 
    async submit() {  
      console.log(this.form)
      try {
          let response = await this.LogIn(this.form);
          let user = response;
          console.log(user, "user info !!") 
          this.$router.push("/user");
          this.showError = false
      } catch (error) {
          console.log(error, "error !!")
          this.showError = true
          this.loading = false
      } 
    },
  },
}
</script>

<style> 

.login{
  padding-top: 30px;
}
.pa-2{
  padding: 10%;
}
label {
  /* padding: 12px 12px 12px 0; */
  display: inline-block;
}
.general p{ 
    padding-bottom: 30px; 
    padding-top: 10px;
    color:#aaaaaa;
    font-size: 14px;
}

button[type="submit"] {
  background-color: #4caf50 !important;
  color: white !important;
  padding: 12px 20px;
  cursor: pointer; 
  width: 100%;
  height: 45px !important;
}

button[type="submit"]:hover {
  background-color: #45a049;
}
 
.anu{
  font-size: 12px;
  color: #434343;
  padding-top: 20px;
}
.anu a{
  color: #3a3a3a;
  font-weight: bold;
  text-decoration: none;
}
.error-p {
  color: #ff4343;
  font-size: 14px;
  padding-top: 20px;
}
</style>