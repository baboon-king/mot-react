import { animated, useTransition } from "@react-spring/web";
import { ReactNode, useRef } from "react";

import { Link, useLocation, useOutlet } from "react-router-dom";

const WelcomeLinkMap: Record<string, string> = {
  "/welcome/1": "/welcome/2",
  "/welcome/2": "/welcome/3",
  "/welcome/3": "/welcome/4",
};

export function WelcomeLayout() {
  const location = useLocation();
  const outletMap = useRef<Record<string, ReactNode>>({});

  const transitions = useTransition(location.pathname, {
    from: {
      transform:
        location.pathname === "/welcome/1"
          ? "translateX(0%)"
          : "translateX(100%)",
    },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" },
    config: {
      duration: 500,
    },
  });

  const outlet = useOutlet();

  outletMap.current[location.pathname] = outlet;

  return (
    <div h-screen bg-purple-6 p-5 text-xl text-center text-purple-2>
      <header p-4>
        <div i-fxemoji-peach text-6xl inline-block />
        <h1> 雪梨记账 </h1>
      </header>

      <main bg-white rounded-2 flex-1 flex flex-col>
        <div un-h="15%"></div>
        <div flex-1>
          {transitions((style, pathname) => (
            <animated.div style={style} key={pathname}>
              {outletMap.current[pathname]}
            </animated.div>
          ))}
        </div>
      </main>

      <footer p-4>
        <div flex-row text-end>
          <div w-50vw>
            <Link to={WelcomeLinkMap[location.pathname]}> 下一页 </Link>
          </div>
          <div flex-1>
            <Link to="/welcom/2"> 跳过 </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
