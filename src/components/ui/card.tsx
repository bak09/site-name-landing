export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-stroke bg-card backdrop-blur-xl">
      {children}
    </div>
  );
}
