import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { AiFillLike } from 'react-icons/ai';
import { GiStarFormation } from 'react-icons/gi';
import { IoMdHome } from 'react-icons/io';
import { MdExplore, MdFeed } from 'react-icons/md';

import { BlogItem, MenuFooter, TagItem } from '@/components/FooterItem';
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
              <IoMdHome className="text-xl md:text-3xl lg:text-3xl" />
              {t('home_link')}
            </Link>
          </li>
          <li>
            <Link
              href="https://pantip.com/home/feed"
              className="flex items-center gap-2 border-none text-gray-700 hover:text-gray-900"
            >
              <MdFeed className="text-xl md:text-3xl lg:text-3xl" />
              {t('about_link')}
            </Link>
          </li>
          <li>
            <Link
              href="https://pantip.com/home/pick"
              className="flex items-center gap-2 border-none text-gray-700 hover:text-gray-900"
            >
              <AiFillLike className="text-xl md:text-3xl lg:text-3xl" />
              {t('guestbook_link')}
            </Link>
          </li>
          <li>
            <Link
              href="https://pantip.com/home/hitz"
              className="flex items-center gap-2 border-none text-gray-700 hover:text-gray-900"
            >
              <GiStarFormation className="text-xl md:text-3xl lg:text-3xl" />
              {t('portfolio_link')}
            </Link>
          </li>
          <li>
            <Link
              href="https://pantip.com/home/communities"
              className="flex items-center gap-2 border-none text-gray-700 hover:text-gray-900"
            >
              <MdExplore className="text-xl md:text-3xl lg:text-3xl" />
              {t('explore')}
            </Link>
          </li>
        </>
      }
      menuNav={<Home Component={MenuItem} />}
      footerNav={<Home Component={MenuFooter} />}
      footerNavBlog={<Home Component={BlogItem} />}
      footerNavTag={<Home Component={TagItem} />}
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
