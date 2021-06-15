import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { CSSProperties, useEffect } from 'react';
import { usePostContext } from '../../context/post';
import Layout from '../../components/Layout';

const styles: CSSProperties = {
  display: 'grid',
  placeContent: 'center',
  height: '60vh',
};

const Confirm = (props) => {
  console.log({ props });
  const post = usePostContext();
  const router = useRouter();

  useEffect(() => {
    if (post.state.text === '') router.push('/post');
  }, []);

  return (
    <Layout title="Confirm">
      <div style={styles}>
        <div>
          <p>{post.state.text}</p>
          <Link href="/post">back</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Confirm;
