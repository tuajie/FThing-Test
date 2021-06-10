<template>
  <div class="login">
    <div>
        <v-form  @submit.prevent="submit">
          <v-container>
            <v-row>
              <div>
                <v-text-field
                    label="Email"
                    v-model="form.email" 
                    placeholder="Placeholder"
                    solo
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    v-model="form.password"
                    placeholder="Placeholder"
                    solo
                  ></v-text-field> 
              </div>
              <div>
                <!-- <label for="password">Password:</label>
                <input type="password" name="password" v-model="form.password" /> -->
              </div> 
              <v-btn 
                color="error"
                type="submit"
              >
                Submit
              </v-btn>
            </v-row>
          </v-container>
        </v-form> 
      <p v-if="showError" id="error">Username or Password is incorrect</p>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["LogIn"]), 
    async submit() { 
      // const User = new FormData();
      // User.append("email", this.form.email);
      // User.append("password", this.form.password);
      console.log(this.form)
      try {
          let response = await this.LogIn(this.form);
          let user = response;
          console.log(user, "user info !!")

          // await this.LogIn(this.form);
          // console.log(this.LogIn, "LogIn")
          this.$router.push("/posts");
          this.showError = false
      } catch (error) {
          console.log(error, "error !!")
        this.showError = true
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

input {
  margin: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}
#error {
  color: red;
}
</style>
