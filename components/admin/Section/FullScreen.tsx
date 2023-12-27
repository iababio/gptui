import React, { ReactNode } from 'react';

import {
  gradientBgDark,
  gradientBgPinkRed,
  gradientBgPurplePink,
} from '../../../pages/admin/colors';
import { BgKey } from '../../../pages/admin/interfaces';
import { useAppSelector } from '../../../pages/admin/stores/hooks';

type Props = {
  bg: BgKey;
  children: ReactNode;
};

export default function SectionFullScreen({ bg, children }: Props) {
  const darkMode = useAppSelector((state) => state.darkMode.isEnabled);

  let componentClass = 'flex min-h-screen items-center justify-center ';

  if (darkMode) {
    componentClass += gradientBgDark;
  } else if (bg === 'purplePink') {
    componentClass += gradientBgPurplePink;
  } else if (bg === 'pinkRed') {
    componentClass += gradientBgPinkRed;
  }

  return <div className={componentClass}>{children}</div>;
}
