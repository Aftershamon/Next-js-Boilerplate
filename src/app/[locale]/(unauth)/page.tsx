import { getTranslations } from 'next-intl/server';

import { CardItem } from '@/components/CardItem';
import Home from '@/components/Home';
import { PantipPickCard } from '@/components/PantipPickCard';

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
      <Home Component={CardItem} />
      <div className="mb-5 mt-20 text-white">
        <h3 className="text-4xl font-bold" style={{ color: '#fbc02d' }}>
          Pantip Pick
        </h3>
        <small className="text-sm">กระทู้คุณภาพคัดเลือกโดยทีมงาน Pantip</small>
      </div>
      <Home Component={PantipPickCard} />
    </>
  );
};

export default Index;
