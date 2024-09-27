// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'F Matra',
  description: 'Home to Portal',
  keywords: 'F Matra ',
};
// Components
const FMatra = dynamic(() => import('@/Layout/FMatra/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <FMatra />;
}
export default Index;
