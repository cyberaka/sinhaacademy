// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'Matraein',
  description: 'Home to Portal',
  keywords: 'Matraein ',
};
// Components
const Matraein = dynamic(() => import('@/Layout/Matraein/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <Matraein />;
}
export default Index;
