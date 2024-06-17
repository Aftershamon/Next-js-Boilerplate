'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBlogItems } from '@/redux/store/blogSlice';
import { fetchMenuItems } from '@/redux/store/menuItemSlice';
import type { AppDispatch, RootState } from '@/redux/store/store';
import { fetchTagHits } from '@/redux/store/tagHitSlice';

const MenuFooter = () => {
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

  const slicedMenus = menus.slice(0, 10);

  return (
    <>
      {slicedMenus.map((menuItem) => (
        <Link
          key={menuItem.name}
          href={menuItem.link_url}
          passHref
          className="hover:text-white"
        >
          <h5 className="hover:text-white hover:underline">{menuItem.name}</h5>
        </Link>
      ))}
    </>
  );
};

const BlogItem = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogItems, loading, error } = useSelector(
    (state: RootState) => state.blog,
  );

  useEffect(() => {
    dispatch(fetchBlogItems());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!blogItems || blogItems.length === 0) return null;

  return (
    <>
      {blogItems.map((menuItem) => (
        <Link
          key={menuItem.title}
          href={menuItem.url}
          passHref
          className="hover:text-white"
        >
          <h5 className="hover:text-white hover:underline">{menuItem.title}</h5>
        </Link>
      ))}
    </>
  );
};

const TagItem = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tagHits, loading, error } = useSelector(
    (state: RootState) => state.tagHits,
  );

  useEffect(() => {
    dispatch(fetchTagHits());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!tagHits || tagHits.length === 0) return null;

  return (
    <>
      {tagHits.map((tagHit) => (
        <Link
          key={tagHit.name}
          href={`https://pantip.com/tag/${tagHit.slug}`}
          passHref
          className="hover:text-white"
        >
          <h5 className="hover:text-white hover:underline"> {tagHit.name}</h5>
        </Link>
      ))}
    </>
  );
};

export { BlogItem, MenuFooter, TagItem };
