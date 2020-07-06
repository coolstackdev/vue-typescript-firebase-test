<template>
  <div v-if="principles.length" class="container">
    <div @click="prev" class="arrow">
      <p>&lt;</p>
    </div>
    <div class="content">
      <transition name="slide-fade">
        <SliderItem :key="curIndex" :content="principles[curIndex].content" />
      </transition>
    </div>
    <div @click="next" class="arrow">
      <p>&gt;</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import { Principle } from "../store/models";
import SliderItem from "@/components/SliderItem.vue";

@Component({
  components: {
    SliderItem
  }
})
export default class Slider extends Vue {
  @State principles!: Principle[];
  curIndex = 0;
  timer = 0;

  created() {
    const id = this.$route.params.id;

    if (id === undefined) {
      this.curIndex = 0;
    } else {
      this.curIndex = parseInt(id);
    }

    this.createTimer();
  }

  public createTimer(): void {
    this.timer = setInterval(() => {
      if (this.curIndex === 11) this.curIndex = 0;
      else this.curIndex++;

      this.$router.push(`/slider/${this.curIndex}`);
    }, 3000);
  }

  public clearTimer(): void {
    clearInterval(this.timer);
  }

  public prev(): void {
    this.clearTimer();

    if (this.curIndex === 0) this.curIndex = 11;
    else this.curIndex--;

    this.$router.push(`/slider/${this.curIndex}`);

    this.createTimer();
  }

  public next(): void {
    this.clearTimer();

    if (this.curIndex === 11) this.curIndex = 0;
    else this.curIndex++;

    this.$router.push(`/slider/${this.curIndex}`);

    this.createTimer();
  }
}
</script>

<style scoped>
.container {
  display: flex;
  box-sizing: border-box;
  margin: 0;
  padding: 0 20px;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.arrow {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  color: white;
}
.arrow p {
  cursor: pointer;
}
.content {
  width: 80%;
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
