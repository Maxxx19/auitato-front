import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import { useStore } from "vuex";

export interface User {
  name: string;
  surname: string;
  email: string;
  phone: BigInteger;
  password: string;
  api_token: string;
  FAQ: string;
  task: string;
  tasks: string;
  chat: string;
  responses: string;
  doing: string;
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
    this.user.api_token = user.access_token;
    this.errors = {};
    JwtService.saveToken(user.api_token);
  }

  @Mutation
  [Mutations.SET_AUTH_MAIN](user) {
    this.isAuthenticated = true;
    this.user.api_token = user;
    this.errors = {};
    //console.log(user);
    JwtService.saveToken(user.api_token);
  }

  @Mutation
  [Mutations.SET_AUTH_MAIN2](user) {
    this.isAuthenticated = true;
    this.user.api_token = user[0].api_token;
    this.errors = {};
    //console.log(user);
    JwtService.saveToken(user[0].api_token);
  }
  @Mutation
  [Mutations.SET_AUTH_TASKS](user) {
    this.errors = {};
    JwtService.saveToken(user.user.api_token);
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
  [Mutations.SET_TASKS](tasks) {
    this.user.tasks = tasks;
  }

  @Mutation
  [Mutations.SET_PERFORMER_TASKS](tasks) {
    this.user.tasks = tasks;
  }

  @Mutation
  [Mutations.SET_PERFORMER_RESPONSES](responses) {
    this.user.responses = responses;
  }

  @Mutation
  [Mutations.SET_PERFORMER_DOING](doing) {
    this.user.doing = doing;
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
  [Mutations.SET_CHAT](chat) {
    this.user.chat = chat;
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
    return ApiService.post("api/auth/login", credentials)
      .then(({ data }) => {
        const store = useStore();
        this.context.commit(Mutations.SET_AUTH, data);
        JwtService.saveToken(data.access_token);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.GET_USER](credentials) {
    JwtService.saveToken(credentials[0].api_token);
    ApiService.setHeader();
    //console.log(credentials);
    return ApiService.post("api/profile", credentials)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_AUTH_MAIN, data);
        this.context.commit(Mutations.SET_AUTH_TASKS, data);
        this.context.commit(Mutations.SET_USER, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.GET_USER2](credentials) {
    //JwtService.saveToken(credentials);
    ApiService.setHeader();
    //console.log(credentials);
    return ApiService.post("api/profile", credentials)
      .then(({ data }) => {
        //this.context.commit(Mutations.SET_AUTH_MAIN2, data);
        this.context.commit(Mutations.SET_AUTH_TASKS, data);
        this.context.commit(Mutations.SET_USER, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }
  @Action
  [Actions.CREATE_TASK](credentials) {
    ApiService.setHeader();
    return ApiService.post("api/task", credentials)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_TASK, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.SHOW_TASKS](credentials) {
    ApiService.setHeader();
    return ApiService.post("api/tasks", credentials)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_TASKS, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }
  @Action
  [Actions.SHOW_PERFORMER_TASKS](credentials) {
    console.log(credentials);
    ApiService.setHeader();
    return ApiService.post("/api/tasks/available", credentials)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_PERFORMER_TASKS, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }
  @Action
  [Actions.SHOW_PERFORMER_RESPONSES](credentials) {
    console.log(credentials);
    ApiService.setHeader();
    return ApiService.post("/api/tasks/responsed", credentials)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_PERFORMER_RESPONSES, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }
  @Action
  [Actions.SHOW_PERFORMER_DOING](credentials) {
    //console.log(credentials);
    ApiService.setHeader();
    return ApiService.post("/api/tasks/doing", credentials)
      .then(({ data }) => {
        this.context.commit(Mutations.SET_PERFORMER_DOING, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }
  @Action
  [Actions.GET_FAQ](credentials) {
    ApiService.setHeader();
    return ApiService.post("api/main", credentials)
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
  [Actions.MAINREGISTER](credentials) {
    ApiService.setHeader();
    return ApiService.post("api/main/task", credentials)
      .then(({ data }) => {
        //alert("main");
        this.context.commit(Mutations.SET_AUTH_MAIN2, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.ADDCHAT](credentials) {
    ApiService.setHeader();
    return ApiService.post("api/chat/2", credentials)
      .then(({ data }) => {
        //alert("main");
        this.context.commit(Mutations.SET_CHAT, data);
      })
      .catch(({ response }) => {
        this.context.commit(Mutations.SET_ERROR, response.data.errors);
      });
  }

  @Action
  [Actions.SENDNEWMESSAGE](credentials) {
    ApiService.setHeader();
    return ApiService.post("api/chat/send", credentials)
      .then(({ data }) => {
        //alert("main");
        this.context.commit(Mutations.SET_CHAT, data);
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
