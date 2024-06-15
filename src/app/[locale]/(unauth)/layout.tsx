import Link from 'next/link';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/BaseTemplate';
import { IoMdHome } from "react-icons/io";
import { MdFeed } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { GiStarFormation } from "react-icons/gi";
import { MdExplore } from "react-icons/md";
import { GiSpellBook } from "react-icons/gi";

export const data = {
  menuItems: {
    book: "ห้องสมุด",
    Blue_Plan_Net: "บลูแพลนเน็ต",
    Chaika: "ชายคา",
    Chaloem_Thai: "เฉลิมไทย",
    Griang_Zone: "กรีนโซน",
    Camera: "กล้อง",
    Gadget: "แก็ดเจ็ด",
    Far_from_Home: "ไกลบ้าน",
    Chaloem_Krung: "เฉลิมกรุง",
    Dio_Siam: "ดิโอลด์สยาม",
    Writer_Road: "ถนนนักเขียน",
  },
};

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');

  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 border-none text-gray-700 hover:text-gray-900"
            >
              <IoMdHome size={30} />
              {t("home_link")}
            </Link>
          </li>
          <li>
            <Link
              href="/about/"
              className="flex items-center gap-2 border-none text-gray-700 hover:text-gray-900"
            >
              <MdFeed size={30} />
              {t("about_link")}
            </Link>
          </li>
          <li>
            <Link
              href="/guestbook/"
              className="flex items-center gap-2 border-none text-gray-700 hover:text-gray-900"
            >
              <AiFillLike size={30} />
              {t("guestbook_link")}
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/"
              className="flex items-center gap-2 border-none text-gray-700 hover:text-gray-900"
            >
              <GiStarFormation size={30} />
              {t("portfolio_link")}
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/"
              className="flex items-center gap-2 border-none text-gray-700 hover:text-gray-900"
            >
              <MdExplore size={30} />
              {t("explore")}
            </Link>
          </li>
        </>
      }
      menuNav={
        <>
          {Object.entries(data.menuItems).map(([key, value]) => (
            <li key={key}>
              <Link
                href="/"
                className="flex flex-col items-center gap-2 border-none text-gray-300 hover:text-white"
              >
                <GiSpellBook size={30} />
                {value}
              </Link>
            </li>
          ))}
        </>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
