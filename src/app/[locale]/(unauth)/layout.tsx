import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { AiFillLike } from 'react-icons/ai';
import { GiStarFormation } from 'react-icons/gi';
import { IoMdHome } from 'react-icons/io';
import { MdExplore, MdFeed } from 'react-icons/md';

import Home from '@/components/Home';
import { MenuItem } from '@/components/MenuItem';
import { BaseTemplate } from '@/templates/BaseTemplate';

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
              {t('home_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/about/"
              className="flex items-center gap-2 border-none text-gray-700 hover:text-gray-900"
            >
              <MdFeed size={30} />
              {t('about_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/guestbook/"
              className="flex items-center gap-2 border-none text-gray-700 hover:text-gray-900"
            >
              <AiFillLike size={30} />
              {t('guestbook_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/"
              className="flex items-center gap-2 border-none text-gray-700 hover:text-gray-900"
            >
              <GiStarFormation size={30} />
              {t('portfolio_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/"
              className="flex items-center gap-2 border-none text-gray-700 hover:text-gray-900"
            >
              <MdExplore size={30} />
              {t('explore')}
            </Link>
          </li>
        </>
      }
      menuNav={<Home Component={MenuItem} />}
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
