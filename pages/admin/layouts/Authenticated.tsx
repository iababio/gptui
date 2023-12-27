import React, { ReactNode, useEffect } from 'react';
import { useState } from 'react';

import { useRouter } from 'next/router';

import AsideMenu from '../../../components/admin/AsideMenu';
import FooterBar from '../../../components/admin/FooterBar';
import FormField from '../../../components/admin/Form/Field';
import Icon from '../../../components/admin/Icon';
import NavBar from '../../../components/admin/NavBar';
import NavBarItemPlain from '../../../components/admin/NavBar/Item/Plain';

import menuAside from '../../menuAside';
import menuNavBar from '../../menuNavBar';

import { mdiBackburger, mdiForwardburger, mdiMenu } from '@mdi/js';
import { Field, Form, Formik } from 'formik';

type Props = {
  children: ReactNode;
};

export default function LayoutAuthenticated({ children }: Props) {
  const [isAsideMobileExpanded, setIsAsideMobileExpanded] = useState(false);
  const [isAsideLgActive, setIsAsideLgActive] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsAsideMobileExpanded(false);
      setIsAsideLgActive(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, [router.events]);

  const layoutAsidePadding = 'xl:pl-60';

  return (
    <div className={`overflow-hidden lg:overflow-visible`}>
      <div
        className={`${layoutAsidePadding} ${
          isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''
        } pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`}
      >
        <NavBar
          menu={menuNavBar}
          className={`${layoutAsidePadding} ${
            isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''
          }`}
        >
          <NavBarItemPlain
            display="flex lg:hidden"
            onClick={() => setIsAsideMobileExpanded(!isAsideMobileExpanded)}
          >
            <Icon
              path={isAsideMobileExpanded ? mdiBackburger : mdiForwardburger}
              size="24"
            />
          </NavBarItemPlain>
          <NavBarItemPlain
            display="hidden lg:flex xl:hidden"
            onClick={() => setIsAsideLgActive(true)}
          >
            <Icon path={mdiMenu} size="24" />
          </NavBarItemPlain>
          <NavBarItemPlain useMargin>
            <Formik
              initialValues={{
                search: '',
              }}
              onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            >
              <Form>
                <FormField isBorderless isTransparent>
                  <Field name="search" placeholder="Search" />
                </FormField>
              </Form>
            </Formik>
          </NavBarItemPlain>
        </NavBar>
        <AsideMenu
          isAsideMobileExpanded={isAsideMobileExpanded}
          isAsideLgActive={isAsideLgActive}
          menu={menuAside}
          onAsideLgClose={() => setIsAsideLgActive(false)}
        />
        {children}
        <FooterBar>
          Get more with{` `}
          <a
            href="https://tailwind-react.justboil.me/dashboard"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            Premium version
          </a>
        </FooterBar>
      </div>
    </div>
  );
}
