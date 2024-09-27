// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'Sanyukt Vyanjan',
  description: 'Home to Portal',
  keywords: 'Sanyukt Vyanjan ',
};
// Components
const Sanyukt = dynamic(() => import('@/Layout/Sanyukt/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <Sanyukt />;
}
export default Index;
