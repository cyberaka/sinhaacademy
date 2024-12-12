// Components
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { SuspenseLoader } from '@/components/App/Loader';

export const metadata: Metadata = {
  title: 'Three Letter',
  description: 'Home to Portal',
  keywords: 'Three Letter',
};
// Components
const ThreeLetter = dynamic(() => import('@/Layout/ThreeLetter/Index'), {
  loading: () => <SuspenseLoader />,
  ssr: false,
});

async function Index() {
  return <ThreeLetter />;
}
export default Index;
