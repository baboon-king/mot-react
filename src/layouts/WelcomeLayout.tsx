import { animated, useTransition } from "@react-spring/web";
import { ReactNode } from "react";

import { useLocation, useOutlet } from "react-router-dom";

const outletMap: Record<string, ReactNode> = {};

export function WelcomeLayout() {
  const location = useLocation();

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

  outletMap[location.pathname] = outlet;

  return transitions((style, pathname) => (
    <animated.div style={style} key={pathname}>
      <div
        style={{ textAlign: "center", border: "1px solid", padding: "10px" }}
      >
        {outletMap[pathname]}
      </div>
    </animated.div>
  ));
}
