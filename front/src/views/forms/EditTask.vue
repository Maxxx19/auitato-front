<template>
  <KTModalCard
    title="Редактировать задачу"
    description="Click on the below buttons to launch <br/>a new target example."
    :image="getIllustrationsPath('17.png')"
    button-text="Редактировать задачу"
    modal-id="kt_modal_new_target"
  ></KTModalCard>

  <KTNewTargetModal></KTNewTargetModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import KTNewTargetModal from "@/components/modals/forms/NewTargetModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { getIllustrationsPath } from "@/core/helpers/assets";
import { useI18n } from "vue-i18n/index";

export default defineComponent({
  name: "edit-task-forms",
  components: {
    KTModalCard,
    KTNewTargetModal,
  },
  setup() {
    onMounted(() => {
      const { t, te } = useI18n();
      setCurrentPageBreadcrumbs(t("editTaskForm"), [t("forms")]);
    });

    return {
      getIllustrationsPath,
    };
  },
});
</script>
