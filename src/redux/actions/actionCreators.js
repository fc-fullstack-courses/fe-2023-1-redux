import ACTION_TYPES from "./actionTypes";

export function increment() {
  return {
    type: ACTION_TYPES.INCREMENT
  }
}

export const decrement = () => {
  return {
    type: ACTION_TYPES.DECREMENT
  }
}
/**
 * 
 * @param {number} newStep 
 * @returns 
 */
export const changeStep = (newStep) => {
  return {
    type: ACTION_TYPES.CHANGE_STEP,
    payload: newStep
  }
}

export const createTask = (taskText) => ({
  type: ACTION_TYPES.CREATE_TASK,
  payload: taskText
});

export const deleteTask = (id) => ({
  type: ACTION_TYPES.DELETE_TASK,
  payload: id
})
/**
 * 
 * @param {object} updateData 
 * @param {number} updateData.id 
 * @param {object} updateData.newValues 
 * @returns 
 */
export const updateTask = ({id, newValues}) => ({
  type: ACTION_TYPES.UPDATE_TASK,
  payload: { id, newValues }
})