<template>
  <div
    class="w-full h-full flex-col flex py-3 items-center justify-around px-4"
  >
    <h1
      class="text-2xl flex items-center justify-center space-x-3 text-mainWhite"
    >
      <span class=" "> Daily </span>
      <span>
        <div class="flex items-center justify-center space-x-2">
          <h1 class="Batangas text-4xl">CherryBot</h1>
          <PhCherries class="text-mainRed" size="34" weight="fill" />
        </div>
      </span>
      <span> Tasks!</span>
    </h1>
    <div
      class="w-full space-y-2 h-auto flex flex-col items-start justify-center"
    >
      <h2 class="text-lg capitalize mt-2 text-white">
        Achieve these daily tasks to earn more!
      </h2>
      <LazyDailyTasks />
    </div>
    <div
      class="h-auto mt-5 w-full space-y-2 flex flex-col items-start justify-center"
    >
      <h2 class="text-lg capitalize mt-2 text-white">Social Tasks</h2>
      <LazySocialTasks />
    </div>

    <!-- <InvestOptions /> -->
  </div>
</template>

<script setup>
import { PhCoin, PhCherries } from "@phosphor-icons/vue";
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
