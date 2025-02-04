"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, { 
      callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };

  return (
    <div className='flex items-center gap-x-2 w-full'>
      <Button
        className='w-full'
        variant='outline'
        size='lg'
        onClick={() => onClick("google")}
      >
        <FcGoogle className='w-5 h-5' />
      </Button>
      <Button
        className='w-full'
        variant='outline'
        size='lg'
        onClick={() => onClick("github")}
      >
        <FaGithub className='w-5 h-5' />
      </Button>
    </div>
  );
};
