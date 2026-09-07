import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

/** Ossature commune à toutes les pages : en-tête, contenu, pied de page. */
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-frost">
      <Header />
      <main id="contenu" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
