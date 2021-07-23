import {
  CSSProperties, FormEvent, useState,
} from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/dist/client/router';
import { usePostContext } from '../../context/post';
import Layout from '../../components/Layout';

const styles: CSSProperties = {
  display: 'grid',
  placeContent: 'center',
  height: '60vh',
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

// コンテンツを投稿
const Post = () => {
  const { data, error } = useSWR('/api/user', fetcher);
  const router = useRouter();

  const post = usePostContext();
  const [text, setText] = useState(post.state.text);

  if (error) return <div style={styles}>failed to load</div>;
  if (!data) return <div style={styles}>loading...</div>;

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    post.setState((prev) => ({
      ...prev,
      text,
    }));

    router.push('/post/confirm');
  };

  return (
    <Layout title="Post">
      <form
        style={styles}
        onSubmit={submit}
      >
        <input type="text" defaultValue={data.name} />
        <input type="text" defaultValue={data.email} />

        <textarea required name="" id="" cols={30} rows={10} value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">次へ</button>
      </form>
    </Layout>
  );
};

export default Post;
