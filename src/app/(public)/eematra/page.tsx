// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'EE Matra',
  description: 'Home to Portal',
  keywords: 'EE Matra ',
};
// Components
const EEmatra = dynamic(() => import('@/Layout/EEmatra/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <EEmatra />;
}
export default Index;
