<template>
  <LayoutMain>
    <h3>NEW GAME</h3>
    <h2 @click="someFunc">NUMBER OF PLAYERS</h2>

    <select class="select" v-model.number="numberOfPlayers">
      <option disabled v-if="numberOfPlayers === 0" value="0">Select players</option>
      <option v-for="playerNum in allowedNumberOfPlayers" :value="playerNum">{{playerNum}} Player{{playerNum > 0 ? 's' : ''}}</option>
    </select>

    <!-- <v-select v-model="select" :items="fluit" item-text="id" item-value="name" label="Select" @input="doSomething" return-object/> -->

    <template #footer>
      <div class="link">
        <NuxtLink :to="{name: 'createPlayers', query: { numberOfPlayers }}" class="btn btn-yellow">NEXT</NuxtLink>
      </div>
    </template>
  </LayoutMain>
</template>

<script setup lang="ts">
import LayoutMain from '~/componenets/layouts/LayoutMain'
import { someLogic } from '~/logic/main'
import { ref } from 'vue'

const numberOfPlayers = ref(0)
const allowedNumberOfPlayers = ref([1,2,3,4,5,6,7,8])

const someFunc = async () => {
  console.log(await someLogic())
}
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
