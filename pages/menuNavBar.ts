import { MenuNavBarItem } from './admin/interfaces';

import { mdiAccount, mdiLogout, mdiMenu, mdiThemeLightDark } from '@mdi/js';

const menuNavBar: MenuNavBarItem[] = [
  {
    icon: mdiMenu,
    label: '',
    menu: [{}],
  },
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: 'My Profile',
        href: '/profile',
      },

      {
        isDivider: true,
      },
      {
        icon: mdiLogout,
        label: 'Log Out',
        isLogout: true,
      },
    ],
  },
  {
    icon: mdiThemeLightDark,
    label: 'Light/Dark',
    isDesktopNoLabel: true,
    isToggleLightDark: true,
  },

  {
    icon: mdiLogout,
    label: 'Log out',
    isDesktopNoLabel: true,
    isLogout: true,
  },
];

export default menuNavBar;
