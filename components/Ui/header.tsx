import { LogIn } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/Ui/button';

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <div>
      <header className="sticky top-0 z-20 w-full p-3 bg-sky-50 sm:px-4 shadow">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <Link href="/">
            {/*<Image src={uniLogo} alt={'Logo'} height="40" width="250" />*/}
          </Link>
          <div className="flex items-center justify-cennter space-x-1">
            <ul className="hidden space-x-2 md:inline-flex">
              {session ? (
                <>
                  {!session?.user?.image ? (
                    // use the  name initial
                    <>
                      <div className="flex items-center justify-center w-10 h-10 bg-pink-800 rounded-full">
                        <span className="text-2xl font-bold text-white">
                          {session?.user?.name?.charAt(0)}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <Image
                        src={session?.user?.image!}
                        alt={session?.user?.name!}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </>
                  )}
                  <Link href={'/chat'}>
                    <Button>
                      Chat
                      <LogIn className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>

                  <Link href={''}>
                    <Button onClick={() => signOut()}>
                      Sign Out
                      <LogIn className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href={'/login'}>
                    <Button>
                      Login / Sign-Up
                      <LogIn className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
