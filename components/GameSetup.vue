<template>
  <div>
    <h3>GAME SETUP</h3>

    <label>Number of players</label>
    <select class="select" v-model.number="playerCount">
      <option disabled selected value="0">Select players</option>
      <option
        :key="playerNum"
        v-for="playerNum in allowedPlayerCount"
        :value="playerNum"
      >
        {{ playerNum }} Player{{ playerNum > 1 ? "s" : "" }}
      </option>
    </select>

    <br /><br />
    <label>Allow duplicate classes</label>
    <input type="checkbox" id="allowDuplicateClasses" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { GameSettings } from "~/logic/GameSettings";

const playerCount = ref(0);
const allowedPlayerCount = ref([1, 2, 3, 4, 5, 6, 7, 8]);
</script>

<script lang="ts">
export default {
  name: "GameSetup",
  //   props: {
  //     GameSettings: GameSettings,
  //   },
};
</script>

<style lang="scss">
</style>