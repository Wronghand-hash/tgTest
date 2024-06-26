<template>
  <form action="" class="container flex items-center justify-center space-x-3">
    <input
      class="input-btn"
      type="radio"
      id="valueIs-1"
      name="valueIs-radio"
      checked=""
      value="valueIs-1"
    />
    <label class="neon-btn px-9 py-2" for="valueIs-1">
      <span class="span"></span>
      <span
        class="txt text-sm font-semibold flex items-center justify-center space-x-1"
      >
        <span> Markets </span>

        <PhMapPinArea size="20" weight="fill" class="text-mainYellow" />
      </span>
    </label>

    <input
      class="input-btn"
      type="radio"
      id="valueIs-2"
      name="valueIs-radio"
      value="valueIs-2"
    />
    <label class="neon-btn px-9 py-2" for="valueIs-2">
      <span class="span"></span>
      <span
        class="txt text-sm font-semibold flex items-center justify-center space-x-1"
      >
        <span> Financial Institutions </span>

        <PhPiggyBank size="20" weight="fill" class="text-mainYellow" />
      </span>
    </label>
  </form>
</template>

<script setup>
import { PhPiggyBank, PhMapPinArea } from "@phosphor-icons/vue";
</script>

<style scoped>
.container {
  font-size: 1.2em;
}

.container input[type="radio"] {
  display: none;
}
/* .input-btn:is(:checked) + .neon-btn .txt {
  color: #090025;
} */

.input-btn:is(:checked) + .neon-btn .span {
  inset: 2px;
  background-color: #1b022e;
  background: repeating-linear-gradient(
      to bottom,
      transparent 0%,
      #9107aa 1px,
      #0514e8 3px,
      #05002d 5px,
      #4090b5 4px,
      transparent 0.5%
    ),
    repeating-linear-gradient(
      to left,
      hsl(295, 60%, 12%) 100%,
      hsl(357, 61%, 12%) 100%
    );
  box-shadow: inset 0 40px 20px hsl(332, 99%, 48%);
}

.input-btn:is(:checked) + .neon-btn::before {
  animation-duration: 0.6s;
}

.input-btn:is(:checked) + .neon-btn::after {
  animation-duration: 0.6s;
}

.neon-btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right;
  background: transparent;
  position: relative;
  overflow: hidden;
  transition: all 2s ease-in-out;
  -webkit-clip-path: polygon(
    6% 0,
    93% 0,
    100% 8%,
    100% 86%,
    90% 89%,
    88% 100%,
    5% 100%,
    0% 85%
  );
  clip-path: polygon(
    6% 0,
    93% 0,
    100% 8%,
    100% 86%,
    90% 89%,
    88% 100%,
    5% 100%,
    0% 85%
  );
}

.neon-btn .span {
  display: flex;
  -webkit-clip-path: polygon(
    6% 0,
    93% 0,
    100% 8%,
    100% 86%,
    90% 89%,
    88% 100%,
    5% 100%,
    0% 85%
  );
  clip-path: polygon(
    6% 0,
    93% 0,
    100% 8%,
    100% 86%,
    90% 89%,
    88% 100%,
    5% 100%,
    0% 85%
  );
  position: absolute;
  inset: 1px;
  background-color: #212121;
  z-index: 1;
}

.neon-btn .txt {
  text-align: right;
  position: relative;
  z-index: 2;
  transition: all ease-in-out 2s linear;
  text-shadow: 0px 0px 1px #4090b5, 0px 0px 1px #9e30a9, 0 0 1px white;
}

.neon-btn::before {
  content: "";
  position: absolute;
  height: 300px;
  aspect-ratio: 1.5/1;
  box-shadow: -17px -19px 20px #9e30a9;
  background-image: conic-gradient(
    #9e30a9,
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    #9e30a9
  );
  animation: rotate 4s linear infinite -2s;
}

.neon-btn::after {
  content: "";
  position: absolute;
  height: 300px;
  aspect-ratio: 1.5/1;
  box-shadow: -17px -19px 10px #4090b5;
  background-image: conic-gradient(
    #4090b5,
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    transparent,
    #4090b5
  );
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes colorchange {
  0% {
    text-shadow: 0px 0px 0px #9e30a9, 0px 0px 0px #4090b5,
      0 0 0px rgba(255, 255, 255, 0.616);
  }

  50% {
    text-shadow: -6px 5px 1px #9e30a9, 5px 11px 1px #4090b5,
      0 0 20px rgba(255, 255, 255, 0.616);
  }

  to {
    text-shadow: 2px 4px 1px #9e30a9, 2px 2px 1px #4090b5,
      0 0 20px rgba(255, 255, 255, 0.616);
  }
}

@keyframes backgroundchange {
  0% {
    background-color: transparent;
  }

  50% {
    background-color: #4090b5;
  }

  to {
    background-color: transparent;
  }
}
</style>
