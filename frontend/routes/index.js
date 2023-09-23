const routes = {
  HOME: "/",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  PATIENT_HOME: "/p",
  DOCTORS: "/p/doctors",
  REPORTS: "/p/reports",
};

export const protectedRoutes = [routes.HOME];

export default routes;
