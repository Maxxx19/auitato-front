<template>
  <!--begin::Modal - New Target-->
  <div
    class="modal fade"
    id="kt_modal_new_target"
    ref="newTargetModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content rounded">
        <!--begin::Modal header-->
        <div class="modal-header pb-0 border-0 justify-content-end">
          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--begin::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
          <!--begin:Form-->
          <el-form
            id="kt_modal_new_target_form"
            @submit.prevent="submit()"
            :model="targetData"
            :rules="rules"
            ref="formRef"
            class="form"
          >
            <!--begin::Heading-->
            <div class="mb-13 text-center">
              <!--begin::Title-->
              <h1 class="mb-3">{{ translate("CreateTask") }}</h1>
              <!--end::Title-->

              <!--begin::Description-->
              <!-- <div class="text-gray-400 fw-semobold fs-5">
                If you need more info, please check
                <a href="#" class="fw-bold link-primary">Project Guidelines</a>.
              </div> -->
              <!--end::Description-->
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
                    v-for="category in targetData.categories"
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
                  name="category"
                  placeholder="Select category"
                  class="form-select form-select-solid form-select-lg fw-semobold"
                  v-model="targetData.currency"
                >
                  <option
                    v-for="currency in targetData.currency"
                    :key="currency"
                    :value="currency"
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
            <!-- <div class="row g-9 mb-8"> -->
            <!--begin::Col-->
            <!-- <div class="col-md-6 fv-row">
                <label class="required fs-6 fw-semobold mb-2">
                  {{ translate("Assign") }}
                </label>

                <el-form-item prop="assign">
                  <el-select
                    v-model="targetData.assign"
                    placeholder="Select a Team Member"
                    name="assign"
                    as="select"
                  >
                    <el-option value="">Select user...</el-option>
                    <el-option label="Karina Clark" value="1"
                      >Karina Clark</el-option
                    >
                    <el-option label="Robert Doe" value="2"
                      >Robert Doe</el-option
                    >
                    <el-option label="Niel Owen" value="3">Niel Owen</el-option>
                    <el-option label="Olivia Wild" value="4"
                      >Olivia Wild</el-option
                    >
                    <el-option label="Sean Bean" value="5">Sean Bean</el-option>
                  </el-select>
                </el-form-item>
              </div> -->
            <!--end::Col-->

            <!--begin::Col-->
            <!-- <div class="col-md-6 fv-row">
                <label class="required fs-6 fw-semobold mb-2">
                  {{ translate("DueDate") }}
                </label> -->

            <!--begin::Input-->
            <!-- <div class="position-relative align-items-center"> -->
            <!--begin::Icon-->
            <!-- <div class="symbol symbol-20px me-4 position-absolute ms-4">
                    <span class="symbol-label bg-secondary">
                      <span class="svg-icon">
                        <inline-svg
                          src="media/icons/duotune/general/gen025.svg"
                        />
                      </span>
                    </span>
                  </div> -->
            <!--end::Icon-->

            <!--begin::Datepicker-->
            <!-- <el-form-item prop="dueDate">
                    <el-date-picker
                      v-model="targetData.dueDate"
                      placeholder="Select a date"
                      name="dueDate"
                    />
                  </el-form-item> -->
            <!--end::Datepicker-->
            <!-- </div> -->
            <!--end::Input-->
            <!-- </div> -->
            <!--end::Col-->
            <!-- </div> -->
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
                <el-input
                  v-model="targetData._method"
                  type="hidden"
                  name="_method"
                ></el-input>
              </el-form-item>
            </div>
            <!--begin::Input group-->
            <div class="d-flex flex-column mb-8 fv-row">
              <!--begin::Label-->
              <!-- <label class="d-flex align-items-center fs-6 fw-semobold mb-2">
                <span class="required">{{ translate("Importance") }}</span>
                <i
                  class="fas fa-exclamation-circle ms-2 fs-7"
                  data-bs-toggle="tooltip"
                  title="Specify a target priorty"
                ></i>
              </label> -->
              <!--end::Label-->

              <!-- <el-form-item prop="tags">
                <el-select
                  v-model="targetData.tags"
                  multiple
                  filterable
                  allow-create
                  default-first-option
                  placeholder="Choose tags for your target"
                >
                  <el-option label="Important" value="important"> </el-option>
                  <el-option label="Urgent" value="urgent"> </el-option>
                  <el-option label="high" value="high"> </el-option>
                  <el-option label="low" value="low"> </el-option>
                  <el-option label="medium" value="medium"> </el-option>
                </el-select>
              </el-form-item> -->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <!-- <div class="d-flex flex-stack mb-8"> -->
            <!--begin::Label-->
            <!-- <div class="me-5">
                <label class="fs-6 fw-semobold"
                  >Adding Users by Team Members</label
                >

                <div class="fs-7 fw-semobold text-gray-400">
                  If you need more info, please check budget planning
                </div>
              </div> -->
            <!--end::Label-->

            <!--begin::Switch-->
            <!-- <label
                class="form-check form-switch form-check-custom form-check-solid"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="1"
                  checked="checked"
                />
                <span class="form-check-label fw-semobold text-gray-400">
                  Allowed
                </span>
              </label> -->
            <!--end::Switch-->
            <!-- </div> -->
            <!--end::Input group-->

            <!--begin::Input group-->
            <!-- <div class="mb-15 fv-row"> -->
            <!--begin::Wrapper-->
            <!-- <div class="d-flex flex-stack"> -->
            <!--begin::Label-->
            <!-- <div class="fw-semobold me-5">
                  <label class="fs-6">{{ translate("Notifications") }}</label>

                  <div class="fs-7 text-gray-400">
                    Allow Notifications by Phone or Email
                  </div>
                </div> -->
            <!--end::Label-->

            <!--begin::Checkboxes-->
            <!-- <div class="d-flex align-items-center"> -->
            <!--begin::Checkbox-->
            <!-- <label
                    class="form-check form-check-custom form-check-solid me-10"
                  >
                    <input
                      class="form-check-input h-20px w-20px"
                      type="checkbox"
                      name="communication[]"
                      value="email"
                      checked="checked"
                    />

                    <span class="form-check-label fw-semobold"> Email </span>
                  </label> -->
            <!--end::Checkbox-->

            <!--begin::Checkbox-->
            <!-- <label class="form-check form-check-custom form-check-solid">
                    <input
                      class="form-check-input h-20px w-20px"
                      type="checkbox"
                      name="communication[]"
                      value="phone"
                    />

                    <span class="form-check-label fw-semobold"> Phone </span>
                  </label> -->
            <!--end::Checkbox-->
            <!-- </div> -->
            <!--end::Checkboxes-->
            <!-- </div> -->
            <!--end::Wrapper-->
            <!-- </div> -->
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="text-center">
              <button
                type="reset"
                id="kt_modal_new_target_cancel"
                class="btn btn-light me-3"
              >
                Cancel
              </button>

              <!--begin::Button-->
              <button
                :data-kt-indicator="loading ? 'on' : null"
                class="btn btn-lg btn-primary"
                type="submit"
              >
                <span v-if="!loading" class="indicator-label">
                  Submit
                  <span class="svg-icon svg-icon-3 ms-2 me-0">
                    <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
                  </span>
                </span>
                <span v-if="loading" class="indicator-progress">
                  Please wait...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
              <!--end::Button-->
            </div>
            <!--end::Actions-->
          </el-form>
          <!--end:Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - New Target-->
</template>

<style lang="scss">
.el-select {
  width: 100%;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useI18n } from "vue-i18n/index";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import { Field } from "vee-validate";
import { useRouter } from "vue-router";

interface NewAddressData {
  title: string;
  description: string;
  customer_id: string;
  budget: string;
  currency_id: string;
  category: string;
  categories: string;
  currency: string;
  _method: string;
}

export default defineComponent({
  name: "new-target-modal",
  components: {
    Field,
  },
  setup() {
    const formRef = ref<null | HTMLFormElement>(null);
    const newTargetModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);
    const store = useStore();
    const router = useRouter();
    const targetData = ref<NewAddressData>({
      title: "",
      description: "",
      customer_id: store.state.AuthModule.user.user.id,
      budget: "",
      currency_id: "1",
      category: "",
      categories: store.state.AuthModule.faq.categories,
      currency: store.state.AuthModule.user.currencies,
      _method: "",
    });

    const { t, te } = useI18n();
    const route = useRoute();

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    const rules = ref({
      title: [
        {
          required: true,
          message: "Please input Title of task",
          trigger: "blur",
        },
      ],
      // assign: [
      //   {
      //     required: true,
      //     message: "Please select Activity zone",
      //     trigger: "change",
      //   },
      // ],
      // tags: [
      //   {
      //     required: true,
      //     message: "Please select Activity zone",
      //     trigger: "change",
      //   },
      // ],
    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate((valid) => {
        if (valid) {
          loading.value = true;

          setTimeout(() => {
            loading.value = false;

            Swal.fire({
              text: "Form has been successfully submitted!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn btn-primary",
              },
            }).then(() => {
              //alert(targetData);
              store.dispatch(Actions.CREATE_TASK, {
                user_id: targetData.value.customer_id,
                title: targetData.value.title,
                category: targetData.value.category,
                description: targetData.value.description,
                currency_id: targetData.value.currency_id,
                budget: targetData.value.budget,
                _metod: "put",
              });
              hideModal(newTargetModalRef.value);
              router.push({ name: "search-task-forms" });
            });
          }, 2000);
        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };

    return {
      targetData,
      submit,
      translate,
      loading,
      formRef,
      rules,
      newTargetModalRef,
    };
  },
});
</script>
