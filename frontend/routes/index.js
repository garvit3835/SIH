const routes = {
  HOME: "/",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  DOCTORS: "/doctors",
  REPORTS: "/reports",
};

export const protectedRoutes = [routes.HOME];

export default routes;
