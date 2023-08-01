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