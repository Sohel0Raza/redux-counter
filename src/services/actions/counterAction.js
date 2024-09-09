import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstant";

const icrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const derementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounter = () => {
  return {
    type: RESET,
  };
};

export { icrementCounter, derementCounter, resetCounter };
