<template>
  <h1 class="text-white font-bold text-center mt-5 mb-5 text-xl">
    BATTLE ARENA
  </h1>
  <p class="text-white text-center">ROUND: {{ this.roundCounter }}</p>

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
    <button
      id="stunBtn"
      @click="stun_toggle()"
      class="btn btn-yellow-ability opacity-70"
    >
      <img
        src="~/assets/stun-icon.png"
      /><!--Sæt den til venstre for teksten og gør den mindre-->
      STUN
    </button>

    <button
      id="cooldownBtn"
      @click="cooldown_toggle()"
      class="btn btn-yellow-ability opacity-70"
    >
      <img
        src="~/assets/ability-icon.png"
      /><!--Sæt den til venstre for teksten og gør den mindre-->
      COOLDOWN
      <!--Den gider ikke aligne teksten??-->
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
      roundCounter: Number,
    };
  },
  mounted() {
    // Ikke gør dette hvis man bare refresher siden
    this.players = JSON.parse(localStorage.getItem("players")) as Player[];
    this.stunToggle = false;
    this.cooldownToggle = false;
    this.roundCounter = 0;
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
      this.setStunToggle(!this.stunToggle);
    },
    setStunToggle(toggle: Boolean) {
      this.stunToggle = toggle;

      if (this.stunToggle) {
        document.getElementById("stunBtn").style.opacity = "1";
      } else {
        document.getElementById("stunBtn").style.opacity = "0.7";
      }
    },
    cooldown_toggle() {
      this.setCooldownToggle(!this.cooldownToggle);
    },
    setCooldownToggle(toggle: Boolean) {
      this.cooldownToggle = toggle;

      if (this.cooldownToggle) {
        document.getElementById("cooldownBtn").style.opacity = "1";
      } else {
        document.getElementById("cooldownBtn").style.opacity = "0.7";
      }
    },
    nextRound_click() {
      this.roundCounter++;
      this.setStunToggle(false);
      this.setCooldownToggle(false);

      this.players.forEach((player: Player) => {
        UpdateDecremantals(player);
        // Opdater stun + cooldown tal på hver template.
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
