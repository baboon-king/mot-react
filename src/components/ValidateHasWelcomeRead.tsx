import { Navigate } from "react-router-dom";
import { useHasReadWelcome } from "../hooks/useHasReadWelcome";

export const ValidateHasWelcomeRead = () => {
  const { read, loading } = useHasReadWelcome();
  if (loading) {
    return <div>loading</div>;
  }
  if (read) {
    return <Navigate to="/home" />;
  } else {
    return <Navigate to="/welcome/1" />;
  }
};
