<template>
  <h3>NEW GAME</h3>
  <!--<h3>Player {{ numberOfPlayers }} Data</h3>-->

  <p>Player name:</p>
  <input id="playerName" style="color: black" /><br /><br />

  <p>Class:</p>
  <select
    class="select"
    id="chooseClassSelect"
    @change="chooseClass($event.target.value)"
  >
    <option disabled selected>Select class</option>
    <option :key="_class" v-for="_class in classesArray" :value="_class.Name">
      {{ _class.Name }}
    </option></select
  ><br /><br />

  <p>Color:</p>
  <select
    class="select"
    id="chooseColorSelect"
    @change="chooseColor($event.target.value)"
  >
    <option disabled selected>Select color</option>
    <option :key="_color" v-for="_color in colorArray" :value="_color">
      {{ _color }}
    </option></select
  ><br /><br />

  <!--<h2>Player 1 of {{ numberOfPlayers }}</h2>-->
  <div class="link">
    <button
      class="btn btn-yellow"
      @click="createPlayer(chosenName(), _class, _color)"
    >
      Create Player
    </button>
  </div>
</template>

<script setup lang="ts">
import { GetClasses, GetColors } from "~~/logic/GameLogic";
import { Class } from "~/logic/Class";
import { Player } from "~/logic/Player";

//const params = new URL(document.location).searchParams;
//const numberOfPlayers = ref(params.get("numberOfPlayers"));

var classesArray: Class[];
await GetClasses().then(function (result) {
  classesArray = result;
});

var colorArray: String[];
await GetColors().then(function (result) {
  colorArray = result;
});

function chooseClass(chosenClassName: string) {
  this._class = classesArray.filter((item) => item.Name == chosenClassName)[0];
}

function chooseColor(chosenColor: string) {
  this._color = chosenColor;
}

function chosenName(): string {
  return document.getElementById("playerName").value;
}

var _class: Class;
var _color: string;
</script>

<script lang="ts">
import LayoutMain from "~~/components/layouts/LayoutMain.vue";

export default {
  name: "createPlayer",
  components: {
    LayoutMain,
  },
  methods: {
    createPlayer(chosenName: string, chosenClass: Class, chosenColor: string) {
      if (!chosenName || !chosenClass || !chosenColor) {
        alert("Fill in remaining player information");
        return;
      }

      var player = new Player(chosenName, chosenClass, chosenColor);
      this.$emit("create-player", player);

      this.initialState();
    },
    initialState() {
      document.getElementById("playerName").value = "";
      document.getElementById("chooseClassSelect").selectedIndex = 0;
      document.getElementById("chooseColorSelect").selectedIndex = 0;
      this._class = null;
      this._color = null;
    },
  },
};
</script>

<style lang="scss">
</style>
