<template>
  <div
    class="w-screen h-screen absolute flex-col LoadingDiv bg-darkPurple z-30 flex items-center justify-center"
  >
    <div class="w-full flex mb-44 items-center justify-center space-x-2">
      <h1 class="Batangas text-6xl">CherryBot</h1>
      <PhCherries class="text-mainRed" size="44" weight="fill" />
    </div>

    <PhCircleNotch size="99" weight="fill" class="animate-spin text-mainPink" />
  </div>
  <div class="h-screen flex items-center flex-col w-screen bg-gray-800">
    <div
      class="w-full h-full flex flex-col rounded-3xl bg-darkPurple items-center justify-center"
    >
      <div
        class="h-full w-full flex-col flex items-center drop-shadow-2xl justify-center rounded-t-3xl"
      >
        <div
          class="w-full h-full flex items-center py-2"
          id="div1"
          v-show="showDiv1"
        >
          <Exchange />
        </div>
        <div
          class="w-full h-full flex items-center py-2"
          id="div2"
          v-show="showDiv2"
        >
          <LazyEarn />
        </div>
        <div
          class="w-full h-full flex items-center py-2"
          id="div3"
          v-show="showDiv3"
        >
          <LazyInvite />
        </div>
        <div
          class="w-full h-full flex items-center py-2"
          id="div4"
          v-show="showDiv4"
        >
          <LazyEvent />
        </div>
      </div>
      <div
        class="h-24 py-4 w-full px-3 flex items-center justify-evenly space-x-4"
      >
        <!-- <GameButton /> -->
        <ExchangeButton @click="toggleDiv1" />
        <EarnButton @click="toggleDiv2" />
        <InviteButton @click="toggleDiv3" />
        <EventButton @click="toggleDiv4" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  PhCoins,
  PhMoneyWavy,
  PhSwap,
  PhCircleNotch,
  PhCherries,
} from "@phosphor-icons/vue";
import { ref, watch, onMounted } from "vue";
useHead({
  title: "CherryBot Game",
  meta: [
    {
      name: "description",
      content: "A CherryBot Game",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
});
const { $gsap } = useNuxtApp();
const showDiv1 = ref(true);
const showDiv2 = ref();
const showDiv3 = ref();
const showDiv4 = ref();

function toggleDiv1() {
  showDiv1.value = true;
  showDiv2.value = false;
  showDiv3.value = false;
  showDiv4.value = false;
}

function toggleDiv2() {
  showDiv1.value = false;
  showDiv2.value = true;
  showDiv3.value = false;
  showDiv4.value = false;
}
function toggleDiv3() {
  showDiv1.value = false;
  showDiv2.value = false;
  showDiv3.value = true;
  showDiv4.value = false;
}
function toggleDiv4() {
  showDiv1.value = false;
  showDiv2.value = false;
  showDiv3.value = false;
  showDiv4.value = true;
}
watch([showDiv1, showDiv2, showDiv3, showDiv4], (values) => {
  const [div1Visible, div2Visible, div3Visible, div4Visible] = values;
  const TL = $gsap.timeline();
  if (div1Visible) {
    TL.fromTo(
      "#div1",
      { opacity: 0, y: 40 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      }
    );
  } else if (div2Visible) {
    TL.fromTo(
      "#div2",
      { opacity: 0, y: 40 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      }
    );
  } else if (div3Visible) {
    TL.fromTo(
      "#div3",
      { opacity: 0, y: 40 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      }
    );
  } else if (div4Visible) {
    TL.fromTo(
      "#div4",
      { opacity: 0, y: 40 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      }
    );
  }
});
onMounted(() => {
  const TL = $gsap.timeline();
  TL.to(".LoadingDiv", {
    display: "none",
    delay: 0.5,
  });
  window.addEventListener("load", () => {
    TL.play();
  });
  // $gsap.fromTo(
  //   ".star",
  //   { opacity: -1, duration: 0.4 },
  //   {
  //     yoyo: true,
  //     opacity: 1,
  //     duration: 0.4,
  //     ease: "back.out(1.7)",

  //     repeat: -1,
  //   }
  // );
  // $gsap.fromTo(
  //   ".star2",
  //   { opacity: -1, delay: 0.4, duration: 0.4 },
  //   {
  //     yoyo: true,
  //     opacity: 1,
  //     duration: 0.4,
  //     ease: "back.out(1.7)",
  //     delay: 0.4,
  //     repeat: -1,
  //   }
  // );
  // $gsap.from(".SCards", {
  //   opacity: 0,
  //   x: 80,
  //   stagger: 0.4,
  //   duration: 0.5,
  //   ease: "power4.out",
  //   scrollTrigger: {
  //     trigger: ".SCardsTrigger",
  //     start: "bottom center",
  //     end: "bottom bottom",
  //     toggleActions: "play none none reverse",
  //   },
  // });
  // $gsap.from(".FCards", {
  //   opacity: 0,
  //   y: 80,
  //   duration: 0.9,
  //   stagger: 0.4,

  //   ease: "power4.out",
  //   scrollTrigger: {
  //     trigger: ".FCardsTrigger",
  //     start: "top 70%",
  //     toggleActions: "play none none reverse",
  //   },
  // });
  // $gsap.from(".Cardist", {
  //   opacity: 0,
  //   y: 60,
  //   duration: 1,
  //   ease: "power4.out",
  //   scrollTrigger: {
  //     trigger: ".CardistTrigger",
  //     start: "bottom center",
  //     end: "bottom bottom",
  //     toggleActions: "play none none reverse",
  //   },
  // });
});
</script>

<style>
@font-face {
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
#div1,
#div2 {
  transition: opacity 0.2s;
}
</style>
