import '@/app/ui/global.css';
import { montserrat, roboto } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
