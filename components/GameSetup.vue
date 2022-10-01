<template>
  <div>
    <h3>NEW GAME</h3>

    <label>Number of players</label>
    <select
      id="testSelect"
      class="select"
      v-model.number="playerCount"
      @change="updatePlayerCount(settings, playerCount)"
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
      @change="allowDuplicateClasses(settings, checked)"
    />
  </div>

  <div class="link">
    <button class="btn btn-yellow" @click="onNext(settings)">next</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { GameSettings } from "~/logic/GameSettings";

const checked = ref(false);
const playerCount = ref(0);
const allowedPlayerCount = ref([1, 2, 3, 4, 5, 6, 7, 8]);
const settings = new GameSettings();
</script>

<script lang="ts">
export default {
  name: "GameSetup",
  methods: {
    onNext(settings: GameSettings) {
      if (settings.PlayerCount < 1) {
        alert("Select number of players");
        return;
      }

      this.$emit("settings-next", settings);
    },
    updatePlayerCount(settings: GameSettings, playerCount: number) {
      settings.PlayerCount = playerCount;
    },
    allowDuplicateClasses(
      settings: GameSettings,
      allowDuplicateClasses: boolean
    ) {
      settings.AllowDuplicateClasses = allowDuplicateClasses;
    },
  },
  emits: ["settings-next"],
};
</script>

<style lang="scss">
</style>