import React from 'react';

import { gradientBgPinkRed } from '../../../../pages/admin/colors';

import SectionBanner from '.';
import Button from '../../Button';

import { mdiGithub } from '@mdi/js';

const SectionBannerStarOnGitHub = () => {
  return (
    <SectionBanner className={gradientBgPinkRed}>
      <h1 className="text-3xl text-white mb-6">
        Like the project? Please star on <b>GitHub</b> ;-)
      </h1>
      <div>
        <Button
          href="https://github.com/justboil/admin-one-react-tailwind"
          target="_blank"
          icon={mdiGithub}
          label="GitHub"
          roundedFull
        />
      </div>
    </SectionBanner>
  );
};

export default SectionBannerStarOnGitHub;
