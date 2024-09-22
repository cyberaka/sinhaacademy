export const settings = {
  name: process.env.NEXT_PUBLIC_REPO,
  logo: process.env.NEXT_PUBLIC_LOGO_URL,
  loginCoverImage: process.env.NEXT_PUBLIC_LOGIN_COVER_IMAGE_URL,
  primaryColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR,
  secondaryColor: process.env.NEXT_PUBLIC_SECONDARY_COLOR,
  backendURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  footerURL: process.env.NEXT_PUBLIC_PROJECT_URL,
};

export const permissions = [
  {
    pathname: '/dashboard',
    userRole: ['superadmin'],
  },
  {
    pathname: '/settings',
    userRole: ['superadmin'],
  },
  {
    pathname: '/tenants',
    userRole: ['superadmin'],
  },
  {
    pathname: '/managers',
    userRole: ['superadmin'],
  },
  {
    pathname: '/properties',
    userRole: ['superadmin'],
  },
];
