<template>
  <div class="item-body">
    <h2>{{ content }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SliderItem extends Vue {
  @Prop() private content!: string;
}
</script>

<style scoped>
.item-body {
  width: 100%;
}
</style>
