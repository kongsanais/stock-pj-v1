<template>
  <div>
    <v-app-bar app color="#00AD5B" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Stock Workshop v{{ version }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <span>{{$store.getters["username"] | capitalize}}</span>
      <v-btn icon @click="ClickLogout" >
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    version() {
      return " 1.0";
    },
  },
  methods: {
     ClickLogout(){
       this.$router.push("/")
       this.$store.dispatch('doLogout')
     }
  },
};
</script>
