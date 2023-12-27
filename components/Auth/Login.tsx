import { LogIn } from 'lucide-react';
import { signIn } from 'next-auth/react';
import React from 'react';



import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/Ui/button';

import logo from '../../public/chatgpt.png';


export type User = {
  name: string;
  email: string;
  image: string;
};

export default function Home() {
  return (
    <div className="w-screen h-screen min-w-fit min-h-700 bg-cover ">
      <div className="w-screen h-screen min-h-screen bg-transparent bg-gradient-to-r from-rose-900 to-pink-900 to-transparent">
        <div className="ml-20 mb-20 p-8 justify-items-end">
          <Link href={'/'}>
            <Button className="bg-transparent font-bold text-white bg-gradient-to-r from-rose-900 to-pink-900">
              Main Page
              <LogIn className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-10 items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <div className="grid grid-flow-row auto-cols-max grid-flow-row sm:grid-flow-col gap-6 divide-x divide-gray-300">
              <div className="grid-flow-row sm:grid-flow-col items-center justify-center w-full mt-4">
                <div className="flex items-center justify-center">
                  {/*    create a card with 40 by 60 */}
                  <div className="border-2 border-amber-50 min-h-1/4 min-w-3/4 items-center bg-sky-50 rounded-md">
                    <div className="flex-col min-h-20 min-h-min flex items-center justify-center bg-gray-50">
                      <div className="relative">
                        <Image
                          className="relative min-w-3/4 min-h-3/4  p-2 m-2"
                          src={logo}
                          width={200}
                          height={200}
                          alt="Picture of the author"
                        />
                      </div>
                      <div className="p-2 m-2">
                        <Link href={''}>
                          <Button
                            onClick={() =>
                              signIn('google', {
                                callbackUrl: 'http://localhost:3000',
                              })
                            }
                            className="bg-transparent text-white bg-gradient-to-r from-rose-900 to-pink-900"
                          >
                            Login with Google
                            <LogIn className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-center justify-center w-full mt-4">
                <div className="flex ml-2 items-center justify-center">
                  <h1 className="mr-4 text-5xl font-semibold text-white">
                    @GPT_Ui
                  </h1>
                </div>

                <p className="max-w-xl mt-10 mb-10 ml-6 text-lg  text-slate-200 text-gray-50">
                  Join Students, researchers and Professors who are using
                  @GPT_Ui for their projects design and development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}