<template>
  <div id="app">
    <h1>Components</h1>
    <div class="inputs">
      <flt-input label="Input field with label"/>
      <br>
      <flt-text-field label="Text field with label" :cols="25"/>
      <br>
    </div>
    <div class="buttons">
      <flt-button @click="buttonClicked()">Button</flt-button>
      <br>
      <flt-button disabled>Disabled button</flt-button>
    </div>
    <div class="misc">
      <flt-label>Labels</flt-label>
      <br>
      <br>
      <flt-tag>Tags</flt-tag>
    </div>
  </div>
</template>

<script>
import {
  FltInput,
  FltTextField,
  FltButton,
  FltLabel,
  FltTag
} from "./components/index";

export default {
  name: "app",
  components: {
    FltInput,
    FltTextField,
    FltButton,
    FltLabel,
    FltTag
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
  text-align: center;
}

.inputs,
.buttons,
.misc {
  padding: 25px;
}
</style>
