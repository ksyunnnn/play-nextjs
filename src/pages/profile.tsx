import { CSSProperties } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import Layout from '../components/Layout';
import Button from '../components/Button';

const styles: CSSProperties = {
  display: 'grid',
  placeContent: 'center',
  height: '60vh',
};

const Profile = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <div style={styles}>Loading...</div>;
  }

  if (!session) {
    return (
      <Layout title="Profile">
        <div style={styles}>
          <div>
            Not signed in
            <br />
            <Button onClick={() => signIn()}>Sign in</Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Profile">
      <div style={styles}>
        <div>
          <h1>Your Profile. Signed in as</h1>
          <pre>{JSON.stringify(session.user, null, 2)}</pre>
          <br />
          <Button onClick={() => signOut()}>Sign out</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
