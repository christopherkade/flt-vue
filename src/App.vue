<template>
  <div id="app">
    <flt-input label="Name"/>
    <flt-text-field label="Description"/>
    <flt-button @click="buttonClicked()">Button</flt-button>
    <flt-button disabled>Disabled button</flt-button>
  </div>
</template>

<script>
import { FltInput, FltTextField, FltButton } from "./components/index.js";

export default {
  name: "app",
  components: {
    FltInput,
    FltTextField,
    FltButton
  },
  methods: {
    buttonClicked() {
      console.log("Button has been clicked");
    }
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
