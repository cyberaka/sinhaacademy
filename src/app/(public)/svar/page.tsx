// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home to Portal',
  keywords: 'Home ',
};
// Components
const Svar = dynamic(() => import('@/Layout/Svar/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <Svar />;
}
export default Index;
