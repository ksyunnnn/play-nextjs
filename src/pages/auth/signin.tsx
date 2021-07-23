import { ClientSafeProvider, getProviders, signIn } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';

import Button from '../../components/Button';

const Signin: React.FCX = (

) => {
  const router = useRouter();
  const callbackUrl = typeof router.query.callbackUrl !== 'string' ? '/' : router.query.callbackUrl;

  const [providers, setProviders] = useState<Record<string, ClientSafeProvider>>({});

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

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
