<template>
  <!--begin::Authentication - Multi-steps-->
  <div
    class="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column"
    ref="wizardRef"
    id="kt_create_account_stepper"
  >
    <!--begin::Aside-->
    <div
      class="d-flex flex-column flex-lg-row-auto w-xl-500px bg-lighten shadow-sm"
    >
      <!--begin::Wrapper-->
      <div
        class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-500px scroll-y"
      >
        <!--begin::Header-->
        <div
          class="d-flex flex-row-fluid flex-column flex-center p-10 pt-lg-20"
        >
          <!--begin::Menu item-->
          <div>
            <router-link to="/sign-in" class="link-primary fw-bold">
              {{ translate("SignIn") }}</router-link
            >
          </div>
          <!--end::Menu item-->
          <!--begin::Logo-->
          <router-link to="/dashboard" class="mb-10 mb-lg-20">
            <img alt="Logo" src="media/logos/default.svg" class="h-40px" />
          </router-link>
          <!--end::Logo-->
          <ul
            class="nav nav-tabs nav-pills flex-row border-0 flex-md-column me-5 mb-3 mb-md-0 fs-6"
          >
            <li class="nav-item me-0 mb-md-2">
              <a
                class="nav-link btn btn-flex btn-active-light-success"
                id="overview"
                @click="(link1 = true), (link2 = false)"
              >
                <span class="svg-icon svg-icon-2 svg-icon-primary me-3">
                  <inline-svg src="media/icons/duotune/general/gen001.svg" />
                </span>
                <span class="d-flex flex-column align-items-start">
                  <span class="fs-4 fw-bolder">
                    {{ translate("CreateTask") }}
                  </span>
                  <span class="fs-7">
                    {{ translate("describeTaskDescription") }}
                  </span>
                </span>
              </a>
            </li>
            <li class="nav-item me-0 mb-md-2">
              <a
                class="nav-link btn btn-flex btn-active-light-info"
                id="aboutcompany"
                @click="(link1 = false), (link2 = true)"
              >
                <span class="svg-icon svg-icon-2 svg-icon-primary">
                  <inline-svg src="media/icons/duotune/general/gen003.svg" />
                </span>
                <span class="d-flex flex-column align-items-start">
                  <span class="fs-4 fw-bolder">
                    {{ translate("chooseTask") }}
                  </span>
                  <span class="fs-7">
                    {{ translate("chooseTaskDescription") }}
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <!--end::Header-->

        <!--begin::Illustration-->
        <div
          class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-150px min-h-lg-300px"
          :style="{ backgroundImage: `url(${getIllustrationsPath('16.png')})` }"
        ></div>
        <!--end::Illustration-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--begin::Aside-->
    <div class="card-body">
      <div
        id="over"
        class="{show : activeTab == 'OVER', hide : activeTab != 'OVER'}"
        v-show="link1"
      >
        <!--begin::Body-->
        <div class="d-flex flex-column flex-lg-row-fluid py-10">
          <!--begin::Content-->
          <div class="d-flex flex-center flex-column flex-column-fluid">
            <!--begin::Wrapper-->
            <div class="w-lg-500px p-10 p-lg-15 mx-auto" id="kt_vtab_pane_4">
              <!--begin::Form-->
              <form
                class="my-auto pb-5"
                novalidate="novalidate"
                id="kt_create_account_form"
                @submit="handleStep"
              >
                <!--begin::Step 1-->
                <div class="current" data-kt-stepper-element="content">
                  <describeTask />
                </div>
                <!--end::Step 1-->

                <!--begin::Step 2-->
                <div class="" data-kt-stepper-element="content">
                  <Step1 />
                </div>
                <!--end::Step 2-->

                <!--begin::Step 3-->
                <div class="" data-kt-stepper-element="content">
                  <Step3 />
                </div>
                <!--end::Step 3-->

                <!--begin::Step 4-->
                <div class="" data-kt-stepper-element="content">
                  <Step4 />
                </div>
                <!--end::Step 4-->

                <!--begin::Step 5-->
                <div class="" data-kt-stepper-element="content">
                  <Step5 />
                </div>
                <!--end::Step 5-->

                <!--begin::Actions-->
                <div class="d-flex flex-stack pt-15">
                  <!--begin::Wrapper-->
                  <div class="mr-2">
                    <button
                      type="button"
                      class="btn btn-lg btn-light-primary me-3"
                      data-kt-stepper-action="previous"
                      @click="previousStep"
                    >
                      <span class="svg-icon svg-icon-4 me-1">
                        <inline-svg
                          src="media/icons/duotune/arrows/arr063.svg"
                        />
                      </span>
                      {{ translate("BackPage") }}
                    </button>
                  </div>
                  <!--end::Wrapper-->

                  <!--begin::Wrapper-->
                  <div>
                    <button
                      type="button"
                      class="btn btn-lg btn-primary me-3"
                      data-kt-stepper-action="submit"
                      @click="formSubmit()"
                    >
                      <!-- v-if="currentStepIndex === totalSteps - 1" -->
                      <span class="indicator-label">
                        Submit
                        <span class="svg-icon svg-icon-3 ms-2 me-0">
                          <inline-svg
                            src="media/icons/duotune/arrows/arr064.svg"
                          />
                        </span>
                      </span>
                      <span class="indicator-progress">
                        Please wait...
                        <span
                          class="spinner-border spinner-border-sm align-middle ms-2"
                        ></span>
                      </span>
                    </button>

                    <!-- <button type="text" class="btn btn-lg btn-primary">
                      {{ translate("ContinuePage") }}
                      <span class="svg-icon svg-icon-4 ms-1 me-0">
                        <inline-svg
                          src="media/icons/duotune/arrows/arr064.svg"
                        />
                      </span>
                    </button> -->
                  </div>
                  <!--end::Wrapper-->
                </div>
                <!--end::Actions-->
              </form>
              <!--end::Form-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Content-->

          <!--begin::Body-->
          <div class="d-flex flex-column flex-lg-row-fluid py-10">
            <!--begin::Content-->
            <div class="d-flex flex-center flex-column flex-column-fluid">
              <ul>
                <h3 class="stepper-title">{{ translate("FAQ") }}</h3>
                <li v-for="(item, index) in items" :key="item.id">
                  <p
                    @click="showProd(item.id)"
                    class="fw-bold text-gray-800 text-hover-primary fs-5 cursor-pointer"
                  >
                    {{ index + 1 }} {{ item.question }}
                  </p>
                  <div
                    ref="dropProd"
                    class="dropProd"
                    :class="{ activate: active_el == 6 }"
                    v-if="value1"
                  >
                    <p>{{ item.answer }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--begin::Footer-->
          <div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
            <!--begin::Links-->
            <div class="d-flex flex-center fw-semobold fs-6">
              <a
                href="#"
                class="text-muted text-hover-primary px-2"
                target="_blank"
                >About</a
              >

              <a
                href="#"
                class="text-muted text-hover-primary px-2"
                target="_blank"
                >Support</a
              >

              <a
                href="#"
                class="text-muted text-hover-primary px-2"
                target="_blank"
                >Purchase</a
              >
            </div>
            <!--end::Links-->
          </div>
          <!--end::Footer-->
        </div>
        <!--end::Body-->
      </div>
      <div
        id="about"
        class="{show : activeTab == 'ABOUT', hide : activeTab != 'ABOUT'}"
        v-show="link2"
      >
        <!--begin::Body-->
        <div class="d-flex flex-column flex-lg-row-fluid py-10">
          <!--begin::Content-->
          <div class="d-flex flex-center flex-column flex-column-fluid">
            <span class="fs-4 fw-bolder">
              {{ translate("chooseTask") }}
            </span>
            <div>
              <ListTasksMain :taskData="tasks[0]" :key="componentKey" />
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="kt_vtab_pane_6" role="tabpanel">...</div>
    </div>
  </div>
  <!--end::Authentication - Multi-steps-->
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  nextTick,
} from "vue";
import { getIllustrationsPath } from "@/core/helpers/assets";
import Step1 from "@/components/wizard/steps/Step1.vue";
import describeTask from "@/components/wizard/steps/describeTask.vue";
import Step3 from "@/components/wizard/steps/Step3.vue";
import Step4 from "@/components/wizard/steps/Step4.vue";
import Step5 from "@/components/wizard/steps/Step5.vue";
import ListTasksMain from "@/views/representations/ListTasksMain.vue";
import { StepperComponent } from "@/assets/ts/components";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import * as Yup from "yup";
import { useForm } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import { useI18n } from "vue-i18n/index";
import { useRoute } from "vue-router";

interface IStep1 {
  accountType: string;
}

interface IdescribeTask {
  accountTeamSize: string;
  accountName: string;
  accountPlan: string;
}

interface IStep3 {
  businessName: string;
  businessDescriptor: string;
  businessType: string;
  businessDescription: string;
  businessEmail: string;
}

interface IStep4 {
  nameOnCard: string;
  cardNumber: string;
  cardExpiryMonth: string;
  cardExpiryYear: string;
  cardCvv: string;
  saveCard: string;
}

interface CreateAccount extends IStep1, IdescribeTask, IStep3, IStep4 {}

export default defineComponent({
  name: "dashboard-order",
  components: {
    Step1,
    describeTask,
    Step3,
    Step4,
    Step5,
    ListTasksMain,
  },
  data: function () {
    const store = useStore();
    return {
      items: null,
      value1: false,
      componentKey: 0,
      tasks: [
        {
          title: "overview",
          description: "Company Overview",
          budget: "1000",
        },
        {
          name: "about",
          displayName: "About us",
        },
      ],
      tabs: [
        {
          name: "overview",
          displayName: "Company Overview",
        },
        {
          name: "about",
          displayName: "About us",
        },
      ],
      activeTabName: "",
      link1: true,
      link2: false,
    };
  },
  methods: {
    showProd() {
      if (!this.value1) {
        this.value1 = true;
      } else {
        this.value1 = false;
      }
      //console.log(this.$refs.dropProd);
    },
    setActiveTabName(name) {
      this.activeTabName = name;
    },
    displayContents(name) {
      return this.activeTabName === name;
    },
    forceRerender() {
      this.componentKey += 1;
    },
  },
  mounted: async function () {
    //alert(this.activeTab);
    const store = useStore();
    //await store.dispatch(Actions.GET_FAQ);
    await store.dispatch(Actions.GET_FAQ);
    store.dispatch(Actions.ADDTERMS);
    this.items = store.state.AuthModule.faq.faq;
    this.tasks = store.state.AuthModule.faq.tasks;
    this.activeTabName = this.tabs[0].name;
    this.forceRerender();
  },
  asyncComputed: {
    resolvedValue: {
      get() {
        const store = useStore();
        var tasks = store.state.AuthModule.faq.tasks;
        return tasks;
      },
    },
  },
  setup() {
    const store = useStore();
    store.dispatch(Actions.GET_FAQ);
    store.dispatch(Actions.ADDTERMS);
    const _stepperObj = ref<StepperComponent | null>(null);
    const wizardRef = ref<HTMLElement | null>(null);
    const currentStepIndex = ref(0);
    const componentKey = ref(0);
    const { t, te } = useI18n();
    const route = useRoute();
    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    const hasActiveChildren = (match) => {
      return route.path.indexOf(match) !== -1;
    };

    const formData = ref<CreateAccount>({
      accountType: "personal",
      accountTeamSize: "50+",
      accountName: "",
      accountPlan: "1",
      businessName: "Keenthemes Inc.",
      businessDescriptor: "KEENTHEMES",
      businessType: "1",
      businessDescription: "",
      businessEmail: "corp@support.com",
      nameOnCard: "Max Doe",
      cardNumber: "4111 1111 1111 1111",
      cardExpiryMonth: "1",
      cardExpiryYear: "2",
      cardCvv: "123",
      saveCard: "1",
    });
    //methodName1();
    onMounted(() => {
      _stepperObj.value = StepperComponent.createInsance(
        wizardRef.value as HTMLElement
      );
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "bg-body");
      setCurrentPageBreadcrumbs("Horizontal", ["Pages", "Wizards"]);
    });

    onUnmounted(() => {
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "bg-body");
    });
    const createAccountSchema = [
      Yup.object({
        accountType: Yup.string().required().label("Account Type"),
      }),
      Yup.object({
        accountName: Yup.string().required().label("Account Name"),
      }),
      Yup.object({
        businessName: Yup.string().required().label("Business Name"),
        businessDescriptor: Yup.string()
          .required()
          .label("Shortened Descriptor"),
        businessType: Yup.string().required().label("Corporation Type"),
        businessEmail: Yup.string().required().label("Contact Email"),
      }),
      Yup.object({
        nameOnCard: Yup.string().required().label("Name On Card"),
        cardNumber: Yup.string().required().label("Card Number"),
        cardExpiryMonth: Yup.string().required().label("Expiration Month"),
        cardExpiryYear: Yup.string().required().label("Expiration Year"),
        cardCvv: Yup.string().required().label("CVV"),
      }),
    ];

    const currentSchema = computed(() => {
      return createAccountSchema[currentStepIndex.value];
    });

    const { resetForm, handleSubmit } = useForm<
      IdescribeTask | IStep1 | IStep3 | IStep4
    >({
      validationSchema: currentSchema,
    });

    const totalSteps = computed(() => {
      if (!_stepperObj.value) {
        return;
      }

      return _stepperObj.value.totatStepsNumber;
    });

    resetForm({
      values: {
        ...formData.value,
      },
    });

    const handleStep = handleSubmit((values) => {
      formData.value = {
        ...formData.value,
        ...values,
      };

      currentStepIndex.value++;

      if (!_stepperObj.value) {
        return;
      }

      _stepperObj.value.goNext();
    });

    const previousStep = () => {
      if (!_stepperObj.value) {
        return;
      }

      currentStepIndex.value--;

      _stepperObj.value.goPrev();
    };

    const formSubmit = () => {
      Swal.fire({
        text: "All is cool! Now you submit this form",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Ok, got it!",
        customClass: {
          confirmButton: "btn fw-semobold btn-light-primary",
        },
      }).then(() => {
        window.location.reload();
      });
    };
    return {
      wizardRef,
      previousStep,
      handleStep,
      formSubmit,
      totalSteps,
      currentStepIndex,
      getIllustrationsPath,
      translate,
    };
  },
});
</script>
