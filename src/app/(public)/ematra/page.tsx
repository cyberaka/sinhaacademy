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
const Ematra = dynamic(() => import('@/Layout/Ematra/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <Ematra />;
}
export default Index;
