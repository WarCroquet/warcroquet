<template>
  <LayoutMain>
    <template #headerText>
      <h3 class="text-green-1100 text-center font-bold text-lg">INFORMATION</h3>
      <h2 class="white font-bold text-2xl">ABOUT WARCROQUET</h2>
    </template>

    <p class="text-center">Created by the HTX Bois.</p>
    <br />

    <ul class="text-sm">
      <li class="text-center">Marcus Astrup Hansen aka "Tarzan wannabe"</li>
      <li class="text-center">Jacob Anneberg Sørensen aka "Mr. Jetset"</li>
      <li class="text-center">Troels Zink Kristensen aka "Tics boy 2000"</li>
      <li class="text-center">Toke Rosenbæk Andersen aka "Tokxic"</li>
      <li class="text-center">Jonas Niaraki Jensen aka "Swahili"</li>
      <li class="text-center">Mikkel Fjord Olsen aka "Brøleabe"</li>
      <li class="text-center">Sigurd Eugen Espersen aka "TT"</li>
      <li class="text-center">Erik Thomsen aka "Den sleske"</li>
    </ul>
    <br />

    <p class="text-center">Copyright © 2022</p>
    <br />

    <div class="flex items-center justify-center mt-auto">
      <button class="btn-yellow" @click="$router.go(-1)">Return</button>
    </div>
  </LayoutMain>
</template>

<script>
import LayoutMain from "~~/components/layouts/LayoutMain.vue";

export default {
  name: "about",
  components: {
    LayoutMain,
  },
};
</script>

<style lang="scss">
.btn-yellow {
  text-transform: uppercase;
}
</style>
