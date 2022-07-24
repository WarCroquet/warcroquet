<template>
<LayoutMain>
    <template #headerText>
      <h3 class="text-green-1100 text-center font-bold text-lg">INFORMATION</h3>
      <h2 class="white font-bold text-2xl">ABOUT WARCROQUET</h2>
    </template> 
  
   
      <p class="text-center">Created by the HTX Bois.</p><br/>

      <ul class="text-sm">
        <li class="text-center">Erik Thomsen aka "Den sleske"</li>
        <li class="text-center">Jacob Anneberg Sørensen aka "Mr. Jetset"</li>
        <li class="text-center">Jonas Niaraki Jensen aka "Swahili"</li>
        <li class="text-center">Marcus Astrup Hansen aka "Tarzan wannabe"</li>
        <li class="text-center">Mikkel Fjord Olsen aka "Brøleabe"</li>
        <li class="text-center">Sigurd Eugen Espersen aka "TT"</li>
        <li class="text-center">Toke Rosenbæk Andersen aka "Tokxic"</li>
        <li class="text-center"> Troels Zink Kristensen aka "Tics boy 2000"</li>
      </ul><br/>
     
      <p class="text-center">Copyright © 2022</p><br/>

      <playerTemplate playerColor="52ED6B" playerClass="shaman" playerName="PLAYER 4" />

      <div class="flex items-center justify-center mt-auto">
        
        <button class="btn-yellow " @click="$router.go(-1)">Return</button>
      
      </div>
     
   
   
  </LayoutMain>
</template>

<script setup lang="ts">
import LayoutMain from '/componenets/layouts/LayoutMain.vue'
import playerTemplate from '/componenets/layouts/playerTemplate.vue'
</script>

<style lang="scss">

</style>
