<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col items-center">
      <h3 class="text-green-1100 font-bold">NEW GAME</h3>

      <label class="m-auto text-2xl font-bold my-2">NUMBER OF PLAYERS</label>
      <select
        id="testSelect"
        class="select"
        v-model.number="playerCount"
        @change="updatePlayerCount(settings, playerCount)"
      >
        <option class="option" disabled selected value="0">SELECT</option>  
        <option class="option"
          :key="playerNum"
          v-for="playerNum in allowedPlayerCount"
          :value="playerNum"
        >
          {{ playerNum }} PLAYER{{ playerNum > 1 ? "S" : "" }}
        </option>
      </select>

      <!--<br /><br />-->
      <div class="my-8">
        <label class="mx-2">Allow duplicate classes</label>
        <input
          type="checkbox"
          id="allowDuplicateClasses"
          v-model="checked"
          @change="allowDuplicateClasses(settings, checked)"
        />
      </div>
    </div>

    <div class="link">
      <button class="btn btn-yellow" @click="onNext(settings)">next</button>
    </div>
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