// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'Four Letter',
  description: 'Home to Portal',
  keywords: 'Four Letter',
};
// Components
const FourLetter = dynamic(() => import('@/Layout/FourLetter/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <FourLetter />;
}
export default Index;
