<template>
  <LayoutMain>
    <template #headerText>
      <h3 class="text-green-1100 text-center font-bold text-lg">INFORMATION</h3>
      <h2 class="text-white text-center font-bold text-2xl">THE RULEBOOK</h2>
    </template>

    <strong>General Rules:</strong>
    <br />
    <img src="~\assets\icon-tome.png" @click="navigateToGeneralRules()" />

    <br />
    <strong>Classes:</strong>
    <br />
    <br />

    <div v-for="_class in classesArray" :key="_class">
      <strong class="pt-5">{{ _class.Name }}</strong>
      <img
        :src="_class.IconUrl"
        class="pb-5"
        @click="navigateToClass(_class)"
      />
    </div>

    <button class="btn-yellow" @click="$router.go(-1)">Return</button
    ><br /><br />
  </LayoutMain>
</template>

<script setup lang="ts">
import { GetClasses } from "~~/logic/GameLogic";
import { Class } from "~/logic/Class";

var classesArray: Class[];
await GetClasses().then(function (result) {
  classesArray = result;
});
</script>

<script lang="ts">
import LayoutMain from "~~/components/layouts/LayoutMain.vue";

export default {
  name: "rules",
  components: {
    LayoutMain,
  },
  methods: {
    navigateToGeneralRules() {
      this.$router.push({ path: "/rules-general" });
    },
    navigateToClass(_class: Class) {
      this.$router.push({
        path: "/rules-class",
        query: { className: _class.Name },
      });
    },
  },
};
</script>

<style scoped lang="scss">
li {
  list-style-type: disc;
  margin-left: 3em;
}
</style>
