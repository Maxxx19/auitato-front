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
    <!--begin::Form-->
    <Form
      class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
      novalidate="novalidate"
      @submit="onSubmitRegister2"
      id="kt_login_signup_form"
      :validation-schema="registration"
    >
      <!--begin::Input group-->
      <div class="row fv-row mb-7">
        <!--begin::Col-->
        <div class="fv-row mb-7">
          <label class="form-label fw-bold text-dark fs-6 required">
            {{ translate("UserName") }}
          </label>
          <Field
            class="form-control form-control-lg form-control-solid"
            type="text"
            placeholder=""
            name="name"
            autocomplete="off"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="name" />
            </div>
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="fv-row mb-7">
        <label class="form-label fw-bold text-dark fs-6 required">
          {{ translate("PhoneNumber") }}
        </label>
        <Field
          class="form-control form-control-lg form-control-solid"
          type="text"
          placeholder=""
          name="phone"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="phone" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="mb-10 fv-row" data-kt-password-meter="true">
        <!--begin::Wrapper-->
        <div class="mb-1">
          <!--begin::Label-->
          <label class="form-label fw-bold text-dark fs-6 required">
            {{ translate("PhoneNumber") }}
          </label>
          <!--end::Label-->

          <!--begin::Input wrapper-->
          <div class="position-relative mb-3">
            <Field
              class="form-control form-control-lg form-control-solid"
              type="password"
              placeholder=""
              name="password"
              autocomplete="off"
            />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="password" />
              </div>
            </div>
          </div>
          <!--end::Input wrapper-->
          <!--begin::Meter-->
          <div
            class="d-flex align-items-center mb-3"
            data-kt-password-meter-control="highlight"
          >
            <div
              class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
            ></div>
            <div
              class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
            ></div>
            <div
              class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"
            ></div>
            <div
              class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"
            ></div>
          </div>
          <!--end::Meter-->
        </div>
        <!--end::Wrapper-->
        <!--begin::Hint-->
        <div class="text-muted">
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </div>
        <!--end::Hint-->
      </div>
      <!--end::Input group--->

      <!--begin::Input group-->
      <div class="fv-row mb-5">
        <label class="form-label fw-bold text-dark fs-6">
          {{ translate("ContinuePage") }}
        </label>
        <Field
          class="form-control form-control-lg form-control-solid"
          type="password"
          placeholder=""
          name="password_confirmation"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password_confirmation" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

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
        <div class="col-lg-8 fv-row">
          <el-form-item
            prop="title"
            class="form-control form-control-lg form-control-solid"
          >
            <el-input
              v-model="targetData.title"
              placeholder="Enter Target Title"
              name="title"
            ></el-input>
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="password" />
              </div>
            </div>
          </el-form-item>
        </div>
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
      <div class="row mb-6">
        <!--begin::Label-->
        <label class="col-lg-4 col-form-label fw-semobold fs-6">
          <span class="required">{{ translate("SelectCurrency") }}</span>

          <i
            class="fas fa-exclamation-circle ms-1 fs-7"
            data-bs-toggle="tooltip"
            title="Select currency"
          ></i>
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8 fv-row">
          <Field
            as="select"
            name="currency"
            placeholder="Select currency"
            class="form-select form-select-solid form-select-lg fw-semobold"
            v-model="targetData.currency"
          >
            <option
              v-for="currency in this.currencies"
              :key="currency"
              :value="currency.id"
            >
              {{ currency.symbol }}
            </option>
          </Field>
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="currency" />
            </div>
          </div>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->
      <!--begin::Input group-->
      <div class="d-flex flex-column mb-8">
        <label class="fs-6 fw-semobold mb-2">
          {{ translate("TaskDetails") }}
        </label>

        <el-form-item prop="description">
          <el-input
            v-model="targetData.description"
            type="textarea"
            name="description"
            placeholder="Type Task Details"
          />
        </el-form-item>
      </div>
      <!--end::Input group-->
      <div class="d-flex flex-column mb-8 fv-row">
        <!--begin::Label-->
        <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
          <span>{{ translate("BudgetData") }} </span>
        </label>
        <!--end::Label-->
        <el-form-item prop="budget">
          <el-input
            v-model="targetData.budget"
            placeholder="Enter Budget Data"
            type="number"
            name="budget"
          ></el-input>
        </el-form-item>
      </div>
      <!--begin::Actions-->
      <div class="text-center">
        <button
          id="kt_sign_up_submit"
          ref="submitButton"
          type="submit"
          class="btn btn-lg btn-primary"
        >
          <span class="indicator-label"> Submit </span>
          <span class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </div>
      <!--end::Actions-->
    </Form>
    <!--end::Form-->
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
    <!-- <div class="mb-0 fv-row"> -->
    <!--begin::Label-->
    <!-- <label class="d-flex align-items-center form-label mb-5">
        Select Account Plan
        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          data-bs-toggle="tooltip"
          title="Monthly billing will be based on your account plan"
        ></i>
      </label> -->
    <!--end::Label-->

    <!--begin::Options-->
    <!-- <div class="mb-0"> -->
    <!--begin:Option-->
    <!-- <label class="d-flex flex-stack mb-5 cursor-pointer"> -->
    <!--begin:Label-->
    <!-- <span class="d-flex align-items-center me-2"> -->
    <!--begin::Icon-->
    <!-- <span class="symbol symbol-50px me-6">
              <span class="symbol-label">
                <span class="svg-icon svg-icon-1 svg-icon-gray-600">
                  <inline-svg src="media/icons/duotune/finance/fin001.svg" />
                </span>
              </span>
            </span> -->
    <!--end::Icon-->

    <!--begin::Description-->
    <!-- <span class="d-flex flex-column">
              <span class="fw-bold text-gray-800 text-hover-primary fs-5"
                >Company Account</span
              >
              <span class="fs-6 fw-semobold text-gray-400"
                >Use images to enhance your post flow</span
              >
            </span> -->
    <!--end:Description-->
    <!-- </span> -->
    <!--end:Label-->

    <!--begin:Input-->
    <!-- <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              name="accountPlan"
              value="1"
            />
          </span> -->
    <!--end:Input-->
    <!-- </label> -->
    <!--end::Option-->

    <!--begin:Option-->
    <!-- <label class="d-flex flex-stack mb-5 cursor-pointer"> -->
    <!--begin:Label-->
    <!-- <span class="d-flex align-items-center me-2"> -->
    <!--begin::Icon-->
    <!-- <span class="symbol symbol-50px me-6">
              <span class="symbol-label">
                <span class="svg-icon svg-icon-1 svg-icon-gray-600">
                  <inline-svg src="media/icons/duotune/graphs/gra006.svg" />
                </span>
              </span>
            </span> -->
    <!--end::Icon-->

    <!--begin::Description-->
    <!-- <span class="d-flex flex-column">
              <span class="fw-bold text-gray-800 text-hover-primary fs-5"
                >Developer Account</span
              >
              <span class="fs-6 fw-semobold text-gray-400"
                >Use images to your post time</span
              >
            </span> -->
    <!--end:Description-->
    <!-- </span> -->
    <!--end:Label-->

    <!--begin:Input-->
    <!-- <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              checked
              name="accountPlan"
              value="2"
            />
          </span> -->
    <!--end:Input-->
    <!-- </label> -->
    <!--end::Option-->

    <!--begin:Option-->
    <!-- <label class="d-flex flex-stack mb-0 cursor-pointer"> -->
    <!--begin:Label-->
    <!-- <span class="d-flex align-items-center me-2"> -->
    <!--begin::Icon-->
    <!-- <span class="symbol symbol-50px me-6">
              <span class="symbol-label">
                <span class="svg-icon svg-icon-1 svg-icon-gray-600">
                  <inline-svg src="media/icons/duotune/graphs/gra008.svg" />
                </span>
              </span>
            </span> -->
    <!--end::Icon-->

    <!--begin::Description-->
    <!-- <span class="d-flex flex-column">
              <span class="fw-bold text-gray-800 text-hover-primary fs-5"
                >Testing Account</span
              >
              <span class="fs-6 fw-semobold text-gray-400"
                >Use images to enhance time travel rivers</span
              >
            </span> -->
    <!--end:Description-->
    <!-- </span> -->
    <!--end:Label-->

    <!--begin:Input-->
    <!-- <span class="form-check form-check-custom form-check-solid">
            <Field
              class="form-check-input"
              type="radio"
              name="accountPlan"
              value="3"
            />
          </span> -->
    <!--end:Input-->
    <!-- </label> -->
    <!--end::Option-->
    <!-- </div> -->
    <!--end::Options-->
    <!-- </div> -->
    <!--end::Input group-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from "vue";
import { Field, ErrorMessage, Form } from "vee-validate";
import { useI18n } from "vue-i18n/index";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import * as Yup from "yup";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { PasswordMeterComponent } from "@/assets/ts/components";

interface NewAddressData {
  category: string;
  categories: string;
  currency: string;
  currencies: string;
  customer_id: string;
  title: string;
  description: string;
  budget: string;
  name: string;
  phone: string;
  password: string;
  password_confirmation: string;
}

export default defineComponent({
  name: "describe-task",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data: function () {
    return {
      categories: null,
      currencies: null,
    };
  },
  mounted: async function () {
    const store = useStore();
    await store.dispatch(Actions.GET_FAQ);
    this.categories = store.state.AuthModule.faq.categories;
    this.currencies = store.state.AuthModule.faq.currencies;
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
    onMounted(() => {
      nextTick(() => {
        PasswordMeterComponent.bootstrap();
      });
    });
    const formRef = ref<null | HTMLFormElement>(null);
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const store = useStore();
    const router = useRouter();

    const submitButton = ref<HTMLButtonElement | null>(null);
    const registration = Yup.object().shape({
      name: Yup.string().required().label("Name"),
      title: Yup.string().required().label("Task title"),
      category: Yup.string().required().label("Select category"),
      currency: Yup.string().required().label("Select currency"),
      user_role_id: Yup.string().required().label("Select role"),
      phone: Yup.string().min(11).max(12).required().label("Phone"),
      password: Yup.string().required().label("Password"),
      password_confirmation: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .label("Password Confirmation"),
    });
    const targetData = ref<NewAddressData>({
      category: "",
      currency: "",
      categories: store.state.AuthModule.faq.categories,
      currencies: store.state.AuthModule.faq.currencies,
      customer_id: "",
      title: "",
      description: "",
      budget: "",
      name: "",
      phone: "",
      password: "",
      password_confirmation: "",
    });
    const onSubmitRegister2 = async (values) => {
      // Clear existing errors
      store.dispatch(Actions.LOGOUT);

      // eslint-disable-next-line
      submitButton.value!.disabled = true;

      // Activate indicator
      submitButton.value?.setAttribute("data-kt-indicator", "on");

      // Send login request
      await store.dispatch(Actions.MAINREGISTER, values);

      const [errorName] = Object.keys(store.getters.getErrors);
      const error = store.getters.getErrors[errorName];

      if (!error) {
        Swal.fire({
          text: "You have successfully logged in!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          customClass: {
            confirmButton: "btn fw-semobold btn-light-primary",
          },
        }).then(function () {
          // Go to page after successfully login
          //router.push({ name: "sign-in" });
        });
      } else {
        Swal.fire({
          text: error[0],
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        });
      }

      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
      submitButton.value!.disabled = false;
    };
    return {
      //hasActiveChildren,
      registration,
      translate,
      onSubmitRegister2,
      submitButton,
      targetData,
      loading,
      formRef,
      newTargetModalRef,
    };
  },
});
</script>
