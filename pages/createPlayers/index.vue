<template>
  <LayoutMain>
    <h3>NEW GAME</h3>
    <h2 @click="someFunc">Player 1 of {{ numberOfPlayers }}</h2>

    <p>Class:</p>
    <select class="select">
      <option disabled selected>Select class</option>
      <option>Druid</option>
      <option>Death Knight</option>
      <option>Hunter</option>
      <option>Mage</option>
      <option>Paladin</option>
      <option>Priest</option>
      <option>Rogue</option>
      <option>Shaman</option>
      <option>Warlock</option>
      <option>Warrior</option></select
    ><br /><br />

    <!-- <select class="select" v-model.Class="chosenClass">
      <option disabled v-if="numberOfPlayers === 0" value="0">Select players</option>
      <option v-for="playerNum in allowedNumberOfPlayers" :value="playerNum">{{ playerNum }} Player{{ playerNum > 1 ? 's' : '' }}</option>
    </select><br /><br /> -->

    <p>Player name:</p>
    <input style="color: black" /><br /><br />

    <p>Color:</p>
    <select class="select">
      <option disabled selected value="">Select color</option>
      <option>Red</option>
      <option>Yellow</option>
      <option>Green</option>
      <option>Black</option></select
    ><br /><br />

    <template #footer>
      <div class="link">
        <NuxtLink to="game" class="btn btn-yellow">CREATE PLAYER</NuxtLink>
      </div>
    </template>
  </LayoutMain>
</template>

<script setup lang="ts">
import { GetClasses } from "~~/logic/GameLogic";
import { Class } from "~/logic/Class";
import { ref } from "vue";

const params = new URL(document.location).searchParams;

const chosenClass = ref(Class);
const chosenName = ref("");
// const chosenColor =

var playerArray = ref([]);

const numberOfPlayers = ref(params.get("numberOfPlayers"));

const classesArray = ref(GetClasses());
const colorArray = ref(["Red", "Yellow", "Green", "Black"]);
</script>

<script lang="ts">
import LayoutMain from "~~/components/layouts/LayoutMain.vue";

export default {
  name: "createPlayers",
  components: {
    LayoutMain,
  },
};
</script>

<style lang="scss">
h3 {
  @apply text-green-1100 text-center font-bold text-lg;
}

h2 {
  @apply text-white text-center font-bold text-2xl;
}

.select {
  color: black;
}
</style>
