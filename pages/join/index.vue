<template>
  <LayoutMain>
    <h3>NEW GAME</h3>
    <h2>NUMBER OF PLAYERS</h2>

    <div class="link">
      <NuxtLink to="game" class="btn btn-yellow">JOIN GAME</NuxtLink>
      <p>Message is: {{ message }}</p>
      <input v-model="message" placeholder="edit me" />
      <FormKit
        type="text"
        label="European city"
        help="What is your favorite European city?"
        v-model="message"
      />
    </div>
    <template #footer>
    </template>
  </LayoutMain>
</template>

<script setup lang="ts">
  import '@formkit/themes/genesis'
  
  var message = ""
</script>

<script lang="ts">
import LayoutMain from "~~/components/layouts/LayoutMain.vue";

export default {
  name: "joinGame",
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
.formkit-input[type=text] {
  background-color: white
}
</style>
