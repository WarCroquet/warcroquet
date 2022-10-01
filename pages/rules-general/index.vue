<template>
  <LayoutMain>
    <template #headerText>
      <h3 class="text-green-1100 text-center font-bold text-lg">INFORMATION</h3>
      <h2 class="text-white text-center font-bold text-2xl">THE RULEBOOK</h2>
    </template>

    <img src="~\assets\icon-tome.png" class="h-20 w-20" />
    <strong>General Rules:</strong>
    <br />

    General Normale crocket regler gælder, dog ikke at skyde en anden kugle væk
    hvis de lægger op af hinanden. <br />

    Hvis en kugle ikke kan skydes pga. en anden kugle, løftes den 2. kugle
    indtil der er skudt. <br />

    Hver person vælger en af af nedenstående classes og kan anvende den
    dertilhørende evne. Det er valgfrit om man vil bruge sin evne i den givne
    runde. <br />

    Der kan ikke bruges abilities i første runde. <br />

    STUN: Ens tur springes over, men hvis man har cooldown (CD) på en ability
    går den stadig ned. <br />

    Spilles der med Shaman, skal man bruge et objekt som kan bruges som totem.
    <br />

    Første skud skal skydes max 50 cm fra start-pinden. <br />

    Straf for snyd aftales ad hoc før spillets start. <br />

    En gate referere til de hvide mål man skal igennem. <br />

    Længder er defineret ud fra en standard crocket kølle. 1: En hel kølle. 2: ¾
    kølle. 3: Stor ½ kølle. 4: Lille ½ kølle. <br />

    <img src="~\assets\croquet_lenghts.png" class="shadow-xl mb-5" />

    <button class="btn-yellow" @click="$router.go(-1)">Return</button
    ><br /><br />
  </LayoutMain>
</template>

<script lang="ts">
import LayoutMain from "~~/components/layouts/LayoutMain.vue";

export default {
  name: "rules",
  components: {
    LayoutMain,
  },
};
</script>

<style scoped lang="scss">
li {
  list-style-type: disc;
  margin-left: 3em;
}
</style>
