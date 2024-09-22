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
const Learning = dynamic(() => import('@/Layout/Learning/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <Learning />;
}
export default Index;
