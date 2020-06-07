import * as types from '../constants/constantsType';

// export const  = () => ({
//   type: types.,
//   payload: ,
// });

export const login = (allData) => ({
  type: types.LOGIN,
  payload: allData,
});

export const signUp = (user) => ({
  type: types.SIGNUP,
  payload: user,
});

export const logOut = (user) => ({
  type: types.LOGOUT,
  payload: user,
});

export const addProject = (project) => ({
  type: types.ADD_PROJECT,
  payload: project,
});

export const deleteProject = (project) => ({
  type: types.DELETE_PROJECT,
  payload: project,
});

export const completeProject = (project) => ({
  type: types.COMPLETE_PROJECT,
  payload: project,
});

export const addCategory = (categorie) => ({
  type: types.ADD_CATEGORY,
  payload: categorie,
});

export const deleteCategory = (categorie) => ({
  type: types.DELETE_CATEGORY,
  payload: categorie,
});

// if statement if currenIds are not the same as state trigger stopTimer
// send info and resert state and start new timer
export const playTimer = (currentIds) => ({
  type: types.PLAY_TIMER,
  // expecting object {  currentProjectId: 0, currentCategoryId: 0 }
  payload: currentIds,
});

// if statement if currenIds are the same as state trigger stopTimer
// send info and resert state
export const stopTimer = (currentIds) => ({
  type: types.STOP_TIMER,
  payload: currentIds,
});

// export const  = () => ({
//   type: types.,
//   payload: ,
// });
