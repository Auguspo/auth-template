import { db } from "@/lib/db";

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificaitionToken = await db.verificationToken.findUnique({
      where: { token },
    });
    return verificaitionToken;
  } catch (error) {}
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificaitionToken = await db.verificationToken.findFirst({
      where: { email },
    });
    return verificaitionToken;
  } catch (error) {}
};
