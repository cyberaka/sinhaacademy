// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'Visarg Matra',
  description: 'Home to Portal',
  keywords: 'Visarg Matra',
};
// Components
const Visarg = dynamic(() => import('@/Layout/Visarg/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <Visarg />;
}
export default Index;
