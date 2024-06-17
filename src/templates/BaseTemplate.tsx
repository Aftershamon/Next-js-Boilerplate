import { Divider } from '@mui/material';
import Image from 'next/image';
import { FaBars, FaFacebookSquare, FaUserCircle } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  children: React.ReactNode;
  menuNav?: React.ReactNode;
  footerNav?: React.ReactNode;
  footerNavBlog?: React.ReactNode;
  footerNavTag?: React.ReactNode;
}) => {
  return (
    <div className="w-full text-gray-700 antialiased">
      <div className="mx-auto">
        <header className="navbar-background border-b border-black px-4 sm:px-20">
          <div className="flex flex-col items-center justify-between gap-4 py-5 lg:flex-row lg:gap-10 lg:py-5">
            <div className="flex w-full grow flex-row items-center justify-between gap-10 lg:w-auto">
              <h1 className="text-3xl font-bold text-gray-900">
                <Image
                  src="/assets/images/logo-mobile-pantip-white.png"
                  alt="Sentry"
                  width={90}
                  height={90}
                />
              </h1>
              <div className="hidden rounded-full border border-gray-300 bg-white p-2 px-10 lg:flex">
                <nav>
                  <ul className="flex flex-wrap justify-center gap-x-10 text-sm">
                    {props.leftNav}
                  </ul>
                </nav>
              </div>
              <div className="flex flex-row items-center gap-5 rounded-full border border-gray-300 bg-white p-2 px-3">
                <FaBars size={20} />
                <FaUserCircle size={30} />
              </div>
            </div>
            <div className="mb-5 flex w-full rounded-full border border-gray-300 bg-white p-2 px-10 lg:mt-0 lg:hidden lg:w-auto">
              <nav>
                <ul className="flex flex-wrap justify-center gap-x-10 text-sm">
                  {props.leftNav}
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <header className="navbar-background flex items-center justify-start border-b border-black p-3 px-20">
          <ul className="menu-container">{props.menuNav}</ul>
        </header>
        <main className="px-20">{props.children}</main>
        <footer
          className="flex flex-col gap-5 px-4 py-8 text-sm sm:px-8 md:px-20"
          style={{ fontSize: '14px', backgroundColor: '#353156' }}
        >
          <div
            className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4"
            style={{ color: 'rgba(233,229,246)' }}
          >
            <div className="flex flex-col gap-2 text-start">
              <h5>กฎ กติกาและมารยาท</h5>
              <h5>คำแนะนำการโพสต์</h5>
              <h5>นโยบายเกี่ยวกับข้อมูลส่วนบุคคล</h5>
              <h5>สิทธิ์การใช้งานของสมาชิก</h5>
              <h5>ติดต่อทีมงาน Pantip</h5>
              <h5>ติดต่อลงโฆษณา</h5>
              <h5>ร่วมงานกับ Pantip</h5>
              <h5>Download app Pantip</h5>
              <h5>Pantip Certified Developer</h5>
            </div>
            <Divider
              className="my-5 sm:block md:block lg:hidden"
              style={{ backgroundColor: 'black' }}
            />
            <div className="flex flex-col gap-2 text-start">
              <h3
                style={{
                  fontSize: '16px',
                  marginBottom: '10px',
                  color: '#fbc02d',
                }}
              >
                <b>ROOM HIT</b>
              </h3>
              {props.footerNav}
            </div>
            <Divider
              className="my-5 sm:block md:block lg:hidden"
              style={{ backgroundColor: 'black' }}
            />
            <div className="flex flex-col gap-2 text-start">
              <h3
                style={{
                  fontSize: '16px',
                  marginBottom: '10px',
                  color: '#fbc02d',
                }}
              >
                <b>TAG HIT</b>
              </h3>
              {props.footerNavTag}
            </div>
            <Divider
              className="my-5 sm:block md:block lg:hidden"
              style={{ backgroundColor: 'black' }}
            />
            <div className="flex flex-col gap-2 text-start">
              <h3
                style={{
                  fontSize: '16px',
                  marginBottom: '10px',
                  color: '#fbc02d',
                }}
              >
                <b>BLOGGANG</b>
              </h3>
              {props.footerNavBlog}
            </div>
          </div>
          <Divider className="mb-2 mt-5" style={{ backgroundColor: 'black' }} />
          <div
            className="flex flex-col items-center justify-between gap-4 sm:flex-row"
            style={{ color: 'rgba(233,229,246,.8)' }}
          >
            <a href="/">
              © Copyright {new Date().getFullYear()} {AppConfig.name}.
            </a>
            <div className="flex gap-4">
              <a href="/">เงื่อนไข </a>
              <a href="/">แผนผังเว็บไซต์ </a>
              <a href="/">ความเป็นส่วนตัว </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="/" aria-label="Facebook">
                <span aria-hidden="true">
                  <FaFacebookSquare className="text-2xl" />
                </span>
              </a>
              <a href="/" aria-label="Instagram">
                <span aria-hidden="true">
                  <TiSocialInstagram className="text-2xl" />
                </span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
