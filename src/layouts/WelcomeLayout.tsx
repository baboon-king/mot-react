import { animated, useTransition } from "@react-spring/web";
import { ReactNode, useRef } from "react";

import { useLocation, useOutlet } from "react-router-dom";

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

  return transitions((style, pathname) => (
    <animated.div style={style} key={pathname}>
      <div text-center border-1 p-1>
        {outletMap.current[pathname]}
      </div>
    </animated.div>
  ));
}
