<template>
  <div>
    <button
      label="Open"
      @click="isOpen = true"
      class="text-sm Tbutton flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-auto justify-center p-3 transition duration-300 ease-in-out border-2 bg-darkPurple border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainPurple hover:text-mainPink text-goldie"
    >
      <span>
        <slot name="title">join CherryBot Group</slot>
      </span>
    </button>
    <UModal v-model="isOpen">
      <div
        class="p-4 w-full flex flex-col items-center justify-center space-y-5 h-dialog"
      >
        <div
          class="w-44 h-44 flex items-center justify-center rounded-full border-2 border-y-blue-800"
        >
          <slot name="icon">
            <PhXLogo
              v-if="!taskDone"
              size="66"
              weight="fill"
              class="text-mainWhite"
            />
            <PhCheckCircle
              v-if="taskDone"
              size="66"
              weight="fill"
              class="text-mainGreen"
            />
          </slot>
        </div>
        <h2 class="text-lg text-center font-bold capitalize mt-2 text-white">
          <slot name="title1">Description for the tasks in here</slot>
        </h2>
        <div class="text-white text-sm">
          <slot name="description">Description for the tasks in here</slot>
        </div>
        <div class="flex items-center justify-center space-x-2">
          <button
            v-if="!taskDone"
            class="text-sm Tbutton flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-auto justify-center p-3 transition duration-300 ease-in-out border-2 bg-darkPurple border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainPurple hover:text-mainPink text-goldie"
          >
            <span>
              <slot name="button">join CherryBot Group</slot>
            </span>
          </button>
          <button
            v-if="!taskDone"
            class="text-sm Tbutton2 flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-auto justify-center p-3 transition duration-300 ease-in-out border-2 bg-darkPurple border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainPurple hover:text-mainPink text-goldie"
          >
            <span>Check</span>
          </button>
          <button
            @click="isOpen = false"
            v-if="taskDone"
            class="text-sm Tbutton3 flex active:text-mainRed active:bg-darkPurple items-center space-x-2 w-auto justify-center p-3 transition duration-300 ease-in-out border-2 bg-darkPurple border-mainViolet rounded-md shadow-md shadow-transparent hover:shadow-mainPurple hover:text-mainPink text-goldie"
          >
            <span>Done</span>
          </button>
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import {
  PhCheckCircle,
  PhDetective,
  PhTelegramLogo,
  PhXLogo,
} from "@phosphor-icons/vue";
const isOpen = ref(false);
const taskDone = ref(false);
</script>
<style></style>
