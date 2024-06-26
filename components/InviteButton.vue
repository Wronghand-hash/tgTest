<template>
  <button class="gButton1 w-full text-mainWhite">
    <span class="shadow1"></span>
    <span class="edge1"></span>
    <span
      class="front1 font-semibold text-sm flex items-center flex-col justify-center"
    >
      <PhUsersThree class="" weight="fill" :size="25" />
      <span>Invite</span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { PhUsersThree } from "@phosphor-icons/vue";
</script>

<style scoped>
.gButton1 {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  touch-action: manipulation;
}

.shadow1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

.edge1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    #020024 0%,
    #1c046a 8%,
    #1c046a 92%,
    #020024 100%
  );
}

.front1 {
  display: flex;
  position: relative;
  padding: 7px 17px;
  border-radius: 12px;
  background: #3e219e;
  will-change: transform;
  transform: translateY(-10px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

.gButton1:hover {
  filter: brightness(110%);
}

.gButton1:hover .front1 {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.gButton1:active .front1 {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.gButton1:hover .shadow1 {
  transform: translateY(4px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.gButton1:active .shadow1 {
  transform: translateY(1px);
  transition: transform 34ms;
}

.gButton1:focus:not(:focus-visible) {
  outline: none;
}
</style>
