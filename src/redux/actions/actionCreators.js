import { createAction } from "@reduxjs/toolkit";
import ACTION_TYPES from "./actionTypes";

export const increment = createAction('increment');

console.log(increment.toString());
console.log(increment.type);

export const decrement = createAction('decrement');

export const changeStep = createAction('changeStep');

// function createActionEx(type) {
//   function actionCreator(payload) {
//     return {
//       type,
//       payload
//     }
//   }

//   actionCreator.toString = () => type;
//   actionCreator.type = type;

//   return actionCreator;
// }


// export function increment() {
//   return {
//     type: ACTION_TYPES.INCREMENT
//   }
// }

// export const decrement = () => {
//   return {
//     type: ACTION_TYPES.DECREMENT
//   }
// }

// export const changeStep = (newStep) => {
//   return {
//     type: ACTION_TYPES.CHANGE_STEP,
//     payload: newStep
//   }
// }

export const createTask = createAction('createTask');
export const deleteTask = createAction('deleteTask');
export const updateTask = createAction('updateTask');

// export const createTask = (taskText) => ({
//   type: ACTION_TYPES.CREATE_TASK,
//   payload: taskText
// });

// export const deleteTask = (id) => ({
//   type: ACTION_TYPES.DELETE_TASK,
//   payload: id
// })
// /**
//  * 
//  * @param {object} updateData 
//  * @param {number} updateData.id 
//  * @param {object} updateData.newValues 
//  * @returns 
//  */
// export const updateTask = ({ id, newValues }) => ({
//   type: ACTION_TYPES.UPDATE_TASK,
//   payload: { id, newValues }
// })