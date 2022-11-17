import { useBearStore } from "../stores/useBearStore";

export function Home() {
  const bear = useBearStore();
  const increase = useBearStore((bear) => bear.increase);

  return (
    <div>
      <span> {bear.bears}</span>
      <button onClick={() => increase(1)}>add</button>
    </div>
  );
}
