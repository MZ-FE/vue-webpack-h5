<template>
  <div class="m-5">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  z-index: 11;
  margin-top: 60px;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
