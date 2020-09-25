import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home ',
    icon: 'home-outline',
    link: '/colhome',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Noticias',
    icon: 'cast-outline',
    link: '/noticias'
  },
  {
    title: 'Equipos',
    icon: 'people-outline',
    link: '/equipos'
  },
  {
    title: 'Fases',
    icon: 'options-2-outline',
    link: '/fases'
  },
  {
    title: 'Amonestados',
    icon: 'square-outline',
    link: '/amonestados'
  },
  {
    title: 'Suspendidos',
    icon: 'square-outline',
    link: '/suspendidos'
  },
  {
    title: 'Logs',
    icon: 'file-text-outline',
    link: '/logs'
  },
];
