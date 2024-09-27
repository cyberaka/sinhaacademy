// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'Anausvaar Matra',
  description: 'Home to Portal',
  keywords: 'Anausvaar Matra ',
};
// Components
const Anausvaar = dynamic(() => import('@/Layout/Anausvaar/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <Anausvaar />;
}
export default Index;
