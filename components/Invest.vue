<template>
  <div class="w-full h-full">
    <div class="h-auto w-full flex-col px-3 flex">
      <h2
        class="text-mainWhite border-b-2 border-mainPink shadow-lg shadow-mainPurple"
      >
        Welcome Back, Arvin!
      </h2>
      <div class="flex items-center justify-evenly mb-6 mt-2 space-x-2">
        <button
          class="text-sm Tbutton flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-full justify-center p-3 transition duration-300 ease-in-out border-2 bg-darkPurple border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainPurple hover:text-mainPink text-goldie"
        >
          <span>Earn Per Tap : <span class="text-goldie">3x</span></span>
        </button>
        <button
          class="text-sm Tbutton2 flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-full justify-center p-3 transition duration-300 ease-in-out border-2 bg-darkPurple border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainPurple hover:text-mainPink text-mainPink"
        >
          <span>Level : 4</span>
        </button>
      </div>
      <div class="w-full flex flex-col space-y-2 items-end">
        <UProgress :value="75" />
        <h2
          class="text-mainWhite text-sm border-b-2 rounded-md pb-1 border-mainPink shadow-lg shadow-mainPurple"
        >
          To Level Up
        </h2>
      </div>
    </div>
    <div class="w-full my-9 flex items-center justify-center space-x-4">
      <PhCoin size="44" class="text-mainYellow" weight="fill" />
      <h2 class="text-5xl Batangas">40500</h2>
    </div>
    <div class="w-full flex h-10 bg-mainDark items-center px-4 justify-between">
      <h2 class="text-sm font-bold">Daily Combo</h2>

      <div class="flex items-center justify-center space-x-2">
        <PhCoin size="20" class="text-mainYellow" weight="fill" />
        <h2 class="text-lg font-bold Batangas">500,000,000</h2>
      </div>
    </div>
    <div class="grid grid-cols-3 place-items-center gap-2 px-6 py-4">
      <div
        class="w-full h-32 bg-darkPurple rounded-sm shadow-lg shadow-mainPurple border border-mainPink"
      ></div>
      <div
        class="w-full h-32 bg-darkPurple rounded-sm shadow-lg shadow-mainPurple border border-mainPink"
      ></div>
      <div
        class="w-full h-32 bg-darkPurple rounded-sm shadow-lg shadow-mainPurple border border-mainPink"
      ></div>
    </div>
    <InvestOptions />
  </div>
</template>

<script setup>
import { PhCoin } from "@phosphor-icons/vue";
</script>

<style>
font-face {
  font-family: "Batangas1";
  src: url("../assets/fonts/Batangas.otf");
  font-style: normal;

  /* unicode-range: U+0020-007F; */
}

.Batangas {
  font-family: "Batangas1";
  background-image: repeating-linear-gradient(
    to left,
    #f01197 0%,
    #f1bd2e 10%,

    #efbd3c 15%,
    #f2023e 29%,
    #c078f0 67%,
    #de4b9c 100%
  );
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 6s linear infinite;
  display: inline-block;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>
