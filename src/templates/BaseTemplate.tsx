import { Divider } from '@mui/material';
import Image from 'next/image';
import { FaBars, FaFacebookSquare, FaUserCircle } from 'react-icons/fa';
import { FaAnglesRight } from 'react-icons/fa6';
import { TiSocialInstagram } from 'react-icons/ti';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  children: React.ReactNode;
  menuNav?: React.ReactNode;
}) => {
  return (
    <div className="w-full text-gray-700 antialiased">
      <div className="mx-auto">
        <header className="navbar-background border-b border-black px-20">
          <div className="flex items-center justify-between py-5">
            <h1 className="text-3xl font-bold text-gray-900">
              <Image
                src="/assets/images/logo-mobile-pantip-white.png"
                alt="Sentry"
                width={90}
                height={90}
              />
            </h1>
            <div className="rounded-full border border-gray-300 bg-white p-2 px-10">
              <nav>
                <ul className="flex flex-wrap gap-x-10 text-sm">
                  {props.leftNav}
                </ul>
              </nav>
            </div>
            <div className="flex flex-row items-center gap-5  rounded-full border border-gray-300 bg-white p-2 px-3">
              <FaBars size={20} />
              <FaUserCircle size={30} />
            </div>
          </div>
        </header>
        <header className="navbar-background flex items-center justify-start border-b border-black p-3 px-20">
          <nav>
            <ul className="flex flex-wrap gap-20 text-xl">{props.menuNav}</ul>
          </nav>

          <button
            type="button"
            className="ml-auto rounded-full bg-white px-4 py-2 font-bold text-gray-700 hover:bg-gray-600"
            aria-label="Navigate forward"
          >
            <FaAnglesRight aria-hidden="true" />
          </button>
        </header>

        <main className="px-20">{props.children}</main>

        <footer
          className="flex flex-col gap-5 px-20 py-8 text-sm text-white"
          style={{ fontSize: '14px', backgroundColor: '#353156' }}
        >
          <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-col gap-2 text-start">
              <h5>กฎ กติกาและมารยาท</h5>
              <h5>คำแนะนำการโพสต์</h5>
              <h5>นโยบายเกี่ยวกับข้อมูลส่วนบุคคล</h5>
              <h5>สิทธิ์การใช้งานของสมาชิก</h5>
              <h5>ติดต่อทีมงาน Pantip</h5>
              <h5>ติดต่อลงโฆษณา</h5>
              <h5>ร่วมงานกับ Ph5ntip</h5>
              <h5>Download app Pantip</h5>
              <h5>Pantip Certified Developer</h5>
            </div>
            <div className="flex flex-col text-start">
              <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>
                <b>แท็กฮิต</b>
              </h3>
              <h5>ห้องสมุด</h5>
              <h5>บลูแพลนเน็ต</h5>
              <h5>ชายคา</h5>
              <h5>เฉลิมไทย</h5>
              <h5>กรีนโซน</h5>
              <h5>กล้อง</h5>
              <h5>แก็ดเจ็ด </h5>
              <h5>ไกลบ้าน</h5>
              <h5>ถนนนักเขียน</h5>
            </div>
            <div className="flex flex-col gap-2 text-start">
              <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>
                <b>หมวดหมู่</b>
              </h3>
              <h5>ห้องสมุด</h5>
              <h5>บลูแพลนเน็ต</h5>
              <h5>ชายคา</h5>
              <h5>เฉลิมไทย</h5>
              <h5>กรีนโซน</h5>
              <h5>กล้อง</h5>
              <h5>แก็ดเจ็ด </h5>
              <h5>ไกลบ้าน</h5>
            </div>
          </div>
          <Divider color="black" />
          <div className="flex flex-row items-center justify-between">
            <a href="/">
              © Copyright {new Date().getFullYear()} {AppConfig.name}.
            </a>
            <div>
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
