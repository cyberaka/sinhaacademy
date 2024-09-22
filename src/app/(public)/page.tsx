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
const Home = dynamic(() => import('@/Layout/Home/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <Home />;
}
export default Index;
