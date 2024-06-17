import { getTranslations } from 'next-intl/server';

import { Home } from '@/components/Home';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Index = () => {
  return <Home />;
};

export default Index;
