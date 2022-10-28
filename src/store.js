import { createStore } from "easy-peasy";
import { action } from "easy-peasy";

const store = createStore({
  color: "#f00",
  setColor: action((state, payload) => {
    state.color = payload;
  }),
  animation: 0,
  setAnimation: action((state, payload) => {
    state.animation = payload;
  }),
  symbol: "",
  setSymbol: action((state, payload) => {
    state.symbol = payload;
  }),
  message: "",
  setMessage: action((state, payload) => {
    state.message = payload;
  }),
  size: 0,
  setSize: action((state, payload) => {
    state.size = payload;
  }),
});

export default store;
