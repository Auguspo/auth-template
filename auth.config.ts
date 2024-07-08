import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

import { LoginSchema } from "./schemas";

import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";
// export default { providers: [GitHub, Google] } satisfies NextAuthConfig;
export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
