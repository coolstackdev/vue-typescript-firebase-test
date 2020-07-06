<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  created() {
    this.$store.dispatch("getPrinciples");
  }
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
  background: green;
}
</style>
