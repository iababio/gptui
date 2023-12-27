import { MenuAsideItem } from './admin/interfaces';

import {
  mdiAccountCircle,
  mdiAlertCircle,
  mdiGithub,
  mdiLock,
  mdiMonitor,
  mdiPalette,
  mdiResponsive,
  mdiSquareEditOutline,
  mdiTable,
  mdiTelevisionGuide,
  mdiViewList,
  mdiVuejs,
} from '@mdi/js';

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    href: '/tables',
    label: 'Tables',
    icon: mdiTable,
  },
  {
    href: '/forms',
    label: 'Forms',
    icon: mdiSquareEditOutline,
  },
  {
    href: '/ui',
    label: 'UI',
    icon: mdiTelevisionGuide,
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: mdiAccountCircle,
  },

  {
    label: 'Dropdown',
    icon: mdiViewList,
    menu: [
      {
        label: 'Item One',
      },
      {
        label: 'Item Two',
      },
    ],
  },
  {
    href: 'https://github.com/justboil/admin-one-react-tailwind',
    label: 'GitHub',
    icon: mdiGithub,
    target: '_blank',
  },
  {
    href: 'https://github.com/justboil/admin-one-vue-tailwind',
    label: 'Vue version',
    icon: mdiVuejs,
    target: '_blank',
  },
];

export default menuAside;
