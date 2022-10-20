import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function RedirectToWelcome1() {
  const nav = useNavigate();
  useEffect(() => {
    nav("/welcome/1");
  });
  return null;
}
