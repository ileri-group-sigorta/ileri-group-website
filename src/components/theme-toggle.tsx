"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 p-1 bg-muted rounded-full">
        <div className="w-8 h-8" />
        <div className="w-8 h-8" />
        <div className="w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 p-1 bg-muted rounded-full">
      <button
        onClick={() => setTheme("light")}
        className={cn(
          "w-8 h-8 flex items-center justify-center rounded-full transition-colors",
          theme === "light"
            ? "bg-white text-amber-500 shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
        title="Açık tema"
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={cn(
          "w-8 h-8 flex items-center justify-center rounded-full transition-colors",
          theme === "dark"
            ? "bg-slate-700 text-blue-400 shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
        title="Koyu tema"
      >
        <Moon className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={cn(
          "w-8 h-8 flex items-center justify-center rounded-full transition-colors",
          theme === "system"
            ? "bg-white dark:bg-slate-700 text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
        title="Sistem teması"
      >
        <Monitor className="h-4 w-4" />
      </button>
    </div>
  );
}

export function ThemeToggleMinimal() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 transition-colors"
      title={resolvedTheme === "dark" ? "Açık temaya geç" : "Koyu temaya geç"}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 text-amber-400" />
      ) : (
        <Moon className="h-4 w-4 text-slate-600" />
      )}
    </button>
  );
}
