// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'Barakhari',
  description: 'Home to Portal',
  keywords: 'Barakhari ',
};
// Components
const Barakhari = dynamic(() => import('@/Layout/Barakhari/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <Barakhari />;
}
export default Index;
