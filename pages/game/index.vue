<template>
  <h1 class="text-white font-bold text-center mt-5 mb-5 text-xl">
    BATTLE ARENA
  </h1>

  <div class="flex flex-wrap text-white justify-center mt-4">
    <PlayerTemplate
      v-for="player in this.players"
      :key="player"
      :playerColor="player.ColorHex"
      :playerClass="player.Class.Name"
      :playerName="player.Name"
      @click="player_click(player)"
    />
  </div>

  <div class="flex flex-wrap justify-center">
    <button @click="stun_toggle()" class="btn btn-yellow-ability">STUN</button>
    <button @click="cooldown_toggle()" class="btn btn-yellow-ability">
      CD
    </button>
    <button @click="nextRound_click()" class="btn btn-yellow-ability">
      NEXT
    </button>
  </div>
</template>

<script lang="ts">
import PlayerTemplate from "~~/components/PlayerTemplate.vue";
import {
  Player,
  SetCooldown,
  SetRoundsStunned,
  UpdateDecremantals,
} from "~/logic/Player";

export default {
  name: "game",
  components: {
    PlayerTemplate,
  },
  data() {
    return {
      players: [],
      stunToggle: Boolean,
      cooldownToggle: Boolean,
    };
  },
  mounted() {
    this.players = JSON.parse(localStorage.getItem("players")) as Player[];
    this.stunToggle = false; // Hvis man refresher siden skal de ikke sættes til false
    this.cooldownToggle = false;
  },
  methods: {
    player_click(player: Player) {
      if (!this.stunToggle && !this.cooldownToggle) {
        return;
      }

      if (this.stunToggle) {
        SetRoundsStunned(player, 1);
      }
      if (this.cooldownToggle && player.Cooldown == 0) {
        SetCooldown(player);
      }
    },
    stun_toggle() {
      this.stunToggle = !this.stunToggle;
      console.log("stunToggled: " + this.stunToggle);
    },
    cooldown_toggle() {
      this.cooldownToggle = !this.cooldownToggle;
      console.log("cooldownToggled: " + this.cooldownToggle);
    },
    nextRound_click() {
      this.players.forEach((player: Player) => {
        UpdateDecremantals(player);
        console.log(player.Name);
        console.log("Rounds stunned: " + player.RoundsStunned);
        console.log("Cooldown: " + player.Cooldown);
      });
    },
  },
};
</script>


<style lang="scss">
.containerPadding {
  @apply p-7;
}
</style>
