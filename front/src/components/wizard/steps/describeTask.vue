<template>
  <!--begin::Wrapper-->
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-15">
      <!--begin::Title-->
      <h2 class="fw-bold text-dark">{{ translate("helpToFindExecutor") }}</h2>
      <!--end::Title-->

      <!--begin::Notice-->
      <!-- <div class="text-gray-400 fw-semobold fs-6">
        If you need more info, please check out
        <a href="#" class="link-primary fw-bold">Help Page</a>.
      </div> -->
      <!--end::Notice-->
    </div>
    <!--end::Heading-->

    <!--begin::Input group-->
    <div class="d-flex flex-column mb-8 fv-row">
      <!--begin::Label-->
      <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
        <span class="required">{{ translate("TaskTitle") }} </span>
        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-toggle="tooltip"
          title="Specify a target name for future usage and reference"
        ></i>
      </label>
      <!--end::Label-->

      <el-form-item prop="title">
        <el-input
          v-model="targetData.title"
          placeholder="Enter Target Title"
          name="title"
        ></el-input>
      </el-form-item>
      <el-form-item prop="customer_id">
        <el-input
          v-model="targetData.customer_id"
          placeholder="Enter Target Title"
          name="customer_id"
          type="hidden"
        ></el-input>
      </el-form-item>
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="row mb-6">
      <!--begin::Label-->
      <label class="col-lg-4 col-form-label fw-semobold fs-6">
        <span class="required">{{ translate("SelectCategory") }}</span>

        <i
          class="fas fa-exclamation-circle ms-1 fs-7"
          data-bs-toggle="tooltip"
          title="Select category"
        ></i>
      </label>
      <!--end::Label-->

      <!--begin::Col-->
      <div class="col-lg-8 fv-row">
        <Field
          as="select"
          name="category"
          placeholder="Select category"
          class="form-select form-select-solid form-select-lg fw-semobold"
          v-model="targetData.category"
        >
          <option
            v-for="category in this.categories"
            :key="category"
            :value="category.category_description[0].category_id"
          >
            {{ category.category_description[0].name }}
          </option>
        </Field>
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="category" />
          </div>
        </div>
      </div>
      <!--end::Col-->
    </div>
    <!--end::Input group-->
    <!--begin::Input group-->
    <div class="mb-10 fv-row">
      <!--begin::Label-->
      <!-- <label class="d-flex align-items-center form-label mb-3">
        Specify Team Size
        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-toggle="tooltip"
          title="Provide your team size to help us setup your billing"
        ></i>
      </label> -->
      <!--end::Label-->

      <!--begin::Row-->
      <!-- <div class="row mb-2" data-kt-buttons="true"> -->
      <!--begin::Col-->
      <!-- <div class="col"> -->
      <!--begin::Option-->
      <!-- <Field
            type="radio"
            class="btn-check"
            id="accountTeamSize1"
            name="accountTeamSize"
            value="1-1"
          />
          <label
            class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
            for="accountTeamSize1"
          >
            <span class="fw-bold fs-3">1-1</span>
          </label> -->
      <!--end::Option-->
      <!-- </div> -->
      <!--end::Col-->

      <!--begin::Col-->
      <!-- <div class="col"> -->
      <!--begin::Option-->
      <!-- <Field
            type="radio"
            class="btn-check"
            name="accountTeamSize"
            id="accountTeamSize2"
            value="2-10"
          />
          <label
            class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
            for="accountTeamSize2"
          >
            <span class="fw-bold fs-3">2-10</span>
          </label> -->
      <!--end::Option-->
      <!-- </div> -->
      <!--end::Col-->

      <!--begin::Col-->
      <!-- <div class="col"> -->
      <!--begin::Option-->
      <!-- <Field
            type="radio"
            class="btn-check"
            name="accountTeamSize"
            id="accountTeamSize3"
            value="10-50"
          />
          <label
            class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
            for="accountTeamSize3"
          >
            <span class="fw-bold fs-3">10-50</span>
          </label> -->
      <!--end::Option-->
      <!-- </div> -->
      <!--end::Col-->

      <!--begin::Col-->
      <!-- <div class="col"> -->
      <!--begin::Option-->
      <!-- <Field
            type="radio"
            class="btn-check"
            name="accountTeamSize"
            id="accountTeamSize4"
            checked
            value="50+"
          />
          <label
            class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
            for="accountTeamSize4"
          >
            <span class="fw-bold fs-3">50+</span>
          </label> -->
      <!--end::Option-->
      <!-- </div> -->
      <!--end::Col-->
      <!-- </div> -->
      <!--end::Row-->

      <!--begin::Hint-->
      <!-- <div class="form-text">
      Customers will see this shortened version of your statement descriptor-->
    </div>
    <!--end::Hint-->
    <!-- </div> -->
    <!--end::Input group-->

    <!--begin::Input group-->
    <!-- <div class="mb-10 fv-row"> -->
    <!--begin::Label-->
    <!-- <label class="form-label mb-3">Team Account Name</label> -->
    <!--end::Label-->

    <!--begin::Input-->
    <!-- <Field
      type="text"
      class="form-control form-control-lg form-control-solid"
      name="accountName"
    />
    <ErrorMessage
      name="accountName"
      class="fv-plugins-message-container invalid-feedback"
    ></ErrorMessage> -->
    <!--end::Input-->
    <!-- </div> -->
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="mb-0 fv-row">
      <!--begin::Label-->
      <label class="d-flex align-items-center form-label mb-5">
        Select Account Plan
        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-toggle="tooltip"
          title="Monthly billing will be based on your account plan"
        ></i>
      </label>
      <!--end::Label-->

      <!--begin::Options-->
      <div class="mb-0">
        <!--begin:Option-->
        <label class="d-flex flex-stack mb-5 cursor-pointer">
          <!--begin:Label-->
          <span class="d-flex align-items-center me-2">
            <!--begin::Icon-->
            <span class="symbol symbol-50px me-6">
              <span class="symbol-label">
                <span class="svg-icon svg-icon-1 svg-icon-gray-600">
                  <inline-svg src="media/icons/duotune/finance/fin001.svg" />
                </span>
              </span>
            </span>
            <!--end::Icon-->

            <!--begin::Description-->
            <span class="d-flex flex-column">
              <span class="fw-bold text-gray-800 text-hover-primary fs-5"
                >Company Account</span
              >
              <span class="fs-6 fw-semobold text-gray-400"
                >Use images to enhance your post flow</span
              >
            </span>
            <!--end:Description-->
          </span>
          <!--end:Label-->

          <!--begin:Input-->
          <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              name="accountPlan"
              value="1"
            />
          </span>
          <!--end:Input-->
        </label>
        <!--end::Option-->

        <!--begin:Option-->
        <label class="d-flex flex-stack mb-5 cursor-pointer">
          <!--begin:Label-->
          <span class="d-flex align-items-center me-2">
            <!--begin::Icon-->
            <span class="symbol symbol-50px me-6">
              <span class="symbol-label">
                <span class="svg-icon svg-icon-1 svg-icon-gray-600">
                  <inline-svg src="media/icons/duotune/graphs/gra006.svg" />
                </span>
              </span>
            </span>
            <!--end::Icon-->

            <!--begin::Description-->
            <span class="d-flex flex-column">
              <span class="fw-bold text-gray-800 text-hover-primary fs-5"
                >Developer Account</span
              >
              <span class="fs-6 fw-semobold text-gray-400"
                >Use images to your post time</span
              >
            </span>
            <!--end:Description-->
          </span>
          <!--end:Label-->

          <!--begin:Input-->
          <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              checked
              name="accountPlan"
              value="2"
            />
          </span>
          <!--end:Input-->
        </label>
        <!--end::Option-->

        <!--begin:Option-->
        <label class="d-flex flex-stack mb-0 cursor-pointer">
          <!--begin:Label-->
          <span class="d-flex align-items-center me-2">
            <!--begin::Icon-->
            <span class="symbol symbol-50px me-6">
              <span class="symbol-label">
                <span class="svg-icon svg-icon-1 svg-icon-gray-600">
                  <inline-svg src="media/icons/duotune/graphs/gra008.svg" />
                </span>
              </span>
            </span>
            <!--end::Icon-->

            <!--begin::Description-->
            <span class="d-flex flex-column">
              <span class="fw-bold text-gray-800 text-hover-primary fs-5"
                >Testing Account</span
              >
              <span class="fs-6 fw-semobold text-gray-400"
                >Use images to enhance time travel rivers</span
              >
            </span>
            <!--end:Description-->
          </span>
          <!--end:Label-->

          <!--begin:Input-->
          <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              name="accountPlan"
              value="3"
            />
          </span>
          <!--end:Input-->
        </label>
        <!--end::Option-->
      </div>
      <!--end::Options-->
    </div>
    <!--end::Input group-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Field, ErrorMessage } from "vee-validate";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n/index";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

interface NewAddressData {
  category: string;
  categories: string;
  customer_id: string;
  title: string;
}

export default defineComponent({
  name: "describe-task",
  components: {
    Field,
    ErrorMessage,
  },
  data: function () {
    return {
      categories: null,
    };
  },
  mounted: async function () {
    const store = useStore();
    await store.dispatch(Actions.GET_FAQ);
    this.categories = store.state.AuthModule.faq.categories;
  },
  setup() {
    const { t, te } = useI18n();

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    const formRef = ref<null | HTMLFormElement>(null);
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const store = useStore();

    const targetData = ref<NewAddressData>({
      category: "",
      categories: store.state.AuthModule.faq.categories,
      customer_id: "",
      title: "",
    });
    return {
      //hasActiveChildren,
      translate,
      targetData,
      loading,
      formRef,
      newTargetModalRef,
    };
  },
});
</script>
