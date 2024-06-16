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
  return (
    <>
      <h5 className="mt-5 text-xl font-bold text-zinc-50">Highlight</h5>
      <div className="mb-10 grid grid-cols-4 gap-2">
        <Home />
      </div>
      <h5 className="mt-5 text-xl font-bold text-zinc-50">Another Section</h5>
    </>
  );
};

export default Index;
