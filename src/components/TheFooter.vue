<template>
 <div class="px-[20px] pb-[20px]">
   <div class="flex items-center gap-[8px] mb-[24px]">
     <svg-icon name="union" class="flex-shrink-0" />
     <p class="text-[16px] font-[400] leading-[1.48]">A Better Career</p>
   </div>
   <div>
     <template v-for="(value, key) of $tm('footer.lines')">
       <i18n-t
           v-if="$te(`footer.lines.${key}`)"
           tag="p"
           :keypath="`footer.lines.${key}`"
           class="text-[12px] font-[400] leading-[1.48] opacity-40"/>
     </template>
   </div>
   <locale-changer class="!text-[#00000080] mt-[24px]" />
   <div class="mt-[24px] flex items-center gap-[16px]">
     <a href="#">
       <svg-icon name="telegram" />
     </a>
     <a href="#">
       <svg-icon name="instagram" />
     </a>
     <a href="#">
       <svg-icon name="linkedin" />
     </a>
   </div>
   <div class="mt-[24px]">
     <p class="inline mr-[20px] text-[12px] opacity-50 font-[400] leading-[1.48]">© 2017—{{ new Date().getFullYear() }} A Better Career OÜ</p>
     <router-link to="/" class="text-[12px] opacity-50 font-[400] leading-[1.48]">
       Privacy policy
     </router-link>
   </div>
 </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import LocaleChanger from "@/components/LocaleChanger.vue";

const router = useRouter();

const openInNewTab = routeName => {
 const routeData = router.resolve({ name: routeName });
 window.open(routeData.href, '_blank');
};
</script>
