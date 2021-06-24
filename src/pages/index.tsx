import React from 'react';
import useSWR from 'swr';
import Layout from '../components/Layout';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Home: React.FCX = () => {
  const pub = useSWR('/api/public', fetcher);
  const pri = useSWR('/api/private', fetcher);
  return (
    <Layout title="Home">
      <h2 className="pb-16">Welcome</h2>

      <div className="grid gap-8">
        <section>
          <h3 className="text-2xl pb-4">Public</h3>
          {!pub.data ? <div>loading</div> : (
            <pre>
              {JSON.stringify(pub, null, 2)}
            </pre>
          )}
        </section>

        <section>
          <h3 className="text-2xl pb-4">Private</h3>
          {!pri.data ? <div>loading</div> : (
            <pre>
              {JSON.stringify(pri, null, 2)}
            </pre>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Home;
