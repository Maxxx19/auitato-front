<template>
  <!--begin::Layout-->
  <div class="text-center mb-10">
    <a class="cursor-pointer" @click="goBack">{{ translate("BackSignUp") }}</a>
    <!--begin::Content-->
    <h1 class="mb-10 mb-lg-0">
      {{ this.title }}
    </h1>
    <!--end::Content-->
    <!--begin::Description-->
    <div class="m-10 order-1 order-lg-2">
      {{ this.description }}
    </div>
    <!--end::Description-->
  </div>
  <!--end::Layout-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n/index";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "terms-description",
  data: function () {
    const store = useStore();
    return {
      title: store.state.AuthModule.user.terms.information_description[0].title,
      description:
        store.state.AuthModule.user.terms.information_description[0].text,
    };
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Terms", ["Description"]);
    });
    const { t, te } = useI18n();
    const route = useRoute();
    const router = useRouter();

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    const goBack = () => {
      router.push({ name: "sign-up" });
    };
    const hasActiveChildren = (match) => {
      return route.path.indexOf(match) !== -1;
    };
    return {
      translate,
      hasActiveChildren,
      goBack,
    };
  },
});
</script>
