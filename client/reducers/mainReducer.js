import * as types from '../constants/constantsType';

const initialState = {
  user: {},
  projects: [],
  categories: [],
  timerActive: [],
  currentProjectName: '',
  currentCategoryName: '',
  currentProjectId: 0,
  currentCategoryId: 0,
  startTimer: 0,
  endTimer: 0,
  lastInterval: 0,
};

const mainReducer = (state = initialState, action) => {
  let user;
  let projects;
  let categories;
  let timerActivity;
  let currentProjectName;
  let currentCategoryName;
  let currentProjectId;
  let currentCategoryId;
  let startTimer;
  let endTimer;
  let lastInterval;

  switch (action.type) {
    case types.LOGIN:
      user = action.payload.user;
      projects = action.payload.projects;
      categories = action.payload.categories;
      timerActivity = action.payload.timerActivity;

      return {
        ...state,
        user,
        projects,
        categories,
        timerActivity,
      };

    case types.SIGNUP:
      user = action.payload.user;

      return {
        ...state,
        user,
      };

    case types.LOGOUT:
      user = {};
      projects = [];
      categories = [];
      timerActive = [];
      currentProjectName = '';
      currentCategoryName = '';
      currentProjectId = 0;
      currentCategoryId = 0;
      startTimer = 0;
      endTimer = 0;
      lastInterval = 0;

      return {
        ...state,
        user,
        projects,
        categories,
        timerActivity,
        currentProjectName,
        currentCategoryName,
        currentProjectId,
        currentCategoryId,
        startTimer,
        endTimer,
        lastInterval,
      };

    case types.ADD_PROJECT:
      user = action.payload.user;
      projects = action.payload.projects;
      categories = action.payload.categories;
      timerActivity = action.payload.timerActivity;

      return {
        ...state,
        user,
        projects,
        categories,
        timerActivity,
      };

    case types.DELETE_PROJECT:
      user = action.payload.user;
      projects = action.payload.projects;
      categories = action.payload.categories;

      return {
        ...state,
        user,
        projects,
        categories,
      };

    case types.COMPLETE_PROJECT:
      user = action.payload.user;
      projects = action.payload.projects;
      categories = action.payload.categories;

      return {
        ...state,
        user,
        projects,
        categories,
      };

    case types.ADD_CATEGORY:
      categories = action.payload.categories;

      return {
        ...state,
        categories,
      };

    case types.DELETE_CATEGORY:
      categories = action.payload.categories;

      return {
        ...state,
        categories,
      };

    case types.PLAY_TIMER:
      startTimer = Date.now();
      currentProjectName = action.payload.currentProjectName;
      currentCategoryName = action.payload.currentCategoryName;
      currentProjectId = action.payload.currentProjectId;
      currentCategoryId = action.payload.currentCategoryId;

      return {
        ...state,
        currentProjectName,
        currentCategoryName,
        currentProjectId,
        currentCategoryId,
        startTimer,
      };

    case types.STOP_TIMER:
      stopTimer = Date.now();
      lastInterval = stopTimer - startTimer;
      timerActivity = state.timerActive.slice();
      timerActivity.push(action.payload.timerActivity);
      startTimer = 0;

      return {
        ...state,
        timerActivity,
        startTimer,
        stopTimer,
        lastInterval,
      };

    default:
      return state;
  }
};

export default mainReducer;
