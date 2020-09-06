<template>
  <div id="app">
    <custom-message @customEvent="logEvent">
      <template v-slot:title>Cool Title</template>
      <template v-slot:content>Here will be cool story</template>
    </custom-message>
    <h3>Custom events in v-model</h3>
    <custom-v-model v-model="checked" />
    <h3>Native event</h3>
    <native-event @focus.native="handleNativeFocus" />
    <h3>.sync modifier</h3>
    <custom-sync v-bind.sync="doc" />
    <h3>Custom filter html tags</h3>
    <custom-filter :message="html" />
    <h3>Portfolio with Vuex</h3>
    <portfolio />
  </div>
</template>

<script>
// import CustomInput from '../src/components/CustomInput';
import CustomMessage from "../src/components/CustomMessage";
import CustomVModel from "../src/components/CustomVModel";
import NativeEvent from "../src/components/NativeEvent";
import CustomSync from "../src/components/CustomSync";
import CustomFilter from "../src/components/CustomFilter";
import Portfolio from "../src/components/Portfolio";

export default {
  name: "App",
  components: {
    CustomMessage,
    CustomVModel,
    NativeEvent,
    CustomSync,
    CustomFilter,
    Portfolio
  },
  data() {
    return {
      searchText: "",
      checked: false,
      doc: {
        name: "Simple document",
        volume: 100,
      },
      html: "<div><span>Please show myself</span></div>",
    };
  },
  methods: {
    logEvent() {
      console.log("I received an event");
    },
    handleNativeFocus() {
      console.log("native focus is handled");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
