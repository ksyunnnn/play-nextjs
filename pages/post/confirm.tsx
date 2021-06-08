import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { CSSProperties, useContext, useEffect } from 'react';
import { PostContext } from '../../components/ContextProvider';

const styles: CSSProperties = {
  display: 'grid',
  placeContent: 'center',
  height: '90vh',
};

const Confirm = (props) => {
  console.log({ props });
  const post = useContext(PostContext);
  const router = useRouter();

  useEffect(() => {
    if (post.state.text === '') router.push('/post');
  }, []);

  return (
    <div style={styles}>
      <div>
        <p>{post.state.text}</p>
        <Link href="/post">back</Link>
      </div>
    </div>
  );
};

export default Confirm;
