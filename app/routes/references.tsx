import { Outlet } from "@remix-run/react";

export default function ReferencesRoute() {
  return (
    <section>
      <header>
        <h1>My references </h1>
      </header>
      <main>
        <Outlet />
      </main>
    </section>
  );
}
