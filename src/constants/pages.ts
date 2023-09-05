const pagePaths = {
  HOME_PAGE: '/',
  LOGIN_PAGE: '/login',
  CART_PAGE: '/cart',
  ABOUT_PAGE: '/about',
  ORDER_PAGE: '/order',
} as const;

export type PagePaths = typeof pagePaths;
export const Pages: PagePaths = pagePaths;
