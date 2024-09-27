// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'E Matra',
  description: 'Home to Portal',
  keywords: 'E Matra ',
};
// Components
const WUmatra = dynamic(() => import('@/Layout/WUmatra/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <WUmatra />;
}
export default Index;
