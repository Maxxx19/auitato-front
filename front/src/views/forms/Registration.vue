<template>
  <KTModalCard
    title="Форма регистрации"
    description="Нажмите на кнопку ниже чтобы запустить <br/>форму регистрации."
    :image="getIllustrationsPath('19.png')"
    button-text="Открыть форму регистрации"
    modal-id="kt_modal_new_address"
  ></KTModalCard>

  <KTNewRegistrationModal></KTNewRegistrationModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTNewRegistrationModal from "@/components/modals/forms/NewRegistrationModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { getIllustrationsPath } from "@/core/helpers/assets";
import { useI18n } from "vue-i18n/index";

export default defineComponent({
  name: "registration-forms",
  components: {
    KTModalCard,
    KTNewRegistrationModal,
  },
  setup() {
    onMounted(() => {
      const { t, te } = useI18n();
      setCurrentPageBreadcrumbs(t("registrationForm"), [t("forms")]);
    });

    return {
      getIllustrationsPath,
    };
  },
});
</script>
