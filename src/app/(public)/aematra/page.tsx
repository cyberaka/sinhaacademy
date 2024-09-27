// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'Ae Matra',
  description: 'Home to Portal',
  keywords: 'Ae Matra ',
};
// Components
const AEMatra = dynamic(() => import('@/Layout/AEMatra/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <AEMatra />;
}
export default Index;
