import { NavLink } from "react-router-dom";

export function Welcome1() {
  return (
    <div>
      welcome1<NavLink to="/welcome/2"> next page</NavLink>
    </div>
  );
}
