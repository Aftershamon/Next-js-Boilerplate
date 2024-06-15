import { getTranslations } from 'next-intl/server';
import CardItem from '@/components/CardItem';
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

export default function Index() {
  return (
    <>
      <h5 className="text-3xl font-bold text-zinc-50 mt-5">Highlight</h5>
      <div className="grid grid-cols-4 gap-1">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </>
  );
}
