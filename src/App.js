import "./Custom.scss";
import Layout from "./components/layout/Layout";
import { Redirect, Route } from "react-router";
import Login from "./components/login/Login";


function App() {
  const isLoggedIn = true;
  return (
    <>
      <Route exact to="/" component={isLoggedIn ? Layout : Login} />
      { 
      isLoggedIn ? <Redirect to="/dashboard"/> : <Redirect to="/login"/>}
      
    </>
  );
}

export default App;
