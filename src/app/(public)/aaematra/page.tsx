// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'Aae Matra',
  description: 'Home to Portal',
  keywords: 'Aae Matra ',
};
// Components
const AaeMatra = dynamic(() => import('@/Layout/AaeMatra/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <AaeMatra />;
}
export default Index;
