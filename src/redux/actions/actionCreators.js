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