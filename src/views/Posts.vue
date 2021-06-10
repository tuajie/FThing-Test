<template>
  <div class="container">  
      <v-container>
        <h4 class="h4-class"> Hello, now you can see list of users </h4>
        <v-row no-gutters> 
          <v-col cols="12" sm="2" v-for="orang in Posts" :key="orang.id">  
            <v-card
                class="pa-2"
                outlined
                tile
              >
              <div class="div-img">
                  <img :src="orang.avatar" width="100%"/>
              </div>
              <p class="p-class">{{ orang.first_name }} {{ orang.last_name }}</p> 
              <p class="p-class-email">{{ orang.email }}</p> 
            </v-card>   
        </v-col>
      </v-row> 
    </v-container> 
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Posts",
  components: {},
  data() {
    return {
      form: {
        title: "",
        write_up: "",
      },
    };
  },
  created: function() { 
    this.GetPosts() 
  },
  computed: {
    ...mapGetters({ Posts: "StatePosts", User: "StateUser" }),
  },
  methods: {
    ...mapActions(["GetPosts"]), 
  },
};
</script>
<style scoped>
.v-sheet.v-card{
  margin: 5px;
  padding: 10px;
}
.h4-class{
  font-size: 32px;
  font-weight: bold;
  padding: 40px 0 20px;
}
.p-class{
  font-size: 14px;
}
.p-class-email{
  font-size: 12px;
  color: #a5a5a5;
}
.div-img{
  display: flex;
  flex-wrap: wrap;
  height: 24vh;
  padding-bottom: 20px;
}
.div-img img{
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
}
</style>
