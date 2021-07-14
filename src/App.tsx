import { Provider } from "react-redux";
import { store } from "./states";
import SearchPage from "./Page/SearchPage";
import "./App.css";
const App = () => {
  return (
    <Provider store={store}>
      <SearchPage />
    </Provider>
  );
};
export default App;
