<template>
  <div
    class="flex border-2 rounded-md border-dashed border-mainPurple flex-col w-full items-center justify-center space-y-3"
  >
    <div
      v-for="task in tasks"
      :key="task.name"
      class="h-20 w-full flex items-center justify-between px-6 rounded-md"
    >
      <div
        class="w-14 h-14 flex items-center bg-gray-800 justify-center rounded-full border-2 border-y-blue-800"
      >
        <component
          :is="task.icon"
          v-if="!task.done"
          size="35"
          weight="fill"
          class="text-mainWhite"
        />
        <PhCheckCircle
          v-if="taskDone"
          size="35"
          weight="fill"
          class="text-mainGreen"
        />
      </div>
      <TaskModal>
        <template #icon>
          <component
            :is="task.icon"
            v-if="!task.done"
            size="77"
            weight="fill"
            class="text-mainWhite"
          />
          <PhCheckCircle
            v-if="task.done"
            size="77"
            weight="fill"
            class="text-mainGreen"
          />
        </template>
        <template #title>
          {{ task.title }}
        </template>
        <template #description>
          {{ task.description }}
        </template>
        <template #title1> {{ task.title1 }} </template
        ><template #button>
          {{ task.button }}
        </template>
      </TaskModal>
    </div>
  </div>
</template>

<script setup>
import {
  PhCheckCircle,
  PhDetective,
  PhTelegramLogo,
  PhXLogo,
} from "@phosphor-icons/vue";
const tasks = [
  {
    title: "Twitter Task",
    description: "Complete the Twitter task to earn rewards.",
    title1: "Discord Group",
    button: "Discord Group",
    done: false,
    icon: PhXLogo,
  },
  {
    title: "Telegram Task",
    description: "Complete the Telegram task to earn rewards.",
    title1: "Group",
    button: "Discord Group",
    icon: PhTelegramLogo,
    done: true,
  },
  {
    title: "Discord Task",
    description: "Complete the Discord task to earn rewards.",
    title1: "Join",
    button: "Discord Group",
    icon: PhDetective,
    done: false,
  },
];
</script>

<style>
.Tbutton3 {
  --border: 5px; /* the border width */
  --slant: 0.7em; /* control the slanted corners */
  --color: #17e760; /* the color */
  color: #101010;

  padding: 0.9em 1.2em;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: linear-gradient(to bottom left, var(--color) 50%, #0000 50.1%) top
      right,
    linear-gradient(to top right, var(--color) 50%, #0000 50.1%) bottom left;
  background-size: 100% 100%;
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
.Tbutton3:focus-visible {
  outline-offset: calc(-1 * var(--border));
  outline: var(--border) solid #000c;
  clip-path: none;
  background-size: 0 0;
}
.Tbutton3:hover,
.Tbutton3:active {
  background-size: calc(var(--slant) + 1.3 * var(--border))
    calc(var(--slant) + 1.3 * var(--border));
  color: #17e760;
  --t: 0.2s 0.1s;
}
.Tbutton3:active {
  --s: #0005;
  transition: none;
}
</style>
