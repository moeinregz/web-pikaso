export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative flex h-8 w-8 items-center justify-center">
        <span className="absolute inset-0 shard-sm bg-ink-950 dark:bg-white" />
        <span className="absolute inset-[3px] shard-sm bg-blue-light" style={{ clipPath: "polygon(0% 4%, 96% 0%, 100% 96%, 4% 100%)" }} />
        <span className="absolute inset-[7px] shard-sm bg-white dark:bg-ink-950" />
      </span>
      <span className="font-accent text-lg font-bold tracking-tight">
        Web<span className="text-blue-light">Pikaso</span>
      </span>
    </span>
  );
}
