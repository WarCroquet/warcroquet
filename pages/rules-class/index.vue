<template>
  <LayoutMain>
    <template #headerText>
      <h3 class="text-green-1100 text-center font-bold text-lg">INFORMATION</h3>
      <h2 class="text-white text-center font-bold text-2xl">THE RULEBOOK</h2>
    </template>

    <img :src="_class.IconUrl" class="h-20 w-20" />
    <strong>{{ _class.Name }}:</strong><br />

    <div v-if="_class.Ability != null">
      Ability ({{ _class.Ability.Cooldown }} rounds cooldown):
      <ul>
        <li>
          <u>{{ _class.Ability.Name }}</u
          >. {{ _class.Ability.Description }}
        </li>
      </ul>
    </div>

    <div v-if="_class.Passive != null">
      Passive:
      <ul>
        <li>
          <u>{{ _class.Passive.Name }}</u
          >. {{ _class.Passive.Description }} <br /><br />
        </li>
      </ul>
    </div>

    <button class="btn-yellow" @click="$router.go(-1)">Return</button
    ><br /><br />
  </LayoutMain>
</template>

<script setup lang="ts">
import { GetClasses } from "~~/logic/GameLogic";
import { Class } from "~/logic/Class";

var _class: Class;
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
  data() {
    this._class = this.classesArray.filter(
      (_class: Class) => _class.Name == this.$route.query.className
    )[0];
  },
};
</script>

<style scoped lang="scss">
li {
  list-style-type: disc;
  margin-left: 3em;
}
</style>
