<template>
  <div
    class="w-full h-full flex-col flex items-center py-4 justify-around px-5"
  >
    <div class="flex flex-col items-center justify-center spacey-4 w-full">
      <h1
        class="text-3xl p-3 flex flex-col items-center justify-center space-y-3 text-mainWhite"
      >
        <span class=" "> Stay Tuned for More </span>
        <span>
          <div class="flex items-center justify-center space-x-2">
            <h1 class="Batangas text-6xl">CherryBot</h1>
            <PhCherries class="text-mainRed" size="45" weight="fill" />
          </div>
        </span>
        <span> Announcements!</span>
      </h1>
      <h1
        class="text-xl p-3 flex flex-col items-center justify-center space-y-3 text-mainWhite"
      >
        <span class=" "> Many Many more </span>
        <span>
          <div class="flex items-center justify-center space-x-1">
            <h1 class="text-mainYellow text-3xl">Surprises</h1>
            <PhLightning class="text-mainYellow" size="35" weight="fill" />
            <PhSketchLogo class="text-Cyan-200" size="35" weight="fill" />
          </div>
        </span>
        <span> On the Way...</span>
      </h1>
    </div>
    <div class="flex flex-col space-y-4 w-full items-center justify-start">
      <h2 class="text-mainWhite">
        In the meantime, check out
        <span class="Batangas">CherryBot's</span> Socials to stay updated
      </h2>
      <div class="flex items-center w-full justify-center space-x-2">
        <PhTelegramLogo
          size="77"
          weight="fill"
          class="text-mainBlue cursor-pointer p-2 bg-darkPurple transition ease-in-out duration-300 hover:bg-mainWhite"
        />
        <PhXLogo
          size="77"
          weight="fill"
          class="text-mainWhite cursor-pointer p-2 bg-darkPurple transition ease-in-out duration-300 hover:bg-mainWhite hover:text-darkPurple"
        />
        <PhDiscordLogo
          size="77"
          weight="fill"
          class="text-Indigo-600 cursor-pointer p-2 bg-darkPurple transition ease-in-out duration-300 hover:bg-mainWhite"
        />
        <PhInstagramLogo
          size="77"
          weight="fill"
          class="text-mainPink cursor-pointer p-2 bg-darkPurple transition ease-in-out duration-300 hover:bg-mainWhite"
        />
      </div>
      <img src="../assets/images/CherryBig.webp" class="h-48 object-contain" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  PhCherries,
  PhLightning,
  PhCoin,
  PhSketchLogo,
  PhTelegramLogo,
  PhXLogo,
  PhDiscordLogo,
  PhInstagramLogo,
} from "@phosphor-icons/vue";
</script>

<style>
.Tbutton2 {
  --border: 5px; /* the border width */
  --slant: 0.7em; /* control the slanted corners */
  --color: #e2e224; /* the color */

  padding: 0.9em 1.2em;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: var(--color);
  background: linear-gradient(to bottom left, var(--color) 50%, #0000 50.1%) top
      right,
    linear-gradient(to top right, var(--color) 50%, #0000 50.1%) bottom left;
  background-size: calc(var(--slant) + 1.3 * var(--border))
    calc(var(--slant) + 1.3 * var(--border));
  background-repeat: no-repeat;
  box-shadow: 0 0 0 200px inset var(--s, #0000),
    0 0 0 var(--border) inset var(--color);
  clip-path: polygon(
    0 0,
    calc(100% - var(--slant)) 0,
    100% var(--slant),
    100% 100%,
    var(--slant) 100%,
    0 calc(100% - var(--slant))
  );
  transition: color var(--t, 0.3s), background-size 0.3s;
}
.Tbutton2:focus-visible {
  outline-offset: calc(-1 * var(--border));
  outline: var(--border) solid #000c;
  clip-path: none;
  background-size: 0 0;
}
.Tbutton2:hover,
.Tbutton2:active {
  background-size: 100% 100%;
  color: #101010;
  --t: 0.2s 0.1s;
}
.Tbutton2:active {
  --s: #0005;
  transition: none;
}

.Tbutton {
  --border: 5px; /* the border width */
  --slant: 0.7em; /* control the slanted corners */
  --color: #37e8fc; /* the color */

  padding: 0.9em 1.2em;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: var(--color);
  background: linear-gradient(to bottom left, var(--color) 50%, #0000 50.1%) top
      right,
    linear-gradient(to top right, var(--color) 50%, #0000 50.1%) bottom left;
  background-size: calc(var(--slant) + 1.3 * var(--border))
    calc(var(--slant) + 1.3 * var(--border));
  background-repeat: no-repeat;
  box-shadow: 0 0 0 200px inset var(--s, #0000),
    0 0 0 var(--border) inset var(--color);
  clip-path: polygon(
    0 0,
    calc(100% - var(--slant)) 0,
    100% var(--slant),
    100% 100%,
    var(--slant) 100%,
    0 calc(100% - var(--slant))
  );
  transition: color var(--t, 0.3s), background-size 0.3s;
}
.Tbutton:focus-visible {
  outline-offset: calc(-1 * var(--border));
  outline: var(--border) solid #000c;
  clip-path: none;
  background-size: 0 0;
}
.Tbutton:hover,
.Tbutton:active {
  background-size: 100% 100%;
  color: #fff;
  --t: 0.2s 0.1s;
}
.Tbutton:active {
  --s: #0005;
  transition: none;
}
</style>
