// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'Anaunaaisak Matra',
  description: 'Home to Portal',
  keywords: 'Anaunaaisak Matra ',
};
// Components
const Anaunaaisak = dynamic(() => import('@/Layout/Anaunaaisak/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <Anaunaaisak />;
}
export default Index;
