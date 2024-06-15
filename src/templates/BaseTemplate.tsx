import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { AppConfig } from '@/utils/AppConfig';
import { FaUserCircle, FaBars, FaFacebookSquare } from 'react-icons/fa';
import { FaAnglesRight } from 'react-icons/fa6';
import { TiSocialInstagram } from 'react-icons/ti';
import { Divider } from '@mui/material';
const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  children: React.ReactNode;
  menuNav?: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full text-gray-700 antialiased">
      <div className="mx-auto">
        <header className="border-b border-gray-300 navbar-background pr-20 pl-20">
          <div className="pb-8 pt-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">
              <Image
                src="/assets/images/logo-mobile-pantip-white.png"
                alt="Sentry"
                width={130}
                height={110}
              />
            </h1>
            <div className="bg-white border border-gray-300 rounded-full p-5 pl-10 pr-10">
              <nav>
                <ul className="flex flex-wrap gap-x-10 text-xl">
                  {props.leftNav}
                </ul>
              </nav>
            </div>
            <div className="bg-white border border-gray-300 rounded-full  items-center p-2 pl-5 pr-5 flex flex-row gap-5">
              <FaBars size={30} />
              <FaUserCircle size={40} />
            </div>
          </div>
        </header>
        <header className="border-b border-gray-300 navbar-background p-5 pr-20 pl-20 flex justify-start items-center">
          <nav>
            <ul className="flex flex-wrap gap-20 text-xl">{props.menuNav}</ul>
          </nav>

          <button
            type="button"
            className="ml-auto bg-white text-gray-700 font-bold py-2 px-4 rounded-full hover:bg-gray-600"
            aria-label="Navigate forward"
          >
            <FaAnglesRight aria-hidden="true" />
          </button>
        </header>

        <main className="pr-20 pl-20">{props.children}</main>

        <footer
          className="border-t border-gray-300 py-8 text-sm text-white flex flex-col gap-5 pr-20 pl-20"
          style={{ fontSize: '16px' }}
        >
          <div className="flex flex-row gap-10 justify-between">
            <div className="flex flex-col text-start gap-2">
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
              <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>
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
            <div className="flex flex-col text-start gap-2">
              <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>
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
          <Divider color="white" />
          <div className="flex flex-row justify-between items-center">
            <a href="/">
              © Copyright {new Date().getFullYear()} {AppConfig.name}.
              {` ${t('made_with')} `}
            </a>
            <div>
              <a href="/">เงื่อนไข</a>
              <a href="/">แผนผังเว็บไซต์ </a>
              <a href="/">ความเป็นส่วนตัว </a>
            </div>
            <div className="flex gap-2 items-center">
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
