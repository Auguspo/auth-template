"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
export const Social = () => {
  return (
    <div className='flex items-center gap-x-2 w-full'>
      <Button className='w-full' variant='outline' size='lg' onClick={() => {}}>
        <FcGoogle className='w-5 h-5' />
      </Button>
      <Button className='w-full' variant='outline' size='lg' onClick={() => {}}>
        <FaGithub className='w-5 h-5' />
      </Button>
    </div>
  );
};
