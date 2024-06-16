import { getTranslations } from 'next-intl/server';

import CardItem from '@/components/CardItem';

const menuItems = [
  {
    id: 1,
    imageUrl: 'https://f.ptcdn.info/379/084/000/lwznke79ikK9wumEfFU-o.png',
    altText: 'Image 1',
    title: '[Pantip Point] เตียงนอนไม่ต้อง! เตรียมนอนดึกดูยูโร 2024!! ⚽️🥳',
    srcUrl: 'https://pantip.com/topic/42756314',
  },
  {
    id: 2,
    imageUrl: 'https://f.ptcdn.info/394/084/000/lx1fzym3iIRVG3hu8Le-o.png',
    altText: 'Image 2',
    title: 'ต้อนรับฟุตบอลยูโร 2024 ด้วย “เกมบอล” ขวัญใจแฟนบอลตลอดการแข่งขัน',
    srcUrl: 'https://pantip.com/topic/42756314',
  },
  {
    id: 3,
    imageUrl: 'https://f.ptcdn.info/394/084/000/lx1fzym3iIRVG3hu8Le-o.png',
    altText: 'Image 2',
    title: 'ต้อนรับฟุตบอลยูโร 2024 ด้วย “เกมบอล” ขวัญใจแฟนบอลตลอดการแข่งขัน',
    srcUrl: 'https://pantip.com/topic/42756314',
  },
  {
    id: 4,
    imageUrl: 'https://f.ptcdn.info/495/084/000/lxebcpp2itO1mKDRu2d-o.png',
    altText: 'Image 2',
    title:
      '📌 พี่แป้งชวนรีวิว “ผลิตภัณฑ์ดูแลเส้นผมที่ชอบ“ รับ Pantip Point ผลิตภัณฑ์ดูแลเส้นผมแบรนด์ดัง และหมวกน้องเพี้ยน 🌿',
    srcUrl: 'https://pantip.com/topic/42756314',
  },
  {
    id: 5,
    imageUrl: 'https://f.ptcdn.info/395/084/000/lx1k7xw9iBn3Ra55WgL-o.jpg',
    altText: 'Image 2',
    title:
      '🚩 กิจกรรมละลายทรัพย์ “แนะนำแอปฯ ช้อปปิ้งออนไลน์ อยู่บ้านก็ช้อปเพลิน ฟินสุด” ตอบถูกใจ รับ Pantip point 50 คะแนน 🚩',
    srcUrl: 'https://pantip.com/topic/42756314',
  },
  {
    id: 6,
    imageUrl: 'https://f.ptcdn.info/379/084/000/lwznke79ikK9wumEfFU-o.png',
    altText: 'Image 1',
    title: '[Pantip Point] เตียงนอนไม่ต้อง! เตรียมนอนดึกดูยูโร 2024!! ⚽️🥳',
    srcUrl: 'https://pantip.com/topic/42756314',
  },
  {
    id: 7,
    imageUrl: 'https://f.ptcdn.info/394/084/000/lx1fzym3iIRVG3hu8Le-o.png',
    altText: 'Image 2',
    title: 'ต้อนรับฟุตบอลยูโร 2024 ด้วย “เกมบอล” ขวัญใจแฟนบอลตลอดการแข่งขัน',
    srcUrl: 'https://pantip.com/topic/42756314',
  },
  {
    id: 8,
    imageUrl: 'https://f.ptcdn.info/394/084/000/lx1fzym3iIRVG3hu8Le-o.png',
    altText: 'Image 2',
    title: 'ต้อนรับฟุตบอลยูโร 2024 ด้วย “เกมบอล” ขวัญใจแฟนบอลตลอดการแข่งขัน',
    srcUrl: 'https://pantip.com/topic/42756314',
  },
  {
    id: 9,
    imageUrl: 'https://f.ptcdn.info/495/084/000/lxebcpp2itO1mKDRu2d-o.png',
    altText: 'Image 2',
    title:
      '📌 พี่แป้งชวนรีวิว “ผลิตภัณฑ์ดูแลเส้นผมที่ชอบ“ รับ Pantip Point ผลิตภัณฑ์ดูแลเส้นผมแบรนด์ดัง และหมวกน้องเพี้ยน 🌿',
    srcUrl: 'https://pantip.com/topic/42756314',
  },
  {
    id: 10,
    imageUrl: 'https://f.ptcdn.info/395/084/000/lx1k7xw9iBn3Ra55WgL-o.jpg',
    altText: 'Image 2',
    title:
      '🚩 กิจกรรมละลายทรัพย์ “แนะนำแอปฯ ช้อปปิ้งออนไลน์ อยู่บ้านก็ช้อปเพลิน ฟินสุด” ตอบถูกใจ รับ Pantip point 50 คะแนน 🚩',
    srcUrl: 'https://pantip.com/topic/42756314',
  },
];
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
        {menuItems.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
      <h5 className="mt-5 text-xl font-bold text-zinc-50">Another Section</h5>
    </>
  );
};

export default Index;
