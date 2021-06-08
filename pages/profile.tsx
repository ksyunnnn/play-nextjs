import { CSSProperties } from 'react';

const styles: CSSProperties = {
  display: 'grid',
  placeContent: 'center',
  height: '90vh',
};

const Profile = () => {
  // Fetch the user client-side
  const { user } = {
    user: {
      isLoggedIn: true,
    },
  };

  // Server-render loading state
  if (!user || user.isLoggedIn === false) {
    return <div style={styles}>Loading...</div>;
  }

  return (
    <div style={styles}>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Profile;
