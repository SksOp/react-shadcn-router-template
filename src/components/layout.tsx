import React from "react";
import { ThemeProvider } from "./theme-provider";
import Navbar from "./navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      {children}
    </ThemeProvider>
  );
}

export default Layout;
