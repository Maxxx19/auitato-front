<template>
  <KTModalCard
    title="Пополнить баланс"
    description="Click on the below buttons to launch <br/>a upgrade plan example."
    :image="getIllustrationsPath('8.png')"
    button-text="Пополнение баланса"
    modal-id="kt_modal_upgrade_plan"
  ></KTModalCard>
  <KTUpgradePlanModal></KTUpgradePlanModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTUpgradePlanModal from "@/components/modals/general/UpgradePlanModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { getIllustrationsPath } from "@/core/helpers/assets";
import { useI18n } from "vue-i18n/index";

export default defineComponent({
  name: "replenishment-balance-forms",
  components: {
    KTModalCard,
    KTUpgradePlanModal,
  },
  setup() {
    onMounted(() => {
      const { t, te } = useI18n();
      setCurrentPageBreadcrumbs(t("replenishmentBalanceForm"), [t("forms")]);
    });

    return {
      getIllustrationsPath,
    };
  },
});
</script>
