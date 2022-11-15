import { useEffect, useState } from "react";

export const useHasReadWelcome = () => {
  const [read, setRead] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("hasReadAD") === "yes") {
      setRead(true);
    } else {
      setRead(false);
    }
    setLoading(false);
  });

  return { read, loading };
};
