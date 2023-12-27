import React, { ReactElement } from 'react';

import Head from 'next/head';

import Button from '../components/admin/Button';
import CardBox from '../components/admin/CardBox';
import CardBoxComponentEmpty from '../components/admin/CardBox/Component/Empty';
import NotificationBar from '../components/admin/NotificationBar';
import SectionMain from '../components/admin/Section/Main';
import SectionTitleLineWithButton from '../components/admin/Section/TitleLineWithButton';
import TableSampleClients from '../components/admin/Table/SampleClients';

import { getPageTitle } from './admin/config';
import LayoutAuthenticated from './admin/layouts/Authenticated';

import {
  mdiGithub,
  mdiMonitorCellphone,
  mdiTableBorder,
  mdiTableOff,
} from '@mdi/js';

const TablesPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Tables')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiTableBorder} title="Tables" main>
          <Button
            href="https://github.com/justboil/admin-one-react-tailwind"
            target="_blank"
            icon={mdiGithub}
            label="Star on GitHub"
            color="contrast"
            roundedFull
            small
          />
        </SectionTitleLineWithButton>

        <NotificationBar color="info" icon={mdiMonitorCellphone}>
          <b>Responsive table.</b> Collapses on mobile
        </NotificationBar>

        <CardBox className="mb-6" hasTable>
          <TableSampleClients />
        </CardBox>

        <SectionTitleLineWithButton
          icon={mdiTableOff}
          title="Empty variation"
        />

        <NotificationBar color="danger" icon={mdiTableOff}>
          <b>Empty card.</b> When there&apos;s nothing to show
        </NotificationBar>

        <CardBox>
          <CardBoxComponentEmpty />
        </CardBox>
      </SectionMain>
    </>
  );
};

TablesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default TablesPage;
