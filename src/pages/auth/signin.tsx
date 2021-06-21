import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { getProviders, signIn } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Button from '../../components/Button';

const Signin: React.FCX<InferGetStaticPropsType<typeof getStaticProps>> = (
  { providers },
) => {
  const router = useRouter();
  const callbackUrl = typeof router.query.callbackUrl !== 'string' ? '/' : router.query.callbackUrl;

  return (
    <div className="grid place-content-center min-h-screen pb-36">
      <div className="grid gap-4 text-center">
        <h1 className="text-left text-lg font-bold mr-16">Sign in with</h1>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <Button onClick={() => signIn(provider.id, { callbackUrl })}>
              {provider.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Signin;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};
