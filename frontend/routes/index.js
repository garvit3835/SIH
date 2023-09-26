const routes = {
  HOME: "/",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  PATIENT_HOME: "/p",
  DOCTORS: "/p/doctors",
  REPORTS: "/p/reports",
  CURRENT_APPOINTMENTS: "/h",
  DOCTOR_DATA: "/h/docData",
  APPOINTMENT_TRACK: "/h/trackAppointments",
  SLOTS: "/d/slots",
  Today_APPOINTMENTS: "/d"
};

export const protectedRoutes = [routes.HOME];

export default routes;
