<template class="text-4xl">
  <!-- <div class="container"> -->
  <img
    @click="createPlusOne($event)"
    @touchstart="createPlusOne($event)"
    src="../assets/images/MainCircle.webp"
    class="w-96 container transition cursor-pointer duration-200 active:brightness-75 transform-gpu active:scale-95 md:w-96 z-40 lg:w-96 object-contain px-9"
    alt=""
  />
  <!-- </div> -->
</template>

<script setup>
import { gsap } from "gsap";
// import axios from "axios";
import { useNuxtApp } from "#app";
let clickCount = 0;
let lastSentTime = 0;
const isPressed = ref(false);

function createPlusOne(event) {
  event.preventDefault();

  const touches =
    event.type === "click"
      ? [{ clientX: event.clientX, clientY: event.clientY }]
      : event.touches;

  touches.forEach((touch) => {
    const plusOne = document.createElement("h2");
    plusOne.textContent = "+1";
    plusOne.style.position = "absolute";
    plusOne.style.fontWeight = "black";

    plusOne.style.fontSize = "1.4rem";
    plusOne.style.left = `${touch.clientX}px`;
    plusOne.style.top = `${touch.clientY}px`;
    document.body.appendChild(plusOne);

    gsap.fromTo(
      plusOne,
      { y: 0, opacity: 1 },
      {
        y: -200,
        opacity: 0,
        duration: 2,
        onComplete: () => {
          document.body.removeChild(plusOne);
        },
      }
    );

    // Increment the click count
    clickCount++;

    // Check if it's time to send the count to the server
    const currentTime = Date.now();
    if (currentTime - lastSentTime >= 3000) {
      sendClickCountToServer();
      lastSentTime = currentTime;
    }
  });
}
// async function sendClickCountToServer() {
//   try {
//     const { $fetch } = useNuxtApp();
//     const response = await $fetch("/api/click-count", {
//       method: "POST",
//       body: { count: clickCount },
//     });
//     console.log("Click count sent to server:", response);
//     clickCount = 0; // Reset the click count
//   } catch (error) {
//     console.error("Error sending click count to server:", error);
//   }
// }
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

h2 {
  font-weight: bold;
  color: #ffffff;
  margin: 0;
}

.container.pressed {
  filter: brightness(0.8);
  transform: scale(0.95);
}
</style>
