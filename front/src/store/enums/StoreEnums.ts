enum Actions {
  // action types
  ADD_BODY_CLASSNAME = "addBodyClassName",
  REMOVE_BODY_CLASSNAME = "removeBodyClassName",
  ADD_BODY_ATTRIBUTE = "addBodyAttribute",
  REMOVE_BODY_ATTRIBUTE = "removeBodyAttribute",
  ADD_CLASSNAME = "addClassName",
  //VERIFY_AUTH = "verifyAuth",
  LOGIN = "login",
  LOGOUT = "logout",
  REGISTER = "register",
  MAINREGISTER = "registerMain",
  GET_USER = "getUser",
  GET_FAQ = "getFAQ",
  UPDATE_USER = "updateUser",
  FORGOT_PASSWORD = "forgotPassword",
  SET_BREADCRUMB_ACTION = "setBreadcrumbAction",
  SET_THEME_MODE_ACTION = "setThemeModeAction",
  GET_CATEGORIES = "getCategories",
  CREATE_TASK = "createTask",
  SHOW_TASKS = "showTasks",
  ADDCHAT = "AddChat",
  SENDNEWMESSAGE = "SendNewMessage",
}

enum Mutations {
  // mutation types
  SET_CLASSNAME_BY_POSITION = "appendBreadcrumb",
  PURGE_AUTH = "logOut",
  SET_AUTH = "setAuth",
  SET_AUTH_MAIN = "setAuthMain",
  SET_USER = "setUser",
  SET_FAQ = "setFAQ",
  SET_PASSWORD = "setPassword",
  SET_ERROR = "setError",
  SET_BREADCRUMB_MUTATION = "setBreadcrumbMutation",
  SET_LAYOUT_CONFIG = "setLayoutConfig",
  RESET_LAYOUT_CONFIG = "resetLayoutConfig",
  OVERRIDE_LAYOUT_CONFIG = "overrideLayoutConfig",
  OVERRIDE_PAGE_LAYOUT_CONFIG = "overridePageLayoutConfig",
  SET_THEME_MODE_MUTATION = "setThemeModeMutation",
  SET_TASK = "setTask",
  SET_TASKS = "setTasks",
  SET_AUTH_TASKS = "setAuthTasks",
  SET_CHAT = "setChat",
}

export { Actions, Mutations };
