<template>
  <main class="relative flex flex-1 items-center justify-center p-4">
    <video class="absolute h-full w-full" autoplay loop muted>
      <source src="@/assets/video/typingOnlaptop.mp4" type="video/mp4" />
    </video>
    <div id="typewriter" class="text-white">
      <div :blinking="!line2">{{ line1 }}</div>
      <span class="text-red-500" :blinking="line2 && !isComplete">
        {{ line2 }} </span
      ><span v-if="isComplete" blinking="true">.</span>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const msg = "Budi izvrstan u onom što vidiš!$$$######voliš!$$$$+ZAISKRI$$";
const isComplete = ref(false);
const line1 = ref("");
const line2 = ref("");

onMounted(() => {
  let line = line1;
  let i = 0;
  const intervalId = setInterval(() => {
    if (i == msg.length) {
      isComplete.value = true;
      clearInterval(intervalId);
      return;
    }
    const char = msg[i++];
    if (char == "+") line = line2;
    else if (char != "$")
      line.value = char == "#" ? line.value.slice(0, -1) : line.value + char;
  }, 150);
});
</script>

<style scoped>
video {
  object-fit: cover;
}
#typewriter {
  --tw: clamp(0.05rem, 0.25vw, 0.25rem);
  font-size: clamp(1rem, 5vw, 5rem);
  text-shadow: var(--tw) var(--tw) 0 #000;
  z-index: 1;
}
[blinking="true"] {
  border-right: clamp(0.2rem, 1vw, 1rem) solid;
  animation: blinking-caret 750ms step-end infinite;
}
@keyframes blinking-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
}
</style>
