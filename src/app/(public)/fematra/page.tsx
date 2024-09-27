// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'Fe Matra',
  description: 'Home to Portal',
  keywords: 'Fe Matra ',
};
// Components
const FeMatra = dynamic(() => import('@/Layout/FeMatra/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <FeMatra />;
}
export default Index;
