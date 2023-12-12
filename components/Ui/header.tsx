import { LogIn } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/Ui/button';

import uniLogo from '/public/fordham-university-logo.png';

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <div>
      <header className="sticky top-0 z-20 w-full p-3 bg-sky-50 sm:px-4 shadow">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <Link href="/">
            <Image src={uniLogo} alt={'Fordham Logo'} height="40" width="250" />
          </Link>
          <div className="flex items-center justify-cennter space-x-1">
            <ul className="hidden space-x-2 md:inline-flex">
              {session ? (
                <>
                  <Image
                    src={session?.user?.image!}
                    alt={session?.user?.name!}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
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
