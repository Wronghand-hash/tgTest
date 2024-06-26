<template>
  <div class="w-full h-full flex-col flex items-center justify-start px-5">
    <h1
      class="text-2xl p-3 flex flex-col items-center justify-center space-y-3 text-mainWhite"
    >
      <span class=" "> Invite More Friends to Play </span>
      <span>
        <div class="flex items-center justify-center space-x-2">
          <h1 class="Batangas text-6xl">CherryBot</h1>
          <PhCherries class="text-mainRed" size="45" weight="fill" />
        </div>
      </span>
      <span> with You!</span>
    </h1>
    <div
      class="w-full my-7 rounded-md shadow-lg py-6 shadow-mainGreen border border-mainGreen flex items-center justify-center flex-col space-y-3"
    >
      <h1 class="text-xl text-mainWhite font-bold">
        Here is your referral Link
      </h1>
      <div
        class="h-20 w-full flex items-center justify-center bg-gray-900 rounded-md"
      >
        <h2 class="text-mainWhite p-3 bg-gray-800 rounded-sm">
          {{ referralText }}
        </h2>
      </div>
      <div class="w-full items-center justify-center space-x-3 flex">
        <button @click="getReferral" class="Tbutton">Create Referral</button>
        <button @click="copyToClipboard" class="Tbutton2">Copy Me</button>
      </div>

      <UAlert
        v-show="alert"
        icon="i-heroicons-command-line"
        color="primary"
        variant="soft"
        :transition="true"
        title="Copied to clipboard!"
      />
    </div>
    <div class="flex w-full space-y-4 items-start justify-end flex-col">
      <h2>Your Invited friends</h2>
      <div
        class="h-14 w-full shadow-mainGreen border space-x-3 px-2 rounded-md flex items-center justify-start border-mainGreen"
      >
        <div class="h-10 w-10 rounded-full bg-mainGreen"></div>
        <div class="flex flex-col items-center justify-end">
          <h2 class="text-mainWhite font-bold text-sm">Arvin Nikbin</h2>
          <!-- <h2 class="text-mainWhite font-bold text-sm">Arvin Nikbin</h2> -->
        </div>
      </div>
      <div
        class="h-14 w-full shadow-mainGreen border space-x-3 px-2 rounded-md flex items-center justify-start border-mainGreen"
      >
        <div class="h-10 w-10 rounded-full bg-mainGreen"></div>
        <div class="flex flex-col items-center justify-end">
          <h2 class="text-mainWhite font-bold text-sm">Arvin Nikbin</h2>
          <!-- <h2 class="text-mainWhite font-bold text-sm">Arvin Nikbin</h2> -->
        </div>
      </div>
      <div
        class="h-14 w-full shadow-mainGreen border space-x-3 px-2 rounded-md flex items-center justify-start border-mainGreen"
      >
        <div class="h-10 w-10 rounded-full bg-mainGreen"></div>
        <div class="flex flex-col items-center justify-end">
          <h2 class="text-mainWhite font-bold text-sm">Arvin Nikbin</h2>
          <!-- <h2 class="text-mainWhite font-bold text-sm">Arvin Nikbin</h2> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhCherries } from "@phosphor-icons/vue";
import { useClipboard } from "@vueuse/core";
import axios from "axios";

// import { Alert } from "vue-tg";
const { copy } = useClipboard();
const referralText = ref("");
const alert = ref(false);

async function getReferral() {
  try {
    const options = {
      method: "POST",
      url: "http://localhost:3001/referrals/generate",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: { user_id: "2" },
    };

    const response = await axios.request(options);
    referralText.value = response.data.ref_code;
    console.log(response.data.ref_code);
  } catch (error) {
    console.error(error);
  }
}
const copyToClipboard = () => {
  copy(String(referralText.value));
  alert.value = true;
  setInterval(() => {
    alert.value = false;
  }, 2000);
};
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
