<template>
  <div class="container">
    <p v-for="(principle, index) in principles" :key="index">
      <transition name="slide-fade">
        <SliderItem v-show="index === curIndex" :content="principle.content" />
      </transition>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import { Principle } from "./store/models";
import SliderItem from "./components/SliderItem.vue";

@Component({
  components: {
    SliderItem
  }
})
export default class App extends Vue {
  @State principles!: Principle[];
  curIndex = 0;

  created() {
    this.$store.dispatch("getPrinciples");
    setInterval(() => {
      this.curIndex = (this.curIndex + 1) % 12;
    }, 3000);
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  box-sizing: border-box;
  margin: 0;
  padding: 0 20px;
  width: 100%;
  height: 100vh;
  background: green;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0s;
}
.slide-fade-enter {
  transform: translateX(50px);
  opacity: 0;
}
</style>
