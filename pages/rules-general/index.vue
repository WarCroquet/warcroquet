<template>
  <LayoutMain>
    <template #headerText>
      <h3 class="text-green-1100 text-center font-bold text-lg">INFORMATION</h3>
      <h2 class="text-white text-center font-bold text-2xl">THE RULEBOOK</h2>
    </template>

    <img src="~\assets\icon-tome.png" class="h-20 w-20" />
    <strong>General Rules:</strong>
    <br />

    Standard rules of croquet apply to WarCroquet with one exception:<br />
    If two balls are touching, one may not shoot the other ball away but instead
    temporally move the second ball away till the shot has been taken.
    <br /><br />

    Each player chooses one of the ten classes and gain access to the chosen
    class's abilities. It is up to the player to choose when to use an ability,
    given the ability is off cooldown.<br />
    It is not possible to use an ability in the first round.<br />
    The first shot for each player should be taken within 50 cm of the starting
    point.<br /><br />

    Before game preparation:<br />
    - If a shaman is in the game, an object should be chosen as the totem before
    the game starts.<br />
    - A punishment for cheating should be agreed upon before game start.<br /><br />

    Terminology:<br />
    - Stun: If a player is stunned their next turn is skipped. If the stunned
    player's abilities are on cooldown, these will still decrease.<br />
    - Gate: The white arches you need to shoot through to win the game.<br />
    - Lengths: See figure below:

    <img src="~\assets\croquet_lenghts.svg" />

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
