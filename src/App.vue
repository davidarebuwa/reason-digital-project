<template>
  <div>
    <AppHeader :menu-items="menuItems"/>
    <router-view />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapGetters } from "vuex";
import { AppHeader } from "@/components";

export default {
  name: "App",
  components: {
    AppHeader,
  },
  data() {
    return {
      menuItems: [],
    };
    },
  computed: {
    ...mapGetters(["menuItems"]),
  },
  created() {
    this.menuItems = this.$store.getters.menuItems;
  },
};
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
#app > header,
main,
footer {
  padding: 0 80px;
}

.container {
  margin-top: 32px;
}
</style>
