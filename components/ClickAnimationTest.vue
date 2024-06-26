<template>
  <div
    ref="characterImage"
    @click="handleClick"
    class="w-full h-full flex items-center justify-center"
  >
    <img
      src="../assets/images/MainCircle.webp"
      class="w-96 h-full character-container transition cursor-pointer duration-200 active:brightness-75 transform active:scale-95 md:w-96 lg:w-96 object-contain px-9"
      alt=""
    />
    <div
      v-for="(number, index) in numbers"
      :key="index"
      :class="['number', number.animationClass]"
      :style="number.style"
      class="Batangas text-8xl"
    >
      +2
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { gsap } from "gsap";
import { useNuxtApp } from "#app";

let clickCount = 0;
let lastSentTime = 0;
const numbers = ref([]);
const characterImage = ref(null);

const handleClick = (event) => {
  const containerRect = characterImage.value.getBoundingClientRect();
  const imageRect = characterImage.value.getBoundingClientRect();
  const newNumber = {
    animationClass: "animate-number",
    style: {
      position: "absolute", // Ensure position is absolute
      top: `${event.clientY - imageRect.top}px`,
      left: `${event.clientX - imageRect.left}px`,
      fontSize: "3rem",
    },
  };

  numbers.value.push(newNumber);

  nextTick(() => {
    const element = document.querySelector(
      `.${newNumber.animationClass}:last-child`
    );
    if (element) {
      animateNumber(element);
    }
  });
};

const animateNumber = (element) => {
  element.style.top = element.style.top || "0"; // Set initial top value if not already set

  gsap.to(element.style, {
    top: "-400px",
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    onComplete: () => {
      // Remove the element from the array after animation completes
      numbers.value = numbers.value.filter((num) => num !== element);
    },
  });

  clickCount++;
  const currentTime = Date.now();
  if (currentTime - lastSentTime >= 3000) {
    sendClickCountToServer();
    lastSentTime = currentTime;
  }
};
async function sendClickCountToServer() {
  try {
    // const { $fetch } = useNuxtApp();
    // const response = await $fetch("/api/click-count", {
    //   method: "POST",
    //   body: { count: clickCount },
    // });
    console.log("Click count sent to server:", clickCount);
    clickCount = 0; // Reset the click count
  } catch (error) {
    console.error("Error sending click count to server:", error);
  }
}
</script>

<style scoped>
.character-container {
  position: relative;
  display: inline-block;
}

.number {
  position: absolute;
  color: white;
  font-size: 24px;
  pointer-events: none;
}

.animate-number {
  transition: all 1s ease-out;
}
</style>
