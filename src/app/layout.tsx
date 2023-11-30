
import SideBar from '@/components/SideBar';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import GlobalStyles from './GlobalStyles';
import { PageContainer } from './styles';
const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alex Vido',
  description: 'A Full-Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GlobalStyles />
        <PageContainer>
          <SideBar/>
          {children}
        </PageContainer>
      </body>
    </html >
  )
}
