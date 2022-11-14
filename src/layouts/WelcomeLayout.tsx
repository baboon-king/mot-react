import { animated, useTransition } from "@react-spring/web";
import { ReactNode, useEffect, useRef } from "react";

import { Link, useLocation, useNavigate, useOutlet } from "react-router-dom";
import { useSwipe } from "../hooks/useSwipe";

const WelcomeLinkNextMap: Record<string, string> = {
  "/welcome/1": "/welcome/2",
  "/welcome/2": "/welcome/3",
  "/welcome/3": "/welcome/4",
};
const WelcomeLinkPrevMap: Record<string, string> = {
  "/welcome/4": "/welcome/3",
  "/welcome/3": "/welcome/2",
  "/welcome/2": "/welcome/1",
};

export function WelcomeLayout() {
  const location = useLocation();

  const outletMap = useRef<Record<string, ReactNode>>({});

  const mainRef = useRef<HTMLElement>(null);

  const { direction } = useSwipe(mainRef);

  const outlet = useOutlet();

  const nav = useNavigate();

  const first = useRef(true);

  const transitions = useTransition(location.pathname, {
    from: () => {
      const style = {
        transform: first.current ? "translateX(0%)" : "translateX(100%)",
      };

      first.current = false;

      if (direction === "left") {
        style.transform = "translateX(100%)";
      }

      if (direction === "right") {
        style.transform = "translateX(-100%)";
      }

      return style;
    },
    enter: { transform: "translateX(0%)" },
    leave: () => {
      const style = {
        transform: "translateX(-100%)",
      };
      if (direction === "left") {
        style.transform = "translateX(-100%)";
      }
      if (direction === "right") {
        style.transform = "translateX(100%)";
      }

      return style;
    },
    config: {
      duration: 600,
    },
  });
  outletMap.current[location.pathname] = outlet;

  useEffect(() => {
    if (direction === "left") {
      nav(WelcomeLinkNextMap[location.pathname]);
    }
    if (direction === "right") {
      nav(WelcomeLinkPrevMap[location.pathname]);
    }
  }, [direction]);

  return (
    <div h-screen bg-purple-7 p-2 text-xl text-center text-purple-2>
      <header p-6>
        <div i-fxemoji-ghost text-6xl inline-block />
        <h1> 幽灵记账 </h1>
      </header>

      <main flex flex-1 pos-relative text-dark-1 ref={mainRef}>
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
            <Link to={WelcomeLinkNextMap[location.pathname]}> 下一页 </Link>
          </div>
          <div flex-1>
            <Link to="/welcome/1">跳过</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
