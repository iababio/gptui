import React from 'react';

import Header from '@/components/Ui/header';

export default function MainHomePage() {
  return (
    // bg-gradient-to-r from-rose-700 to-pink-600
    <div className="flex w-screen h-screen min-h-screen min-w-fit bg-cover object-cover bg-center bg-[url('../public/back_1.jpeg')]">
      <div className="w-screen min-h-screen bg-transparent bg-gradient-to-r from-rose-900 to-pink-650 to-transparent">
        <Header />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div className="flex flex-col items-center text-center">
            <div className="grid grid-flow-col auto-cols-max gap-6 gap-6 divide-x divide-gray-300">
              <div className="items-center justify-center  w-full mt-4">
                <div className="flex items-center justify-center">
                  <h1 className="mr-3 text-5xl font-semibold text-white">
                    Chat with LITE
                  </h1>
                </div>

                <div>
                  <p className="max-w-xl mt-10 mb-10 text-lg  text-slate-200 text-gray-50">
                    Get access to all the resources you need to learn about LITE
                  </p>
                </div>
              </div>
              <div className="items-center justify-center w-full mt-4">
                <div className="flex items-center justify-center">
                  <h1 className="mr-4 text-5xl font-semibold text-white">
                    Learning Section
                  </h1>
                </div>

                <p className="max-w-xl mt-10 mb-10 text-lg  text-slate-200 text-gray-50">
                  Join Students, researchers and Professors to instantly answers
                  questions @LITE Ai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
