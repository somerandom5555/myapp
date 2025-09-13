import { auth0 } from "../../lib/auth0";
export default async function ProfilePage() {
  const session = await auth0.getSession();
  if (!session?.user) {
    return (
      <main style={{ padding: 20 }}>
        <p>You are not logged in. <a href="/auth/login">Log in</a></p>
      </main>
    );
  }
  return (
    <main style={{ padding: 20 }}>
      <h1>Profile</h1>
      <pre>{JSON.stringify(session.user, null, 2)}</pre>
      <p><a href="/auth/logout">Log out</a></p>
    </main>
  );
}
