<template>
  <LayoutMain>
    <h3>NEW GAME</h3>
    <h2>NUMBER OF PLAYERS</h2>

    <select class="select" v-model.number="numberOfPlayers">
      <option disabled selected value="0">Select players</option>
      <option v-for="playerNum in allowedNumberOfPlayers" :value="playerNum">
        {{ playerNum }} Player{{ playerNum > 1 ? "s" : "" }}
      </option>
    </select>

    <template #footer>
      <div class="link">
        <NuxtLink
          :to="{ name: 'createPlayers', query: { numberOfPlayers } }"
          class="btn btn-yellow"
          >NEXT</NuxtLink
        >
      </div>
    </template>
  </LayoutMain>
</template>

<script setup lang="ts">
import { ref } from "vue";

const numberOfPlayers = ref(0);
const allowedNumberOfPlayers = ref([1, 2, 3, 4, 5, 6, 7, 8]);
</script>

<script lang="ts">
import LayoutMain from "~~/components/layouts/LayoutMain.vue";

export default {
  name: "about",
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
  display: block;
  margin-left: auto;
  margin-right: auto;
}

select .option {
  color: black;
}
</style>
