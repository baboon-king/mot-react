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
      duration: 600,
    },
  });

  const outlet = useOutlet();

  outletMap.current[location.pathname] = outlet;

  return (
    <div h-screen bg-purple-7 p-2 text-xl text-center text-purple-2>
      <header p-6>
        <div i-fxemoji-ghost text-6xl inline-block />
        <h1> 幽灵记账 </h1>
      </header>

      <main flex flex-1 pos-relative text-dark-1>
        {transitions((style, pathname) => (
          <animated.div
            style={style}
            key={pathname}
            pos-absolute
            w-full
            h-full
            p-2
          >
            <div flex-1 bg-white rounded-2>
              <div un-h="15%"></div>
              {outletMap.current[pathname]}
            </div>
          </animated.div>
        ))}
      </main>

      <footer p-4>
        <div flex-row text-end>
          <div w-50vw>
            <Link to={WelcomeLinkMap[location.pathname]}> 下一页 </Link>
          </div>
          <div flex-1>
            <Link to="/welcome/1">跳过</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
