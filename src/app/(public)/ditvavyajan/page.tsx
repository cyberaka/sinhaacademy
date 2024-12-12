// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'Ditva Vyajan',
  description: 'Home to Portal',
  keywords: 'Ditva Vyajan',
};
// Components
const DitvaVyajan = dynamic(() => import('@/Layout/DitvaVyajan/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <DitvaVyajan />;
}
export default Index;
