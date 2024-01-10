import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Error from './components/Error'
import ReduxToolkit from "./modules/redux-toolkit/ReduxToolkit";
import Calculator from "./modules/calculator/Calculator";
import Comments from "./modules/axios-api/api/Comments";
import Crud from "./modules/axios-api/api/Crud";
import Posts from "./modules/axios-api/api/Posts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DynamicForm from "./modules/dynamic-form/DynamicForm";
import { MiddleWareApi } from "./modules/middleware-api/MiddleWareApi";
import { SimpleCalculatorApp } from "./modules/simple-calculator/SimpleCalculatorApp";
import { Arithmatic } from "./modules/arithmatic_operations/Arithmatic";
function App() {
  const [LoggedInUser, SetLoggedInUser] = useState(
    sessionStorage.getItem("username")
  );

  useEffect(() => {
    const userFromSessionStorage = sessionStorage.getItem("username");
    if (userFromSessionStorage) {
      SetLoggedInUser(userFromSessionStorage);
    }
  }, []);


  return (
    <>
      <Router>
        <Routes>
          {LoggedInUser !== null ? (
            <>
              <Route exact path="/dashboard/projects" element={<Dashboard />} />

              {/* // axios-api  */}
              <Route exact path="/dashboard/projects/crud" element={<Crud />} />
              <Route
                exact
                path="/dashboard/projects/crud/comments/:id"
                element={<Comments />}
              />
              <Route
                exact
                path="/dashboard/projects/crud/posts/:id"
                element={<Posts />}
              />

              {/* // redux-toolkit */}
              <Route
                exact
                path="/dashboard/projects/redux-toolkit"
                element={<ReduxToolkit />}
              />

              {/* // calculator */}
              <Route
                exact
                path="/dashboard/projects/calculator"
                element={<Calculator />}
              />

              {/* // dynamic-form */}
              <Route
                exact
                path="/dashboard/projects/dynamic-form"
                element={<DynamicForm />}
              />

              {/* // middleware-api */}
              <Route
                exact
                path="/dashboard/projects/middleware-api"
                element={<MiddleWareApi />}
              />

              {/* // @tangisha/simple-calculator */}
              <Route
                exact
                path="/dashboard/projects/simple-calculator"
                element={<SimpleCalculatorApp />}
              />

              {/* // @tangisha/simple-calculator */}
              <Route
                exact
                path="/dashboard/projects/arithmetic"
                element={<Arithmatic />}
              />
            </>
          ) : (
            ""
          )}

          <Route
            exact
            path="/login"
            element={<Login SetLoggedInUser={SetLoggedInUser} />}
          />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
