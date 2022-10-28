import { createStore } from "easy-peasy";
import { action } from "easy-peasy";

const store = createStore({
  color: "#f00",
  setColor: action((state, payload) => {
    state.color = payload;
  }),
});

export default store;
