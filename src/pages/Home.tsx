import { useHasReadWelcomesStore } from "../stores/useHasReadWelcomesStore";

export function Home() {
  const { hasReadWelcomes, setHasReadWelcomes } = useHasReadWelcomesStore();

  return (
    <div>
      <span> {hasReadWelcomes ? "true" : "false"}</span>
      <button onClick={() => setHasReadWelcomes(true)}>true</button>
      <button onClick={() => setHasReadWelcomes(false)}>false</button>
    </div>
  );
}
