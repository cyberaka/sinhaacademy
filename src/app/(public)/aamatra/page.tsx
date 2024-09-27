// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'AA Matra',
  description: 'Home to Portal',
  keywords: 'AA Matra ',
};
// Components
const AaMatra = dynamic(() => import('@/Layout/AaMatra/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <AaMatra />;
}
export default Index;
