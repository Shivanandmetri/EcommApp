import { Provider } from "react-redux";
import store from "./store";
import { Counter } from "./features/counter/counter";

const RTKmain = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
export default RTKmain;
