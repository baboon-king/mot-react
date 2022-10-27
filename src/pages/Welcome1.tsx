import { NavLink } from "react-router-dom";

export function Welcome1() {
  return (
    <div bg-red>
      welcome1<NavLink to="/welcome/2"> next page</NavLink>
      <div i-ph-anchor-simple-thin />
      <div i-mdi-alarm text-orange-400 />
      <div i-logos-vue text-3xl />
      <button i-carbon-sun dark:i-carbon-moon />
      <div
        i-twemoji-grinning-face-with-smiling-eyes
        hover:i-twemoji-face-with-tears-of-joy
      />
    </div>
  );
}
