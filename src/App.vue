<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import api from "./plugins/axios";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["credentials", "loggedIn"]),
  },

  mounted() {
    if (this.loggedIn) {
      api.defaults.headers.common["Authorization"] =
        "Bearer " + this.credentials.access;
    }
  },
};
</script>

<style>
</style>
