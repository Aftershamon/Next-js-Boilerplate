'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMenuItems } from '@/redux/store/menuItemSlice';
import type { AppDispatch, RootState } from '@/redux/store/store';

const MenuItem = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { menus, loading, error } = useSelector(
    (state: RootState) => state.menu,
  );

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!menus || menus.length === 0) return null;

  return (
    <>
      {menus.map((menuItem) => (
        <li key={menuItem.id} className="pr-5">
          <Link href={menuItem.link_url} passHref>
            <div className="flex flex-col items-center gap-2 border-none text-sm text-gray-300 hover:text-white">
              <Image
                src={menuItem.room_icon_url}
                alt={menuItem.name_en}
                width={30}
                height={30}
              />
              <p>{menuItem.name}</p>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};

export { MenuItem };
