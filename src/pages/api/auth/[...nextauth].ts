import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

// メールとパスワード認証のモック https://zenn.dev/okumura_daiki/articles/c9e0065716d862
const findUserByCredentials = (credentials) => {
  if (
    credentials.email === process.env.USER_EMAIL
    && credentials.password === process.env.USER_PASSWORD
  ) {
    // ログイン可ならユーザー情報を返却
    return { id: 1, name: 'Taro' };
  }
  return null;
};

const options = {
  providers: [

    Providers.Credentials({
      name: 'Email', // 表示名 ('Sign in with ...' に表示される)
      credentials: { // ログインページで適切なフォームを生成するために使用
        email: { label: 'Email', type: 'email', placeholder: 'email@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const user = findUserByCredentials(credentials);
        if (user) {
          // 返されたオブジェクトはすべてJWTの`user`プロパティに保存される
          return Promise.resolve(user);
        }
        // nullまたはfalseを返すと、認証を拒否する
        return Promise.resolve(null);
      },
    }),

    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),

  ],
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
