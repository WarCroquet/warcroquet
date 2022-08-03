<template>
  <LayoutMain>
    <template #headerText>
      <h3 class="text-green-1100 text-center font-bold text-lg">INFORMATION</h3>
      <h2 class="text-white text-center font-bold text-2xl">THE RULEBOOK</h2>
    </template>
    General Normale crocket regler gælder, dog ikke at skyde en anden kugle
    væk hvis de lægger op af hinanden. <br />

    Hvis en kugle ikke kan skydes pga. en
    anden kugle, løftes den 2. kugle indtil der er skudt. <br />

    Hver person vælger
    en af af nedenstående classes og kan anvende den dertilhørende evne. Det
    er valgfrit om man vil bruge sin evne i den givne runde. <br />

    Der kan ikke bruges abilities i første runde. <br />

    STUN: Ens tur springes over, men hvis man
    har cooldown (CD) på en ability går den stadig ned. <br />

    Spilles der med
    Shaman, skal man bruge et objekt som kan bruges som totem. <br />

    Første skud
    skal skydes max 50 cm fra start-pinden. <br />

    Straf for snyd aftales ad hoc før spillets start. <br />

    En gate referere til de
    hvide mål man skal igennem. <br />

    Længder er defineret ud fra en standard
    crocket kølle. 1: En hel kølle. 2: ¾ kølle. 3: Stor ½ kølle. 4: Lille ½
    kølle. <br />

    <img src="~\assets\croquet_lenghts.png" class="shadow-xl mb-5">

    <br />
    <h4 class="text-white font-bold text-lg">Classes:</h4><br />

    <!--Sigurd: List item virker ikke korrekt. En bug gør at der ikke kommer nogen dot ved hver list item + der er ingen inline. Fix gerne-->
    <strong>Druid:</strong><br />
    Abilities (2 runder CD):
    <ul>
      <li> <u>Bear form: Charge</u>. Global range. Charge til en selvvalgt spiller. Man kan ikke gå igennem gates med
        den. </li>
      <li>
        <u>Moonkin form: Typhoon</u>. En hel kølles range. Alle inden for en kølles range af en selv bliver skubbet en
        kølle væk fra deres position i den vinkel de har i forhold til en selv. De deler CD. <br /><br />
      </li>
    </ul>

    <strong>Death Knight:</strong><br />
    Ability (2 runder CD):
    <ul>
      <li>
        <u>Death grip</u>. 3 hele køllers range. Træk en modstanders kugle hen til dig. Kuglen skal placeres på den side
        som kuglen oprindeligt var i forhold til din kugle.
      </li>
    </ul>
    Passive:
    <ul>
      <li>
        <u>Anti-magic zone</u>. Ingen kan bruge abilities hvis de er inden for lille ½ kølles range. <br /><br />
      </li>
    </ul>

    <strong>Hunter:</strong><br />
    Ability (2 runder CD):
    <ul>
      <li>
        <u>Aimed shot</u>. Kan skyde en ekstra gang med den modsatte ende af staven (billiard skud). <br /><br />
      </li>
    </ul>

    <strong>Mage:</strong><br />
    Ability (2 runder CD):
    <ul>
      <li>
        <u> Blink</u>. 3 hele køllers range. Flyt din kugle op til 3 hele køller i en valgfri retning. Tæller som skud.
        Din kugle kan ikke blive rykket på indtil det er din tur igen. Du kan ikke blink igennem en gate. <br /><br />
      </li>
    </ul>

    <strong>Paladin:</strong><br />
    Ability (1 runde CD):
    <ul>
      <li>
        <u>Hammer of Justice</u>. Stun en valgfri spiller for 1 runde. Kan ikke bruges på den samme spiller to gange i
        streg.
      </li>
    </ul>
    Passive:
    <ul>
      <li>
        <u>Divine Shield</u>. Du kan ikke blive stunned. <br /><br />
      </li>
    </ul>

    <strong>Priest:</strong><br />
    Ability (0 runder CD):
    <ul>
      <li>
        <u>Leap of Faith</u>. Du kan tage dit skud om. Tages skuddet om, gælder det andet skud. <br /><br />
      </li>
    </ul>

    <strong>Rogue:</strong><br />
    Ability (2 runder CD):
    <ul>
      <li>
        <u> Sabotage</u>. Du må skyde en valgfri kugle væk, som i normale kroket regler.
      </li>
    </ul>
    Passive:
    <ul>
      <li>
        <u> Stealth</u>. Kan ikke blive rykket af andres almindelige skud. <br /><br />
      </li>
    </ul>

    <strong>Shaman:</strong><br />
    Ability (2 runder CD):
    <ul>
      <li>
        <u>Capacitator totem</u>. Du kan placere et totem og stunne alle inden for en hel kølles range af dette totem
        for 1 runde. Totem bliver stående, indtil ability'en bruges igen. <br /><br />
      </li>
    </ul>

    <strong>Warlock:</strong><br />
    Ability (0 runder CD):
    <ul>
      <li>
        <u>Demonic gateway</u>. Man skal sige “demonic gateway” hvis man bruger ability'en. Kan bruges hvis man er ¾
        køller eller mere fra en gate. Kommer du igennem gaten, må du rykke til den næste gate og det tæller som at du
        har været igennem dem begge. Kommer man ikke igennem gaten, er man stunned i 2 runder. <br /><br />
      </li>
    </ul>

    <strong>Warrior:</strong><br />
    Ability (3 runder CD):
    <ul>
      <li>
        <u>Dual wield</u>. Du slår to gange med én enkelt hånd på køllen.
      </li>
    </ul>
    Passive:
    <ul>
      <li>
        <u>Enrage</u>: Resetter CD på dual wield, når du kommer igennem en gate, hvis den er på CD i
        forvejen.<br /><br />
      </li>
    </ul>

    <button class="btn-yellow" @click="$router.go(-1)">Return</button><br /><br />
  </LayoutMain>
</template>

<script setup lang="ts">
import LayoutMain from '/componenets/layouts/LayoutMain.vue'
</script>

<style lang="scss">
</style>
