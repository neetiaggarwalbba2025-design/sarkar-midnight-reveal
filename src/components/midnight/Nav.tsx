export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-3 px-4 md:px-8">
        <span className="hidden shrink-0 font-display text-[0.7rem] tracking-[0.35em] text-muted-foreground sm:block">
          NEW · 2026
        </span>
        <a
          href="/"
          className="min-w-0 truncate font-display text-xl tracking-[0.42em] text-foreground md:text-2xl"
        >
          SARKAR
        </a>
        <a
          href="#buy"
          className="shrink-0 rounded-none bg-foreground px-4 py-2 font-display text-[0.7rem] tracking-[0.2em] text-background transition-opacity hover:opacity-80"
        >
          BUY NOW
        </a>

      </div>
    </header>
  );
}
