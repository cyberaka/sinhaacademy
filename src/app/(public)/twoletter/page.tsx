// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'Two Letter',
  description: 'Home to Portal',
  keywords: 'Two Letter',
};
// Components
const TwoLetter = dynamic(() => import('@/Layout/TwoLetter/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <TwoLetter />;
}
export default Index;
