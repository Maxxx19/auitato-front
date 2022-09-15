import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

export interface User {
  name: string;
  surname: string;
  email: string;
  phone: BigInteger;
  password: string;
  api_token: string;
  FAQ: string;
  task: string;
}

export interface Task {
  targetTitle: string;
  targetDetails: string;
}

export interface Category {
  name: string;
  desctiption: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface UserAuthInfo {
  errors: unknown;
  user: User;
  isAuthenticated: boolean;
}

export interface Data {
  errors: unknown;
  categories: Category;
  faq: FAQ;
}

@Module
export default class AuthModule
  extends VuexModule
  implements UserAuthInfo, Data
{
  errors = {};
  user = {} as User;
  categories = {} as Category;
  faq = {} as FAQ;
  isAuthenticated = !!JwtService.getToken();

  /**
   * Get current user object
   * @returns User
   */
  get currentUser(): User {
    return this.user;
  }

  /**
   * Verify user authentication
   * @returns boolean
   */
  get isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  /**
   * Get authentification errors
   * @returns array
   */
  get getErrors() {
    return this.errors;
  }

  @Mutation
  [Mutations.SET_ERROR](error) {
    this.errors = { ...error };
  }

  @Mutation
  [Mutations.SET_AUTH](user) {
    this.isAuthenticated = true;
    this.user.api_token = user;
    this.errors = {};
    JwtService.saveToken(user.api_token);
  }

  @Mutation
  [Mutations.SET_USER](user) {
    this.user = user;
  }

  @Mutation
  [Mutations.SET_TASK](task) {
    this.user.task = task;
  }

  @Mutation
  [Mutations.SET_TASKS](task) {
    this.user.task = task;
  }

  @Mutation
  [Mutations.SET_FAQ](FAQ) {
    this.faq = FAQ;
  }

  @Mutation
  [Mutations.SET_PASSWORD](password) {
    this.user.password = password;
  }

  @Mutation
  [Mutations.PURGE_AUTH]() {
    this.isAuthenticated = false;
    this.user = {} as User;
    this.errors = [];
    JwtService.destroyToken();
  }

  @Action
  [Actions.LOGIN](credentials) {
    return ApiService.post("login", credentials)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_AUTH, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.GET_USER](credentials) {
    return ApiService.get("profile", credentials)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_USER, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.CREATE_TASK](credentials) {
    return ApiService.post("task", credentials)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_TASK, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.SHOW_TASKS](credentials) {
    return ApiService.get("tasks", credentials)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_TASKS, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.GET_FAQ](credentials) {
    return ApiService.post("main", credentials)
      .then(({ data }) => {
        //alert("data");
        this.context.commit(Mutations.SET_FAQ, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.LOGOUT](credentials) {
    return ApiService.post("logout", credentials)
      .then(({ data }) => {
        this.context.commit(Mutations.PURGE_AUTH);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.REGISTER](credentials) {
    return ApiService.post("register", credentials)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_AUTH, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.FORGOT_PASSWORD](payload) {
    return ApiService.post("forgot_password", payload)
      .then(() => {
        this.context.commit(Mutations.SET_ERROR, {});
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  // @Action
  // [Actions.VERIFY_AUTH](payload) {
  //   if (JwtService.getToken()) {
  //     ApiService.setHeader();
  //     ApiService.post("verify_token", payload)
  //       .then(({ data }) => {
  //         this.context.commit(Mutations.SET_AUTH, data);
  //       })
  //       .catch(({ response }) => {
  //         this.context.commit(Mutations.SET_ERROR, response.data.errors);
  //         this.context.commit(Mutations.PURGE_AUTH);
  //       });
  //   } else {
  //     this.context.commit(Mutations.PURGE_AUTH);
  //   }
  // }
}
