import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <NavLink to="/">
        <h1>Todo</h1>
      </NavLink>
      <NavLink to="/tasks">create Task</NavLink>
    </>
  );
}
export default Header;
