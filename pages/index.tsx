import { useSession } from 'next-auth/client';
import Link from 'next/link';
import Layout from '../components/Layout';

const Home = () => {
  const [session, loading] = useSession();
  return (
    <Layout session={session} loading={loading}>
      Home
      {' '}
      {loading ? 'loading' : session?.user.name}
      <div>
        <Link href="/post">Post</Link>
      </div>

    </Layout>
  );
};

export default Home;
