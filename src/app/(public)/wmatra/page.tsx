// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'W Matra',
  description: 'Home to Portal',
  keywords: 'W Matra ',
};
// Components
const Wmatra = dynamic(() => import('@/Layout/Wmatra/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <Wmatra />;
}
export default Index;
