<template>
  <div id="main">
    <section class="px-[20px] pt-[100px] min-[768px]:pt-[95px] min-[768px]:max-w-[1000px] mx-auto">
      <div class="min-[768px]:hidden mb-[24px]">
        <h1 class="text-[55px] font-[600] tracking-[-2.24px] leading-[1.1] min-[768px]:text-[80px] min-[768px]:text-center">
          {{$t('landing.hero.main_title.line_1')}}
        </h1>
        <div class="flex items-center flex-wrap gap-[8px]">
          <svg-icon name="top" class="inline flex-shrink-0" />
          <h1 class="text-[55px] inline font-[600] tracking-[-2.24px] leading-[1.1] min-[768px]:text-[80px] min-[768px]:text-center">
            {{$t('landing.hero.main_title.line_2')}}
          </h1>
          <svg-icon name="talent" class="inline flex-shrink-0" />
          <h1 class="text-[55px] inline font-[600] tracking-[-2.24px] leading-[1.1] min-[768px]:text-[80px] min-[768px]:text-center">
            {{$t('landing.hero.main_title.line_3')}}
          </h1>
        </div>
        <div class="flex items-center flex-wrap gap-[8px]">
          <h1 class="text-[55px] inline font-[600] tracking-[-2.24px] leading-[1.1] min-[768px]:text-[80px] min-[768px]:text-center">
            {{$t('landing.hero.main_title.line_4')}}
          </h1>
          <svg-icon name="leading" class="inline flex-shrink-0" />
          <h1 class="text-[55px] inline font-[600] tracking-[-2.24px] leading-[1.1] min-[768px]:text-[80px] min-[768px]:text-center">
            {{$t('landing.hero.main_title.line_5')}}
          </h1>
        </div>
        <div class="flex items-center flex-wrap gap-[8px]">
          <svg-icon name="employers" class="inline flex-shrink-0" />
          <h1 class="text-[55px] inline font-[600] tracking-[-2.24px] leading-[1.1] min-[768px]:text-[80px] min-[768px]:text-center">
            {{$t('landing.hero.main_title.line_6')}}
          </h1>
        </div>
      </div>
      <div class="max-[768px]:hidden mb-[32px]">
        <div class="flex justify-center items-center gap-[8px]">
          <h1 class="text-[55px] font-[600] tracking-[-2.24px] leading-[1.1] min-[768px]:text-[80px] min-[768px]:text-center">
            {{$t('landing.hero.main_title.line_1')}}
          </h1>
          <svg-icon name="top" class="inline flex-shrink-0" />
          <h1 class="text-[55px] inline font-[600] tracking-[-2.24px] leading-[1.1] min-[768px]:text-[80px] min-[768px]:text-center">
            {{$t('landing.hero.main_title.line_2')}}
          </h1>
          <svg-icon name="talent" class="inline flex-shrink-0" />
          <h1 class="text-[55px] inline font-[600] tracking-[-2.24px] leading-[1.1] min-[768px]:text-[80px] min-[768px]:text-center">
            {{$t('landing.hero.main_title.line_3')}}
          </h1>
        </div>
        <div class="flex justify-center items-center gap-[8px]">
          <h1 class="text-[55px] inline font-[600] tracking-[-2.24px] leading-[1.1] min-[768px]:text-[80px] min-[768px]:text-center">
            {{$t('landing.hero.main_title.line_4')}}
          </h1>
          <svg-icon name="leading" class="inline flex-shrink-0" />
          <h1 class="text-[55px] inline font-[600] tracking-[-2.24px] leading-[1.1] min-[768px]:text-[80px] min-[768px]:text-center">
            {{$t('landing.hero.main_title.line_5')}}
          </h1>
          <svg-icon name="employers" class="inline flex-shrink-0" />
          <h1 class="text-[55px] inline font-[600] tracking-[-2.24px] leading-[1.1] min-[768px]:text-[80px] min-[768px]:text-center">
            {{$t('landing.hero.main_title.line_6')}}
          </h1>
        </div>
      </div>
      <h2 class="text-[16px] leading-[1.48] opacity-50 mt-[24px] min-[768px]:text-[24px] min-[768px]:text-center max-w-[800px] mx-auto min-[768px]:mt-[32px]">
        {{$t('landing.hero.subtitle')}}
      </h2>
      <div class="flex items-center gap-[16px] mt-[24px] min-[768px]:justify-center min-[768px]:mt-[32px]">
        <base-button @click="openFindTalent">
          {{ $t('header.actions.findTalent') }}
        </base-button>
        <base-button type="inverted" @click="openGetJob">
          {{ $t('header.actions.getJob') }}
        </base-button>
      </div>
    </section>
    <section class="px-[20px] mt-[100px]">
      <span id="expertise" class="relative top-[-120px] h-[1px] inline-block" />
      <h2 class="text-[44px] font-[600] leading-[1.1] tracking-[-1.76px] mb-[8px] min-[768px]:text-[64px] min-[768px]:tracking-[-2.56px] min-[768px]:mb-[16px]">
        {{$t('landing.whom.title')}}
      </h2>
      <p class="text-[30px] font-[300] leading-[1.1] tracking-[-1.2px] opacity-50 mb-[15px] min-[768px]:w-[488px] min-[768px]:text-[40px] min-[768px]:tracking-[-1.6px]">
        {{$t('landing.whom.subtitle')}}
      </p>
      <div id="about1" class="relative min-[768px]:top-[-70px]">
        <span id="about" class="absolute top-[35%] h-[1px] inline-block" />
        <img :src="structureOne" loading="lazy" class="max-[768px]:hidden mx-auto"/>
        <img :src="structureOneMob" loading="lazy" class="min-[768px]:hidden"/>
        <div class="absolute max-[768px]:hidden top-[55vw] left-0">
          <h2 class="text-[44px] font-[600] leading-[1.1] tracking-[-1.76px] mb-[8px] min-[768px]:text-[64px] min-[768px]:tracking-[-2.56px] min-[768px]:mb-[16px]" v-html="$t('landing.whom.different.title')" />
          <p class="text-[30px] font-[300] leading-[1.1] tracking-[-1.2px] opacity-50 mb-[15px] min-[768px]:w-[488px] min-[768px]:text-[40px] min-[768px]:tracking-[-1.6px]" v-html="$t('landing.whom.different.subtitle')" />
        </div>
      </div>
    </section>
    <section class="relative px-[20px] mt-[100px]">
      <span id="how" class="absolute top-[-120px] h-[1px] inline-block" />
      <h2 class="text-[44px] font-[600] leading-[1.1] tracking-[-1.76px] mb-[8px] min-[768px]:text-[64px] min-[768px]:tracking-[-2.56px] min-[768px]:mb-[16px]">
        {{$t('landing.how.title')}}
      </h2>
      <p class="text-[30px] font-[300] leading-[1.1] tracking-[-1.2px] opacity-50 mb-[40px] min-[768px]:w-[692px] min-[768px]:mb-[48px] min-[768px]:text-[40px] min-[768px]:tracking-[-1.6px]">
        {{$t('landing.whom.subtitle')}}
      </p>
      <div class="relative">
        <img :src="structureTwo" class="max-[768px]:hidden"/>
        <img :src="structureTwoMob" class="min-[768px]:hidden"/>
      </div>
    </section>
    <section class="px-[20px] mt-[100px] min-[768px]:mt-[180px]">
      <action-menu class="min-[768px]:max-w-[800px] mx-auto" />
    </section>
    <section class="relative px-[20px] mt-[100px] min-[768px]:mt-[180px]">
      <span id="flexibility" class="absolute top-[-120px] h-[1px] inline-block" />
      <h2 class="text-[44px] font-[600] leading-[1.1] tracking-[-1.76px] mb-[8px] max-w-[590px] min-[768px]:tracking-[-2.56px] min-[768px]:text-[64px]">
        {{ $t('landing.flexibly.title') }}
      </h2>
      <p class="text-[30px] font-[300] leading-[1.1] tracking-[-1.2px] opacity-50 mb-[40px] min-[768px]:text-[40px] min-[768px]:tracking-[-1.6px] min-[768px]:mb-[48px]">
        {{ $t('landing.flexibly.subtitle') }}
      </p>
      <div class="flex max-[768px]:flex-col gap-[24px] min-[768px]:gap-[120px]">
        <div>
          <svg-icon name="recruiter" class="mb-[12px]" />
          <h2 class="text-[16px] font-[700] leading-[1.48] mb-[12px] min-[768px]:text-[18px]">
            {{ $t('landing.flexibly.list.recruiter.title') }}
          </h2>
          <p class="text-[12px] font-[400] leading-[1.48] opacity-50 min-[768px]:text-[16px]">
            {{ $t('landing.flexibly.list.recruiter.text') }}
          </p>
        </div>
        <div>
          <svg-icon name="hr" class="mb-[12px]" />
          <h2 class="text-[16px] font-[700] leading-[1.48] mb-[12px] min-[768px]:text-[18px]">
            {{ $t('landing.flexibly.list.hr.title') }}
          </h2>
          <p class="text-[12px] font-[400] leading-[1.48] opacity-50 min-[768px]:text-[16px]">
            {{ $t('landing.flexibly.list.hr.text') }}
          </p>
        </div>
        <div>
          <svg-icon name="sourcing" class="mb-[12px]" />
          <h2 class="text-[16px] font-[700] leading-[1.48] mb-[12px] min-[768px]:text-[18px]">
            {{ $t('landing.flexibly.list.sourcing.title') }}
          </h2>
          <p class="text-[12px] font-[400] leading-[1.48] opacity-50 min-[768px]:text-[16px]">
            {{ $t('landing.flexibly.list.sourcing.text') }}
          </p>
        </div>
      </div>
    </section>
    <section class="px-[20px] mt-[100px] pb-[100px] min-[768px]:pb-[240px] min-[768px]:mt-[160px]">
      <h2 class="text-[56px] font-[600] tracking-[-2.24px] leading-[1.1] text-center mb-[8px] min-[768px]:text-[80px] min-[768px]:tracking-[-3.2px]">
        {{$t('landing.inTouch.title')}}
      </h2>
      <p class="text-[30px] font-[300] leading-[1.1] tracking-[-1.2px] opacity-50 text-center min-[768px]:max-w-[985px] mx-auto min-[768px]:text-[40px] min-[768px]:tracking-[-1.6px]">
        {{$t('landing.inTouch.subtitle')}}
      </p>
      <div class="flex items-center justify-center gap-[20px] mt-[24px]">
        <base-button @click="openFindTalent">
          {{$t('header.actions.findTalent')}}
        </base-button>
        <base-button type="inverted" @click="openGetJob">
          {{$t('header.actions.getJob')}}
        </base-button>
      </div>
    </section>
  </div>
</template>

<script setup>
import SvgIcon from "@/components/shared/SvgIcon.vue";
import BaseButton from "@/components/ui/base/BaseButton.vue";
import ActionMenu from "@/components/ActionMenu.vue";
import {useModals} from "@/composables/useModals.js";
import {useSwitchLanguage} from "@/composables/useSwitchLanguage.js";
import {computed, onMounted} from "vue";

const { openFindTalent, openGetJob } = useModals();
const { currentLocale } = useSwitchLanguage();

const structureOne = computed(() => {
  return new URL(
      `../../assets/images/structure1_${currentLocale.value}.svg`,
      import.meta.url,
  ).href;
});
const structureOneMob = computed(() => {
  return new URL(
      `../../assets/images/structure1_${currentLocale.value}-mob.svg`,
      import.meta.url,
  ).href;
});
const structureTwo = computed(() => {
  return new URL(
      `../../assets/images/structure2_${currentLocale.value}.svg`,
      import.meta.url,
  ).href;
});
const structureTwoMob = computed(() => {
  return new URL(
      `../../assets/images/structure2_${currentLocale.value}-mob.svg`,
      import.meta.url,
  ).href;
});

</script>
