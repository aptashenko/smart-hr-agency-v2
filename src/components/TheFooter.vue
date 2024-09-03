<template>
 <div class="px-[20px] pb-[20px] min-[768px]:px-[100px]">
   <div class="flex items-center gap-[8px] mb-[24px]">
     <svg-icon name="union" class="flex-shrink-0" />
     <p class="text-[16px] font-[400] leading-[1.48]">A Better Career</p>
   </div>
   <div class="flex items-end justify-between">
     <div>
       <div>
         <template v-for="(value, key) of $tm('footer.lines')">
           <i18n-t
               v-if="$te(`footer.lines.${key}`)"
               tag="p"
               :keypath="`footer.lines.${key}`"
               class="text-[12px] font-[400] leading-[1.48] opacity-40"/>
         </template>
       </div>
       <locale-changer class="!text-[#00000080] mt-[24px] min-[768px]:hidden" />
       <div class="mt-[24px] flex items-center gap-[16px] min-[768px]:hidden">
         <a href="https://t.me/smart_hragency" target="_blank">
           <svg-icon name="telegram" />
         </a>
         <a href="https://www.instagram.com/smarthr_agency/" target="_blank">
           <svg-icon name="instagram" />
         </a>
         <a href="https://www.linkedin.com/groups/9823042/" target="_blank">
           <svg-icon name="linkedin" />
         </a>
       </div>
       <div class="mt-[24px]">
         <p class="inline mr-[20px] text-[12px] opacity-50 font-[400] leading-[1.48] min-[768px]:hidden">© 2017—{{ new Date().getFullYear() }} A Better Career OÜ</p>
         <router-link :to="{name: 'privacy'}" target="_blank" class="text-[12px] opacity-50 font-[400] leading-[1.48]">
           {{ $t('legal.privacy.label') }}
         </router-link>
       </div>
     </div>
     <div class="max-[768px]:hidden flex flex-col items-end gap-[24px]">
       <locale-changer class="!text-[#00000080]" dropdown="bottom"  />
       <div class="flex items-center gap-[16px]">
         <a href="https://t.me/smart_hragency" target="_blank">
           <svg-icon name="telegram" />
         </a>
         <a href="https://www.instagram.com/smarthr_agency/" target="_blank">
           <svg-icon name="instagram" />
         </a>
         <a href="https://www.linkedin.com/groups/9823042/" target="_blank">
           <svg-icon name="linkedin" />
         </a>
       </div>
       <p class="inline text-[12px] opacity-50 font-[400] leading-[1.48]">© 2017—{{ new Date().getFullYear() }} A Better Career OÜ</p>
     </div>
   </div>
 </div>
</template>

<script setup>
import LocaleChanger from "@/components/LocaleChanger.vue";

</script>
