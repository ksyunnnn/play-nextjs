import { signIn, signOut, useSession } from 'next-auth/client';
import Button from '../components/Button';

const SignInArea = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <div className="grid items-center">Loading...</div>;
  }

  if (!session) {
    return (
      <div>
        <Button
          onClick={() => signIn()}
        >
          Sign in
        </Button>
      </div>
    );
  }
  return (
    <div className="grid gap-4 grid-flow-col items-center">
      <span className="text-sm">
        <span className="text-gray-600 m-2">Signed in as</span>
        {session.user.name}
      </span>
      <Button
        onClick={() => signOut()}
      >
        Sign out
      </Button>
    </div>
  );
};

export default SignInArea;
