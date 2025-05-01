"use client";

import { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const createQueryString = useCallback(
    (params: Record<string, string>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());
      
      Object.entries(params).forEach(([name, value]) => {
        if (value === null || value === undefined || value === '') {
          newSearchParams.delete(name);
        } else {
          newSearchParams.set(name, value);
        }
      });
      
      return newSearchParams.toString();
    },
    [searchParams]
  );
  
  const setQueryParam = useCallback(
    (name: string, value: string) => {
      router.push(`${pathname}?${createQueryString({ [name]: value })}`);
    },
    [router, pathname, createQueryString]
  );
  
  const getQueryParam = useCallback(
    (name: string) => {
      return searchParams?.get(name) || '';
    },
    [searchParams]
  );
  
  return {
    setQueryParam,
    getQueryParam,
    createQueryString,
  };
}