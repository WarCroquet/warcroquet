<template>
  <div class="flex flex-col items-center">
    <h1 
      class="font-bold text-center mt-5 text-4xl font-Inter text-white"
      style="
          background: linear-gradient(180deg, #FFFFFF 0%, #9D9D9D 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
      "
    >
      BATTLE ARENA
    </h1>
    <p 
      class="text-white text-center font-bold"
      style="
          background: linear-gradient(180deg, #FFFFFF 0%, #9D9D9D 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
      "
      >
      ROUND: {{ this.roundCounter }}
    </p>

    <div class="flex flex-wrap text-white justify-center mt-4">
      <PlayerTemplate
        v-for="player in this.players"
        :key="player"
        :playerColor="player.ColorHex"
        :playerClass="player.Class.Name"
        :playerName="player.Name"
        :stunIcon="player.StunIcon"
        :abilityIcon="player.CooldownIcon"
        @click="player_click(player)"
      />
    </div>

    <div 
      class="flex flex-wrap justify-center py-4 px-4 rounded-lg m-4"
      style="background-color: rgba(2, 58, 43, 0.44);">
      <button
        id="cooldownBtn"
        @click="cooldown_toggle()"
        class="btn btn-yellow-ability opacity-70"
      >
        <div class="flex flex-row justify-center">
          <img
            src="~/assets/cooldown-icons/ability.png"
            class="h-5 px-1 my-auto"
          />
          COOLDOWN
        </div>
      </button>

      <button
        id="stunBtn"
        @click="stun_toggle()"
        class="btn btn-yellow-ability opacity-70"
      >
        <div class="flex flex-row justify-center">
          <img
            src="~/assets/stun-icons/stun.png"
            class="h-5 px-1 my-auto"
          />
          STUN
      </div>
      </button>

      <button @click="nextRound_click()" class="btn btn-yellow-ability">
        NEXT ROUND
      </button>
    </div>
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
    this.roundCounter = 1;
  },
  methods: {
    player_click(player: Player) {
      if (
        this.roundCounter <= 1 ||
        (!this.stunToggle && !this.cooldownToggle)
      ) {
        return;
      }

      if (this.stunToggle) {
        SetRoundsStunned(player, 1);
      }
      if (this.cooldownToggle) {
        SetCooldown(player);
      }
    },
    stun_toggle() {
      this.setStunToggle(!this.stunToggle);
      if (this.stunToggle) {
        this.setCooldownToggle(false);
      }
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
      if (this.cooldownToggle) {
        this.setStunToggle(false);
      }
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
