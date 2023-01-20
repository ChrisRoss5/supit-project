<script lang="ts">
  import { getImage } from "@/main";
  import { onMount } from "svelte";

  const msg = "Budi izvrstan u onom što vidiš!$$$######voliš!$$$$+ZAISKRI$$";
  const lines = ["", ""];
  let isComplete = false;

  onMount(() => {
    let [i, j] = [0, 0];
    const intervalId = setInterval(() => {
      if (j == msg.length) {
        isComplete = true;
        return clearInterval(intervalId);
      }
      const char = msg[j++];
      if (char == "+") i++;
      else if (char != "$")
        lines[i] = char == "#" ? lines[i].slice(0, -1) : lines[i] + char;
    }, 150);
  });
</script>

<main class="relative flex flex-1 items-center justify-center p-4">
  <video class="absolute h-full w-full object-cover" autoplay loop muted>
    <source src={getImage("typingOnlaptop.mp4", "video")} type="video/mp4" />
  </video>
  <div id="typewriter" class="z-10 text-[clamp(1rem,5vw,5rem)] text-white">
    <div blinking={!lines[1]}>{lines[0]}</div>
    <span class="text-red-500" blinking={!!lines[1] && !isComplete}
      >{lines[1]}</span
    >{#if isComplete}<span blinking={true}>.</span>{/if}
  </div>
</main>
