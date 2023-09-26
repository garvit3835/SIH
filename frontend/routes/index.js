const routes = {
  HOME: "/",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  PATIENT_HOME: "/p",
  DOCTORS: "/p/doctors",
  REPORTS: "/p/reports",
  CURRENT_APPOINTMENTS: "/d",
  DOCTOR_DATA: "/d/docData",
  APPOINTMENT_TRACK: "/d/trackAppointments",
};

export const protectedRoutes = [routes.HOME];

export default routes;
