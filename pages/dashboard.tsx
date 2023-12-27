import React, { useState } from 'react';
import type { ReactElement } from 'react';

import Head from 'next/head';

import {
  useSampleClients,
  useSampleTransactions,
} from './admin/hooks/sampleData';

import Button from '../components/admin/Button';
import CardBox from '../components/admin/CardBox';
import CardBoxClient from '../components/admin/CardBox/Client';
import CardBoxTransaction from '../components/admin/CardBox/Transaction';
import CardBoxWidget from '../components/admin/CardBox/Widget';
import ChartLineSample from '../components/admin/ChartLineSample';
import { sampleChartData } from '../components/admin/ChartLineSample/config';
import NotificationBar from '../components/admin/NotificationBar';
import SectionBannerStarOnGitHub from '../components/admin/Section/Banner/StarOnGitHub';
import SectionMain from '../components/admin/Section/Main';
import SectionTitleLineWithButton from '../components/admin/Section/TitleLineWithButton';
import TableSampleClients from '../components/admin/Table/SampleClients';

import { getPageTitle } from './admin/config';
import { Client, Transaction } from './admin/interfaces';
import LayoutAuthenticated from './admin/layouts/Authenticated';
import { setDarkMode } from './admin/stores/darkModeSlice';
import { useAppDispatch } from './admin/stores/hooks';

import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartPie,
  mdiChartTimelineVariant,
  mdiMonitorCellphone,
  mdiReload,
} from '@mdi/js';

const DashboardPage = () => {
  const dispatch = useAppDispatch();

  dispatch(setDarkMode(true));

  const { clients } = useSampleClients();
  const { transactions } = useSampleTransactions();

  const clientsListed = clients.slice(0, 4);

  const [chartData, setChartData] = useState(sampleChartData());

  const fillChartData = (e: React.MouseEvent) => {
    e.preventDefault();

    setChartData(sampleChartData());
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Dashboard')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiChartPie} title="Usage Overview">
          <Button icon={mdiReload} color="whiteDark" onClick={fillChartData} />
        </SectionTitleLineWithButton>

        <CardBox className="mb-6">
          {chartData && <ChartLineSample data={chartData} />}
        </CardBox>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
          <CardBoxWidget
            trendLabel="12%"
            trendType="up"
            trendColor="success"
            icon={mdiAccountMultiple}
            iconColor="success"
            number={512}
            label="Students"
          />
          <CardBoxWidget
            trendLabel="16%"
            trendType="down"
            trendColor="danger"
            icon={mdiCartOutline}
            iconColor="info"
            number={7770}
            numberPrefix="$"
            label="Staff"
          />
          <CardBoxWidget
            trendLabel="Overflow"
            trendType="warning"
            trendColor="warning"
            icon={mdiChartTimelineVariant}
            iconColor="danger"
            number={256}
            numberSuffix="%"
            label="Usage"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col justify-between">
            {transactions.map((transaction: Transaction) => (
              <CardBoxTransaction
                key={transaction.id}
                transaction={transaction}
              />
            ))}
          </div>
          <div className="flex flex-col justify-between">
            {clientsListed.map((client: Client) => (
              <CardBoxClient key={client.id} client={client} />
            ))}
          </div>
        </div>

        {/* <div className="my-6">
          <SectionBannerStarOnGitHub />
        </div> */}

        <SectionTitleLineWithButton icon={mdiAccountMultiple} title="Clients" />

        <NotificationBar color="info" icon={mdiMonitorCellphone}>
          <b>Responsive table.</b> Collapses on mobile
        </NotificationBar>

        <CardBox hasTable>
          <TableSampleClients />
        </CardBox>
      </SectionMain>
    </>
  );
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>;
};

export default DashboardPage;
