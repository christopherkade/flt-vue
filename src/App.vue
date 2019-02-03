<template>
  <div id="app">
    <flt-input label="Name"/>
    <flt-text-field label="Description"/>
  </div>
</template>

<script>
import { FltInput, FltTextField } from "./components/index.js";

export default {
  name: "app",
  components: {
    FltInput,
    FltTextField
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
