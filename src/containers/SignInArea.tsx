import { signIn, signOut, useSession } from 'next-auth/client';
import Button from '../components/Button';

const SignInArea = () => {
  const [session, loading] = useSession();

  if (!session) {
    return (
      <div className="grid items-center">
        <Button
          onClick={() => signIn()}
        >
          Sign in
        </Button>
      </div>
    );
  }
  return (
    <div className="grid items-center gap-4 grid-flow-col">
      <span className="text-sm">
        <span className="text-gray-600 m-2">Signed in as</span>
        {session.user.name}
      </span>
      <Button
        onClick={() => signOut()}
        loading={loading}
      >
        Sign out
      </Button>
    </div>
  );
};

export default SignInArea;
