<template>
   <NConfigProvider
      :theme="darkTheme"
      class="flex items-center justify-center h-full w-full"
   >
      <NGlobalStyle></NGlobalStyle>
      <NuxtLoadingIndicator :throttle="200" />
      <div>
         <NuxtRouteAnnouncer />
      </div>
      <NDialogProvider>
         <NuxtLayout>
            <NuxtPage />
         </NuxtLayout>
      </NDialogProvider>
   </NConfigProvider>
</template>

<script lang="ts" setup>
import {
   NConfigProvider,
   NGlobalStyle,
   NDialogProvider,
   darkTheme,
} from "naive-ui";
import "./assets/styles/main.css";
import { useStore } from "@/stores/store";

// Auto save through url
const store = useStore();
const router = useRouter();
const route = useRoute();

function localStorageSet(key: string, value: string) {
   try {
      localStorage.setItem(key, value);
   } catch (error) {
      console.error(error);
   }
}

function localStorageGet(key: string) {
   try {
      return localStorage.getItem(key);
   } catch (error) {
      console.error(error);
   }
}

function pathStartsWithApp() {
   const appPaths = ["/subjects", "/schedules"];

   for (let path of appPaths) {
      if (route.path.startsWith(path)) return true;
   }

   return false;
}

function loadLocalStorageState() {
   if (!pathStartsWithApp()) return;
   let state = localStorageGet("s");
   if (state) {
      try {
         store.fromUrlSafeString(state);
         router.replace({ query: { ...route.query, s: state } });
      } catch (e) {
         console.warn("Error loading state!", e);
      }
   }
}
loadLocalStorageState();

watch(
   store.subjects,
   () => {
      if (!pathStartsWithApp()) return;
      const str = store.toUrlSafeString();
      router.replace({ query: { ...route.query, s: str } });
      localStorageSet("s", str); // update local storage
   },
   { deep: true, immediate: true }
);

watch(
   route,
   (newRoute, oldRoute) => {
      if (!pathStartsWithApp()) return;

      let newState = newRoute.query.s;
      let oldState = oldRoute?.query.s;

      // If the route has no state, load local storage
      if (!oldState && !newState) {
         loadLocalStorageState();
      } else {
         // Only update store when something changed from query state
         if (oldState !== newState) {
            store.fromUrlSafeString(newState as string);
            router.replace({ query: { ...route.query, s: newState } });
         }
      }
   },
   { immediate: true }
);
</script>
