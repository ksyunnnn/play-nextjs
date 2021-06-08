import { CSSProperties } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

const styles: CSSProperties = {
  display: 'grid',
  placeContent: 'center',
  height: '90vh',
};

const Profile = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <div style={styles}>Loading...</div>;
  }

  if (!session) {
    return (
      <div style={styles}>
        Not signed in
        <br />
        <button type="button" onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }

  return (
    <div style={styles}>
      <h1>Your Profile. Signed in as</h1>
      <pre>{JSON.stringify(session.user, null, 2)}</pre>
      <br />
      <button type="button" onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Profile;
