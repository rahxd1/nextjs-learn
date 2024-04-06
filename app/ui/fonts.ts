import { Inter, Montserrat, Roboto, Lusitana } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
});
export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
