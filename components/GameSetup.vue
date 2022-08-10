<template>
  <div>
    <h3>GAME SETUP</h3>

    <label>Number of players</label>
    <a href="#" v-on:click="updatePlayerCount($event)">Try me</a>
    <select
      id="testSelect"
      class="select"
      v-model.number="playerCount"
      @change="updatePlayerCount($event)"
    >
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
    <input
      type="checkbox"
      id="allowDuplicateClasses"
      v-model="checked"
      @change="allowDuplicateClasses($event)"
    />
  </div>

  <div class="link">
    <button class="btn btn-yellow" @click="onNext(settings)">next</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { GameSettings } from "~/logic/GameSettings";

const checked = ref(false)
const playerCount = ref(0);
const allowedPlayerCount = ref([1, 2, 3, 4, 5, 6, 7, 8]);
const settings = ref(new GameSettings());


// function updatePlayerCount(event) {
//   alert(event.target.value);
//   settings.PlayerCount = event.target.value;
//   alert(settings.playerCount);
// }

// function allowDuplicateClasses(event) {
//   alert(event.target.value);
//   settings.AllowDuplicateClasses = event.target.value;
//   alert(settings.playerCount);
// }

</script>

<script lang="ts">
export default {
  name: "GameSetup",
  methods: {
    onNext(settings: GameSettings) {
      this.$emit("settings-next", settings);
    },
    updatePlayerCount: function (e) {
      alert("123test");
      settings.PlayerCount = Number(playerCount)
    },
    allowDuplicateClasses: function (e) {
      alert("test123");
    },
  },
  emits: ["settings-next"],
};
</script>

<style lang="scss">
</style>