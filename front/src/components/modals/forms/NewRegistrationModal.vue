<template>
  <!--begin::Modal - New Address-->
  <div
    class="modal fade"
    ref="newAddressModalRef"
    id="kt_modal_new_address"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Form-->
        <Form
          class="form"
          id="kt_modal_new_address_form"
          @submit="submit"
          :validation-schema="validationSchema"
        >
          <!--begin::Modal header-->
          <div class="modal-header" id="kt_modal_new_address_header">
            <!--begin::Modal title-->
            <h2>{{ translate("registrationForm") }}</h2>
            <!--end::Modal title-->

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
          <!--end::Modal header-->

          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
              class="scroll-y me-n7 pe-7"
              id="kt_modal_new_address_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_new_address_header"
              data-kt-scroll-wrappers="#kt_modal_new_address_scroll"
              data-kt-scroll-offset="300px"
            >
              <!--begin::Input group-->
              <div class="row mb-5">
                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-5 fw-semobold mb-2">
                    {{ translate("UserName") }}
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    type="text"
                    class="form-control form-control-solid"
                    placeholder=""
                    name="firstName"
                    v-model="newAddressData.firstName"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="firstName" />
                    </div>
                  </div>
                  <!--end::Input-->
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--end::Label-->
                  <label class="required fs-5 fw-semobold mb-2">
                    {{ translate("UserSurname") }}
                  </label>
                  <!--end::Label-->

                  <!--end::Input-->
                  <Field
                    type="text"
                    class="form-control form-control-solid"
                    placeholder=""
                    name="lastName"
                    v-model="newAddressData.lastName"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="lastName" />
                    </div>
                  </div>
                  <!--end::Input-->
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->

              <!--begin::Col-->
              <div class="col-md-6 fv-row">
                <label class="required fs-6 fw-semobold mb-2">
                  {{ translate("DateOfBirth") }}
                </label>

                <!--begin::Input-->
                <div class="position-relative align-items-center">
                  <!--begin::Icon-->
                  <div class="symbol symbol-20px me-4 position-absolute ms-4">
                    <span class="symbol-label bg-secondary">
                      <span class="svg-icon">
                        <inline-svg
                          src="media/icons/duotune/general/gen025.svg"
                        />
                      </span>
                    </span>
                  </div>
                  <!--end::Icon-->

                  <!--begin::Datepicker-->
                  <el-form-item prop="dueDate">
                    <el-date-picker
                      v-model="newAddressData.dueDate"
                      placeholder="Select a date"
                      name="dueDate"
                    />
                  </el-form-item>
                  <!--end::Datepicker-->
                </div>
                <!--end::Input-->
              </div>
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="fs-6 fw-semobold mb-2">
                  <span class="required">Email</span>

                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Email address must be active"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="email">
                  <el-input v-model="newAddressData.email" />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--begin::Input group-->
              <div class="row mb-6">
                <!--begin::Label-->
                <label class="col-lg-4 col-form-label fw-semobold fs-6">
                  <span class="required">{{ translate("PhoneNumber") }}</span>
                  <i
                    class="fas fa-exclamation-circle ms-1 fs-7"
                    data-bs-toggle="tooltip"
                    title="Phone number must be active"
                  ></i>
                </label>
                <!--end::Label-->

                <!--begin::Col-->
                <div class="col-lg-8 fv-row">
                  <Field
                    type="tel"
                    class="form-control form-control-solid"
                    placeholder=""
                    name="contactPhone"
                    v-model="newAddressData.contactPhone"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="contactPhone" />
                    </div>
                  </div>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="d-flex flex-column mb-5 fv-row">
                <!--begin::Label-->
                <label class="required fs-5 fw-semobold mb-2"
                  >Address Line 1</label
                >
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  class="form-control form-control-solid"
                  placeholder=""
                  name="address1"
                  v-model="newAddressData.address1"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="address1" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-5 fv-row">
                <!--begin::Label-->
                <label class="required fs-5 fw-semobold mb-2"
                  >Address Line 2</label
                >
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  class="form-control form-control-solid"
                  placeholder=""
                  name="address2"
                  v-model="newAddressData.address2"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="address2" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="d-flex flex-column mb-5 fv-row">
                <!--begin::Label-->
                <label class="fs-5 fw-semobold mb-2">Town</label>
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  class="form-control form-control-solid"
                  placeholder=""
                  name="town"
                  v-model="newAddressData.town"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="town" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="row g-9 mb-5">
                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="fs-5 fw-semobold mb-2">State / Province</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    class="form-control form-control-solid"
                    placeholder=""
                    name="state"
                    v-model="newAddressData.state"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="state" />
                    </div>
                  </div>
                  <!--end::Input-->
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="fs-5 fw-semobold mb-2">Post Code</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    class="form-control form-control-solid"
                    placeholder=""
                    name="postCode"
                    v-model="newAddressData.postCode"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="postCode" />
                    </div>
                  </div>
                  <!--end::Input-->
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="fv-row mb-5">
                <!--begin::Wrapper-->
                <div class="d-flex flex-stack">
                  <!--begin::Label-->
                  <div class="me-5">
                    <!--begin::Label-->
                    <label class="fs-5 fw-semobold"
                      >Use as a billing adderess?</label
                    >
                    <!--end::Label-->

                    <!--begin::Input-->
                    <div class="fs-7 fw-semobold text-gray-400">
                      If you need more info, please check budget planning
                    </div>
                    <!--end::Input-->
                  </div>
                  <!--end::Label-->

                  <!--begin::Switch-->
                  <label
                    class="form-check form-switch form-check-custom form-check-solid"
                  >
                    <!--begin::Input-->
                    <Field
                      class="form-check-input"
                      name="billing"
                      type="checkbox"
                      value="1"
                      checked="checked"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="billing" />
                      </div>
                    </div>
                    <!--end::Input-->

                    <!--begin::Label-->
                    <span class="form-check-label fw-semobold text-gray-400">
                      Yes
                    </span>
                    <!--end::Label-->
                  </label>
                  <!--end::Switch-->
                </div>
                <!--begin::Wrapper-->
              </div>
              <!--end::Input group-->
            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
              type="reset"
              id="kt_modal_new_address_cancel"
              class="btn btn-light me-3"
            >
              Discard
            </button>
            <!--end::Button-->

            <!--begin::Button-->
            <button
              ref="submitButtonRef"
              type="submit"
              id="kt_modal_new_address_submit"
              class="btn btn-primary"
            >
              <span class="indicator-label"> Submit </span>
              <span class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
            <!--end::Button-->
          </div>
          <!--end::Modal footer-->
        </Form>
        <!--end::Form-->
      </div>
    </div>
  </div>
  <!--end::Modal - New Address-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n/index";

interface NewAddressData {
  firstName: string;
  lastName: string;
  country: string;
  dueDate: string;
  email: string;
  contactPhone: string;
  address1: string;
  address2: string;
  town: string;
  state: string;
  postCode: string;
}

export default defineComponent({
  name: "new-address-modal",
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  setup() {
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const newAddressModalRef = ref<null | HTMLElement>(null);

    const newAddressData = ref<NewAddressData>({
      firstName: "",
      lastName: "",
      country: "",
      dueDate: "",
      email: "",
      contactPhone: "",
      address1: "",
      address2: "",
      town: "",
      state: "",
      postCode: "",
    });

    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required().label("First name"),
      lastName: Yup.string().required().label("Last name"),
      country: Yup.string().required().label("Country"),
      dueDate: Yup.string().required().label("Date"),
      email: Yup.string().required().label("email"),
      contactPhone: Yup.string().required().label("contactPhone"),
      address1: Yup.string().required().label("Address Line 1"),
      address2: Yup.string().required().label("Address Line 2"),
      town: Yup.string().required().label("Town"),
      state: Yup.string().required().label("State/Province"),
      postCode: Yup.string().required().label("Post code"),
    });
    const { t, te } = useI18n();
    const route = useRoute();
    const hasActiveChildren = (match) => {
      return route.path.indexOf(match) !== -1;
    };

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    const submit = () => {
      if (!submitButtonRef.value) {
        return;
      }

      //Disable button
      submitButtonRef.value.disabled = true;
      // Activate indicator
      submitButtonRef.value.setAttribute("data-kt-indicator", "on");

      setTimeout(() => {
        if (submitButtonRef.value) {
          submitButtonRef.value.disabled = false;

          submitButtonRef.value?.removeAttribute("data-kt-indicator");
        }

        Swal.fire({
          text: "Form has been successfully submitted!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        }).then(() => {
          hideModal(newAddressModalRef.value);
        });
      }, 2000);
    };

    return {
      newAddressData,
      validationSchema,
      submit,
      submitButtonRef,
      newAddressModalRef,
      hasActiveChildren,
      translate,
    };
  },
});
</script>
