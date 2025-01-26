<template>
   <canvas
      ref="canvasRef"
      class="absolute pointer-events-none left-0 top-0"
   ></canvas>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useDevice } from "~/composables/useDevice";
import { useWindowSize } from "~/composables/useWindowSize";
const canvasRef = ref<HTMLCanvasElement>();
const { width: windowWidth, height: windowHeight } = useWindowSize();
const { isMobile } = useDevice();
const route = useRoute();
const colors = ["#00eaa5", "#ea0056", "#007dea"];

interface Circle {
   x: number;
   y: number;
   vx: number;
   vy: number;
   radius: number;
   color: string;
}

function generateRandom(min: number, max: number) {
   return Math.random() * (max - min) + min;
}

let animateHandle: number | undefined = undefined;

// sync canvas size to window size
watch(
   () => [windowWidth.value, windowHeight.value],
   () => {
      if (canvasRef.value) {
         canvasRef.value.width = windowWidth.value;
         canvasRef.value.height = windowHeight.value;
      }
   },
   { immediate: true }
);

onMounted(() => {
   const canvas = canvasRef.value;
   if (!canvas) return;
   const context = canvas.getContext("2d");
   if (!context) return;
   canvas.width = windowWidth.value;
   canvas.height = windowHeight.value;

   // create circles
   const circles: Circle[] = [];
   const maxSpeed = 0.5;
   for (const color of colors) {
      circles.push({
         x: generateRandom(0, canvas.width),
         y: generateRandom(0, canvas.height),
         vx: generateRandom(-maxSpeed, maxSpeed),
         vy: generateRandom(-maxSpeed, maxSpeed),
         radius: generateRandom(140, 200),
         color,
      });
   }

   let frames = 0;
   const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.globalAlpha = 0.1;
      context.globalCompositeOperation = "soft-light";

      // draw circles
      let index = 0;
      for (let circle of circles) {
         context.save();
         let blur = 150 + Math.sin((frames + index * 100) / 150) * 50;
         context.filter = `blur(${blur}px)`;
         context.beginPath();
         context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
         context.fillStyle = circle.color;
         context.fill();
         context.closePath();
         context.restore();
         index++;
      }

      // update circles
      for (let circle of circles) {
         circle.x += circle.vx;
         circle.y += circle.vy;
         if (circle.x <= 0 || circle.x >= canvas.width) {
            circle.vx = -circle.vx;
         }

         if (circle.y <= 0 || circle.y >= canvas.height) {
            circle.vy = -circle.vy;
         }
      }

      frames++;
      if (!isMobile.value || route.path === "/") {
         animateHandle = requestAnimationFrame(animate);
      }
   };

   animate();
});

onUnmounted(() => {
   if (animateHandle !== undefined) {
      cancelAnimationFrame(animateHandle);
   }
});
</script>

<style scoped></style>
