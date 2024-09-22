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
const Feedback = dynamic(() => import('@/Layout/Feedback/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <Feedback />;
}
export default Index;
