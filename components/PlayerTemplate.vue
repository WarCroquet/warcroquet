<template>
  <div 
    class="containerPaddingComponent py-4"
    style="padding-top: 12px; padding-bottom: 12px;">
    <div
      :id="playerName + '-playercolor-ring'"
      class="relative rounded-full -z-10 shadow-warCircle m-auto"
      :style="{ backgroundColor: playerColor }"
      style="width: 104px; height: 104px;"
    >
      <div
        :id="playerName + '-class-container'"
        class="
          absolute
          top-50%
          right-50%
          w-20
          h-20
          rounded-full
          shadow-warCircle
          bg-black-500
        "
        style="margin-left: 12px; margin-top: 12px;"
      >
        <img
          :id="playerName + '-class-img'"
          :src="'./assets/icon-' + playerClass + '.png'"
          alt="class logo icon"
          class="rounded-full shadow-warCircle"
        />

        <span
          :id="playerName + '-stun-span'"
          class="
            absolute
            h-8
            w-8
            rounded-full
            bg-iconGrey
            bottom-16
            right-12
            shadow-warCircle
          "
          style="bottom: 72px;"
        >
          <img
            :id="playerName + '-stun-img'"
            :src="'./assets/' + stunIcon"
            alt="class logo icon"
            class="rounded-full w-6 h-6 mx-auto my-1"
          />
        </span>

        <span
          :id="playerName + '-ability-span'"
          class="
            absolute
            h-8
            w-8
            rounded-full
            bg-iconGrey
            bottom-5
            right-[4.5rem]
            shadow-warCircle
          "
          style="bottom: 40px;"
        >
          <img
            :id="playerName + '-ability-img'"
            :src="'./assets/' + abilityIcon"
            alt="class logo icon"
            class="w-5 h-5 mx-auto"
            style="margin-top: 6px; margin-bottom: 6px;"
          />
        </span>
      </div>
    </div>
    <p
      :id="playerName + '-name-paragraph'"
      class="font-bold text-xl text-center text-white"
    >
      {{ playerName }}
    </p>
    <p
      :id="playerName + '-class-parapraph'"
      class="font-bold text-sm text-center mb-2 text-green-1100"
      style="text-transform: uppercase"
    >
      {{ playerClass }}
    </p>
  </div>
</template>

<script>
export default {
  //Accessible variables in component
  props: [
    "playerName", //Player name
    "playerColor", //Must be hex colorcode value with no hashtag in front
    "playerClass", //Player class. Must be lowercase.
    "stunIcon", // Icon name including filetype
    "abilityIcon", // Ability name including filetype
  ],
};
</script>

<style lang="scss">
.containerPaddingComponent {
  @apply px-7;
  @apply basis-5/12;
}
</style>



