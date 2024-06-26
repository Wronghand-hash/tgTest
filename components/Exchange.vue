<template>
  <div class="w-full h-full flex flex-col items-start justify-start">
    <div class="h-auto first py-4 w-full flex-col px-3 flex">
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
          class="text-mainWhite text-sm border-b pb-1 border-mainPink shadow-lg shadow-mainPurple"
        >
          To Level Up
        </h2>
      </div>
      <div class="w-full flex items-center justify-center space-x-4">
        <PhCoin size="66" class="text-mainYellow" weight="fill" />
        <h2 class="text-5xl Batangas">40500</h2>
      </div>
    </div>
    <div class="h-full z-40 second w-full flex items-center justify-center">
      <ClickAnimationTest />
    </div>
    <div class="w-full third flex items-end p-5 justify-between">
      <h2
        class="text-mainWhite flex items-center justify-center space-x-2 text-sm border-b-2 rounded-sm pb-1 border-mainPink shadow-lg shadow-mainPurple"
      >
        <PhLightning size="30" weight="fill" class="text-goldie" />
        <span>6000/6000</span>
      </h2>
      <h2
        class="text-mainWhite text-sm border-b border-mainYellow shadow-lg shadow-mainPurple"
      >
        Boost
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhCherries, PhLightning, PhCoin } from "@phosphor-icons/vue";
import { gsap } from "gsap";
function StartUpAnimation() {
  const tl = gsap.timeline();
  tl.fromTo(
    ".first",
    {
      duration: 0.5,
      ease: "power2.out",
      y: 70,
      opacity: 0,
    },
    {
      duration: 0.5,
      ease: "power2.out",
      y: 0,
      opacity: 1,
    }
  );
  tl.fromTo(
    ".second",
    {
      duration: 0.5,
      ease: "power2.out",
      y: 70,
      opacity: 0,
    },
    {
      duration: 0.5,
      ease: "power2.out",
      y: 0,
      opacity: 1,
    }
  );
  tl.fromTo(
    ".third",
    {
      duration: 0.5,
      ease: "power2.out",
      y: 70,
      opacity: 0,
    },
    {
      duration: 0.5,
      ease: "power2.out",
      y: 0,
      opacity: 1,
    }
  );
  tl.fromTo(
    ".forth",
    {
      duration: 0.5,
      ease: "power2.out",
      y: 70,
      opacity: 0,
    },
    {
      duration: 0.5,
      ease: "power2.out",
      y: 0,
      opacity: 1,
    }
  );
}
onMounted(() => {
  StartUpAnimation();
});
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
