import axios from "axios";
import { getUserIdCookie, setCookies } from "./cookies";

export const login = (username, password) => {
  axios({
    method: "post",
    url: getURL("/doctors/login"),
    data: {
      username: username,
      password: password,
    },
  })
    .then((res) => {
      if(res.status == 200){
        setCookies(res.data.token,'doctorID');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const credSign = (email, password) => {
  axios({
    method: "post",
    url: getURL("/doctors/signup/creds"),
    data: {
      email: email,
      password: password,
    },
  })
    .then((res) => {
      if(res.status == 201){
        setCookies(res.data.token,'doctorID');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const infoSign = ({
  name, number, latitude, longitude, specialization, rating, is_checkedin
}) => {
  axios({
    method: "post",
    url: getURL("/doctors/signup/info"),
    data: {
      name: name,
      number: number,
      specialization: specialization,
      rating: rating,
      is_checkedin : is_checkedin,
      latitude : latitude,
      longitude : longitude,
    },
    headers: {
      Authorization: `Bearer ${getUserIdCookie('doctorID')}`,
    },
  })
    .then((res) => {
      if(res.status == 200){
        // console.log(res.data.details)
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDetails = () => {
  axios({
    method: "get",
    url: getURL("/doctors/details/all"),
    headers: {
      Authorization: `Bearer ${getUserIdCookie('doctorID')}`,
    },
  })
    .then((res) => {
      if(res.status == 200){
        console.log(res.data.details)
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Appointment = () => {
  axios({
    method: "get",
    url: getURL("/doctors/appointments/current"),
    headers: {
      Authorization: `Bearer ${getUserIdCookie('doctorID')}`,
    },
  })
    .then((res) => {
      if(res.status == 200){
        console.log(res.data.appointments)
      }
    })
    .catch((err) => {
      console.log(err);
    });
};


