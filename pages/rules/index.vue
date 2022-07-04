<template>
  <LayoutMain>
    <template #headerText>
      <h3 class="text-green-1100 text-center font-bold text-lg">INFORMATION</h3>
      <h2 class="text-white text-center font-bold text-2xl">THE RULEBOOK</h2>
    </template> 
    

      General Normale crocket regler gælder, dog ikke at skyde en anden kugle
      væk hvis de lægger op af hinanden. <br/><br/>

      Hvis en kugle ikke kan skydes pga. en
      anden kugle, løftes den 2. kugle indtil der er skudt. <br/><br/>
      
      Hver person vælger
      en af af nedenstående classes og kan anvende den dertilhørende evne. Det
      er valgfrit om man vil bruge sin evne i den givne runde. <br/><br/>
      
      Der kan ikke bruges abilities i første runde. <br/><br/>
      
      STUN: Ens tur springes over, men hvis man
      har cooldown (CD) på en ability går den stadig ned. <br/><br/>
      
      Spilles der med
      Shaman, skal man bruge et objekt som kan bruges som totem. <br/><br/>
      
      Første skud
      skal skydes max 50 cm fra start-pinden. <br/><br/>

      Straf for snyd aftales ad hoc før spillets start. <br/><br/>
      
      En gate referere til de
      hvide mål man skal igennem. <br/><br/>
      
      Længder er defineret ud fra en standard
      crocket kølle. 1: En hel kølle. 2: ¾ kølle. 3: Stor ½ kølle. 4: Lille ½
      kølle. <br/><br/>

      <img src="\gfx\croquet_lenghts.png" class="shadow-xl mb-5">
      
      <h4 class="text-white font-bold text-lg">Classes:</h4><br/><br/>
      
      <strong>Druid:</strong><br/>Abilities (2 runder CD): Bear form: Charge. Global
      range. Charge til en selvvalgt spiller. Man kan ikke gå igennem gates med
      den. Moonkin form: Typhoon. En hel kølles range. Alle inden for en kølles
      range af en selv bliver skubbet en kølle væk fra deres position i den
      vinkel de har i forhold til en selv. De deler CD. <br/><br/>
      
      <strong>Death Knight:</strong><br/> 
      Abilities (2 runder CD): Death grip. 3 hele køllers range. Træk en modstanders kugle
      hen til dig. Kuglen skal placeres på den side som kuglen oprindeligt var i
      forhold til din kugle. Passive: Anti-magic zone. Ingen kan bruge abilities
      hvis de er inden for lille ½ kølles range. <br/><br/>
      
      <strong>Hunter:</strong><br/>  
      Abilities (2 runder CD):Aimed shot. Kan skyde en ekstra gang med den modsatte ende af staven
      (billiard skud). <br/><br/>
      
      Mage Abilities (2 runder CD): Blink. 3 hele køllers
      range. Flyt din kugle op til 3 hele køller i en valgfri retning. Tæller
      som skud. Din kugle kan ikke blive rykket på indtil det er din tur igen.
      Du kan ikke blink igennem en gate. Paladin Abilities (1 runde CD): Hammer
      of Justice. Stun en valgfri spiller for 1 runde. Kan ikke bruges på den
      samme spiller to gange i streg. Passives: Divine Shield. Du kan ikke blive
      stunned. Priest Abilities (0 runder CD): Leap of Faith. Du kan tage dit
      skud om. Tages skuddet om, gælder det andet skud. Rogue Abilities (2
      runder CD): Sabotage. Du må skyde en valgfri kugle væk, som i normale
      kroket regler. Passive: Stealth. Kan ikke blive rykket af andres
      almindelige skud. Shaman Abilities (2 runder CD): Capacitator totem. Du
      kan placere et totem og stunne alle inden for en hel kølles range af dette
      totem for 1 runde. Totem bliver stående, indtil ability’en bruges igen.
      Warlock Abilities (0 runder CD): Demonic gateway. Man skal sige “demonic
      gateway” hvis man bruger ability’en. Kan bruges hvis man er ¾ køller eller
      mere fra en gate. Kommer du igennem gaten, må du rykke til den næste gate
      og det tæller som at du har været igennem dem begge. Kommer man ikke
      igennem gaten, er man stunned i 2 runder. Warrior Abilities (3 runder CD):
      Dual wield. Du slår to gange med EN hånd på køllen. Passive: Enrage:
      Resetter CD på dual wield, når du kommer igennem en gate, hvis den er på
      CD i forvejen.<br/><br/>

      <button class="btn-yellow" @click="$router.go(-1)">Return</button>

  </LayoutMain>
</template>

<script setup lang="ts">
import LayoutMain from '/componenets/layouts/LayoutMain.vue'




</script>

<style lang="scss">


  
</style>
