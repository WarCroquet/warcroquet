<template>
  <LayoutMain>
    <h3>NEW GAME</h3>
    <h2 @click="someFunc">NUMBER OF PLAYERS</h2>

    <select class="select">
      <option disabled="disabled" selected="selected" value="">Select players</option>
      <option value="1">1 Player</option>
      <option value="2">2 Players</option>
      <option value="3">3 Players</option>
      <option value="4">4 Players</option>
      <option value="5">5 Players</option>
      <option value="6">6 Players</option>
      <option value="7">7 Players</option>
      <option value="8">8 Players</option>
    </select>

    <!-- <v-select v-model="select" :items="fluit" item-text="id" item-value="name" label="Select" @input="doSomething" return-object/> -->

    <template #footer>
      <div class="link">
        <NuxtLink to="createPlayers" class="btn btn-yellow">NEXT</NuxtLink>
      </div>
    </template>
  </LayoutMain>
</template>

<script setup lang="ts">
import LayoutMain from '~/componenets/layouts/LayoutMain'
import { someLogic } from '~/logic/main'
import { ref } from 'vue'


// function makeNumberArray() { Erik kan pushe
//   var array = [];
//   for (int i = 1; i < 21; i++) {
//     array.push(i);
//   }
//   return array;
// }

// const numbers = ref(makeNumberArray())


const someFunc = async () => {
  console.log(await someLogic())
}
</script>'

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
