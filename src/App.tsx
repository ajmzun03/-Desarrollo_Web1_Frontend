import { Route, Router } from "wouter"
import Login from "./pages/Login"

export const App = () => {
  return (
    <>
      <Login></Login>
      <Router>
        <Route path="/copac/login" component={Login} />
      </Router>
    </>
  )
}