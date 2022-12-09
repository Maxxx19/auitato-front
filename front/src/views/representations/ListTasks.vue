<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
            <inline-svg src="media/icons/duotune/general/gen021.svg" />
          </span>
          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Search Task"
          />
        </div>
        <!--end::Search-->
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          v-if="selectedIds.length === 0"
          class="d-flex justify-content-end"
          data-kt-customer-table-toolbar="base"
        >
          <!--begin::Export-->
          <button
            type="button"
            class="btn btn-light-primary me-3"
            data-bs-toggle="modal"
            data-bs-target="#kt_customers_export_modal"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr078.svg" />
            </span>
            Export
          </button>
          <!--end::Export-->
          <!--begin::Add customer-->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_new_target"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
            </span>
            {{ translate("CreateTask") }}
          </button>
          <!--end::Add customer-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span class="me-2">{{ selectedIds.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewCustomers()"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span
              class="me-2"
              data-kt-customer-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-kt-customer-table-select="delete_selected"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <div class="card-body pt-0">
      <Datatable
        @on-sort="sort"
        @on-items-select="onItemSelect"
        :data="tableData"
        :header="tableHeader"
        :enable-items-per-page-dropdown="true"
        :checkbox-enabled="true"
        checkbox-label="id"
      >
        <template v-slot:name="{ row: tasks }">
          {{ tasks.title }}
        </template>
        <template v-slot:description="{ row: tasks }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ tasks.description }}
          </a>
        </template>
        <template v-slot:budget="{ row: tasks }">
          {{ tasks.budget }}
        </template>
        <template v-slot:status="{ row: tasks }">
          <!-- <img :src="customer.payment.icon" class="w-35px me-3" alt="" />-->
          {{ tasks.status.name }}
        </template>
        <template v-slot:actions="{ row: tasks }">
          <a
            href="#"
            class="btn btn-sm btn-light btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
            >Actions
            <span class="svg-icon svg-icon-5 m-0">
              <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
            </span>
          </a>
          <!--begin::Menu-->
          <div
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primarfw-semobold fs-7 w-125px py-4"
            data-kt-menu="true"
          >
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_new_address"
              >
                <span class="svg-icon svg-icon-2">
                  <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
                </span>
                {{ translate("EditTask") }}
              </button>
              <router-link
                :to="`/apps/representations/chat/private-chat/${tasks.id}`"
                class="btn btn-primary"
                active-class="active"
              >
                {{ translate("AddChat") }}
              </router-link>
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <a @click="deleteCustomer(customer.id)" class="menu-link px-3"
                >Delete</a
              >
            </div>
            <!--end::Menu item-->
          </div>
          <!--end::Menu-->
        </template>
      </Datatable>
    </div>
  </div>

  <ExportCustomerModal></ExportCustomerModal>
  <AddCustomerModal></AddCustomerModal>
  <KTNewTargetModal></KTNewTargetModal>
  <KTNewTargetEditModal
    :titleData="getTask[2].title"
    :categoryData="getTask[2].category.id"
    :descriptionData="getTask[2].description"
    :budgetData="getTask[2].budget"
  >
  </KTNewTargetEditModal>
  <KTNewTargetEditModal
    :titleData="getTask[1].title"
    :categoryData="getTask[1].category.id"
    :descriptionData="getTask[1].description"
    :budgetData="getTask[1].budget"
  >
  </KTNewTargetEditModal>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import { Sort } from "@/components/kt-datatable//table-partials/models";
import ExportCustomerModal from "@/components/modals/forms/ExportCustomerModal.vue";
import AddCustomerModal from "@/components/modals/forms/AddCustomerModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import customers from "@/core/data/customers";
import { ICustomer } from "@/core/data/customers";
import arraySort from "array-sort";
import { useStore } from "vuex";
import KTNewTargetModal from "@/components/modals/forms/NewTargetModal.vue";
import KTNewTargetEditModal from "@/components/modals/forms/NewTargetEditModal.vue";
import { useI18n } from "vue-i18n/index";
import { useRoute } from "vue-router";
import Chat from "@/views/apps/chat/Chat.vue";
import moment from "moment";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "search-task-forms",
  components: {
    Datatable,
    ExportCustomerModal,
    AddCustomerModal,
    KTNewTargetModal,
    KTNewTargetEditModal,
  },
  data: function () {
    return {
      tasks: null,
    };
  },
  computed: {
    getTask() {
      const store = useStore();
      var tasks = store.state.AuthModule.user.tasks;
      return tasks;
    },
  },
  mounted: function () {
    const store = useStore();
    this.tasks = store.state.AuthModule.user.tasks;
    store.dispatch(Actions.ADDCHAT, { task_id: 2 });
    //alert(this.tasks);
  },
  setup() {
    const tableHeader = ref([
      {
        columnName: "Customer Name",
        columnLabel: "name",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "Description",
        columnLabel: "description",
        sortEnabled: true,
        columnWidth: 230,
      },
      {
        columnName: "Budget",
        columnLabel: "budget",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "Status",
        columnLabel: "status",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "Created Date",
        columnLabel: "date",
        sortEnabled: true,
        columnWidth: 225,
      },
      {
        columnName: "Actions",
        columnLabel: "actions",
        sortEnabled: false,
        columnWidth: 135,
      },
    ]);
    const selectedIds = ref<Array<number>>([]);
    const store = useStore();
    const i18n = useI18n();
    const tableData = store.state.AuthModule.user.tasks;
    const initCustomers = [];
    onMounted(() => {
      const { t, te } = useI18n();
      setCurrentPageBreadcrumbs(t("listOfTasks"), [t("forms")]);
      initCustomers.splice(0, tableData.length);
    });
    //.value .value.valuet
    const deleteFewCustomers = () => {
      selectedIds.value.forEach((item) => {
        deleteCustomer(item);
      });
      selectedIds.value.length = 0;
    };

    const deleteCustomer = (id) => {
      for (let i = 0; i < tableData.value.length; i++) {
        if (tableData.value[i].id === id) {
          tableData.value.splice(i, 1);
        }
      }
    };

    const search = ref<string>("");
    const searchItems = () => {
      tableData.value.splice(0, tableData.value.length, ...initCustomers);
      //.value
      if (search.value !== "") {
        let results: Array<ICustomer> = [];
        for (let j = 0; j < tableData.value.length; j++) {
          if (searchingFunc(tableData.value[j], search.value)) {
            results.push(tableData.value[j]);
          }
        }
        tableData.value.splice(0, tableData.value.length, ...results);
      }
    };
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
    const searchingFunc = (obj, value): boolean => {
      for (let key in obj) {
        if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
          if (obj[key].indexOf(value) != -1) {
            return true;
          }
        }
      }
      return false;
    };

    const sort = (sort: Sort) => {
      const reverse: boolean = sort.order === "asc";
      if (sort.label) {
        arraySort(tableData.value, sort.label, { reverse });
      }
    };
    const onItemSelect = (selectedItems: Array<number>) => {
      if (selectedItems.length === 0) {
        selectedIds.value = [];
      } else {
        selectedIds.value = [...selectedIds.value, ...selectedItems];
      }
    };

    return {
      tableData,
      tableHeader,
      deleteCustomer,
      search,
      searchItems,
      selectedIds,
      deleteFewCustomers,
      sort,
      onItemSelect,
      translate,
      hasActiveChildren,
    };
  },
});
</script>
