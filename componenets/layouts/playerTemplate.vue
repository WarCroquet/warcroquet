<!--

Player template used for generating graphic player DOM object on main battlescreen. 

Syntax to when using this component: 
<player-template playerName="" playerClass="" playerColor="" />
-->

<template>

<div class="containerPaddingComponent">
        <div :id="playerName + '-playercolor-ring'" class="relative w-28 h-28 rounded-full -z-10 shadow-warCircle" :style="{backgroundColor: '#' + playerColor}">

          <div :id="playerName + '-class-container'" class="absolute top-50% right-50% mt-4 ml-4 w-20 h-20 rounded-full shadow-warCircle bg-black-500">
            <img :id="playerName + '-class-img'" :src="'gfx/icon-' + playerClass + '.png'"  alt="class logo icon" class="rounded-full shadow-warCircle"/>

            <span :id="playerName + '-stun-span'" class="absolute h-9 w-9 rounded-full bg-iconGrey bottom-16 right-12 shadow-warCircle">
              <img :id="playerName + '-stun-img'" src="gfx\stun-icon.png" alt="class logo icon" class="rounded-full w-6 h-6 mx-auto my-2"/>
            </span>

            <span :id="playerName + '-ability-span'" class="absolute h-9 w-9 rounded-full bg-iconGrey bottom-5 right-[4.5rem] shadow-warCircle">
               <img :id="playerName + '-ability-img'" src="gfx\ability-icon.png" alt="class logo icon" class="rounded-full p-2"/>
            </span>
          </div> 
        </div>
        <p :id="playerName + '-name-paragraph'" class="font-bold text-xl text-center mt-3 mb-1 text-white">{{ playerName }}</p>
        <p :id="playerName + '-class-parapraph'" class="font-bold text-sm text-center mb-2 text-green-1100" style="text-transform: uppercase;">{{ playerClass }}</p>
    </div>
</template>


<script>
export default {
    //Accessible variables in component
  props: [
    'playerName', //Player name
    'playerColor', //Must be hex colorcode value with no hashtag in front
    'playerClass', //Player class. Must be lowercase. 
    ],
    
}

</script>

<style lang="scss">

    .containerPaddingComponent{
        @apply px-7;
    }
 
</style>



