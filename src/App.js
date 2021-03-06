import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import Redux from "./playground/Redux";
import Destructuring from "./playground/Destructuring";
import ReduxExpensify from "./playground/ReduxExpensify";
import AdminInfo from "./playground/Hoc";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
      {/* <Destructuring /> */}
      {/* <Redux /> */}
      {/* <ReduxExpensify /> */}
      {/* <AdminInfo
        isAuthenticated={false}
        isAdmin={true}
        info="Sairoden Gandarosa"
      /> */}
    </div>
  );
}

export default App;
