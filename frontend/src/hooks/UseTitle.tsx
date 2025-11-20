import { useEffect } from "react";

export function useTitle(title: string): void {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} | UPF Ayz`;

    return () => {
      document.title = prevTitle;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
