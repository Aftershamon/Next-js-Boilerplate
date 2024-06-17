import { Divider } from '@mui/material';
import Image from 'next/image';
import { FaBars, FaFacebookSquare, FaUserCircle } from 'react-icons/fa';
import { FaCommentMedical } from 'react-icons/fa6';
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
        <header className="navbar-background border-b border-black px-10 sm:px-10 md:px-20 lg:px-20">
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
              <div className="hidden rounded-full border border-gray-300 bg-white p-2 px-10 md:hidden lg:flex">
                <nav>
                  <ul className="flex flex-wrap justify-around gap-x-5 text-sm">
                    {props.leftNav}
                  </ul>
                </nav>
              </div>
              <div className="flex flex-row items-center gap-2 bg-transparent md:gap-3 lg:gap-3">
                <div className="flex flex-row items-center rounded-full border border-gray-300 bg-white p-2 md:px-3 lg:px-3">
                  <a
                    aria-label="addcomment"
                    href="https://pantip.com/login?redirect=Zm9ydW0vbmV3X3RvcGlj&pos=2"
                  >
                    <span aria-hidden="true">
                      <FaCommentMedical className="text-xl md:text-3xl lg:text-3xl" />
                    </span>
                  </a>
                </div>
                <div className="flex flex-row items-center gap-2 rounded-full border border-gray-300 bg-white p-2 md:gap-5 md:px-3 lg:gap-5 lg:px-3 ">
                  <FaBars size={20} />
                  <a
                    aria-label="login"
                    href="https://pantip.com/login?redirect=aHR0cHM6Ly9wYW50aXAuY29tL2hvbWUvY29tbXVuaXRpZXM="
                  >
                    <span aria-hidden="true">
                      <FaUserCircle className="text-xl md:text-3xl lg:text-3xl" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-5 mt-2 flex w-full justify-center rounded-full border border-gray-300 bg-white p-2 px-5 lg:mt-0 lg:hidden lg:w-auto">
              <nav>
                <ul className="flex flex-wrap justify-center gap-5 text-sm">
                  {props.leftNav}
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <header className="navbar-background flex items-center justify-start border-b border-black p-3 px-10 sm:px-10 md:px-20 lg:px-20">
          <ul className="menu-container">{props.menuNav}</ul>
        </header>
        <main className="px-10 sm:px-10 md:px-20 lg:px-20">
          {props.children}
        </main>
        <footer
          className="flex flex-col gap-5 px-10 py-8 text-sm sm:px-10 md:px-20 lg:px-20"
          style={{ fontSize: '14px', backgroundColor: '#353156' }}
        >
          <div
            className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4"
            style={{ color: 'rgba(233,229,246)' }}
          >
            <div className="flex flex-col gap-2 text-start">
              <a
                className="hover:text-white hover:underline"
                href="https://pantip.com/about/tos"
              >
                กฎ กติกาและมารยาท
              </a>
              <a
                className="hover:text-white hover:underline"
                href="https://pantip.com/about/defamation"
              >
                คำแนะนำการโพสต์
              </a>
              <a
                className="hover:text-white hover:underline"
                href="https://pantip.com/about/privacy"
              >
                นโยบายเกี่ยวกับข้อมูลส่วนบุคคล
              </a>
              <a
                className="hover:text-white hover:underline"
                href="https://pantip.com/about/privilege"
              >
                สิทธิ์การใช้งานของสมาชิก
              </a>
              <a
                className="hover:text-white hover:underline"
                href="https://pantip.com/about/contact"
              >
                ติดต่อทีมงาน Pantip
              </a>
              <a
                className="hover:text-white hover:underline"
                href="https://pantip.com/advertising"
              >
                ติดต่อลงโฆษณา
              </a>
              <a
                className="hover:text-white hover:underline"
                href="https://pantip.com/about/job"
              >
                ร่วมงานกับ Pantip
              </a>
              <a
                className="hover:text-white hover:underline"
                href="https://pantip.com/app"
              >
                Download app Pantip
              </a>
              <a
                className="hover:text-white hover:underline"
                href="https://pantip.com/about/certified_developer"
              >
                Pantip Certified Developer
              </a>
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
