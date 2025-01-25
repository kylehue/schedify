<template>
   <div class="absolute w-screen h-screen top-0 left-0 pointer-events-none z-0">
      <div class="circle circle-0"></div>
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
   </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
   const circles: HTMLDivElement[] = Array.from(
      document.querySelectorAll(".circle")
   );
   const screenWidth = window.innerWidth;
   const screenHeight = window.innerHeight;

   function randomSize() {
      return Math.random() * 200 + 100;
   }

   function randomDirection() {
      return {
         x: Math.random() * 2 - 1,
         y: Math.random() * 2 - 1,
      };
   }

   const circleData = Array.from(circles).map((circle) => ({
      element: circle,
      x: Math.random() * screenWidth,
      y: Math.random() * screenHeight,
      size: randomSize(),
      direction: randomDirection(),
   }));

   function animateCircles() {
      circleData.forEach((data) => {
         data.x += data.direction.x * 0.5;
         data.y += data.direction.y * 0.5;

         if (data.x < 0 || data.x > screenWidth) data.direction.x *= -1;
         if (data.y < 0 || data.y > screenHeight) data.direction.y *= -1;

         data.element.style.left = `${data.x}px`;
         data.element.style.top = `${data.y}px`;
         data.element.style.width = `${data.size}px`;
         data.element.style.height = `${data.size}px`;
      });

      requestAnimationFrame(animateCircles);
   }

   animateCircles();
});
</script>

<style scoped>
.circle {
   border-radius: 100%;
   position: absolute;
   mix-blend-mode: lighten;
   filter: blur(130px);
   transition: all 1000ms ease-in-out;
   pointer-events: none;
}

.circle-0 {
   background-color: #00eaa5;
   opacity: 0.3;
}

.circle-1 {
   background-color: #ea0056;
   opacity: 0.3;
}

.circle-2 {
   background-color: #007dea;
   opacity: 0.2;
}
</style>
