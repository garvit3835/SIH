import axios from "axios";
import { getUserIdCookie, setCookies } from "./cookies";
import { getURL } from "./url";


export const login = (username, password) => {
  axios({
    method: "post",
    url: getURL("/patients/login"),
    data: {
      username: username,
      password: password,
    },
  })
    .then((res) => {
      if(res.status == 201){
        setCookies(res.data.token,'patientID');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const credSign = async(email, password) => {
  console.log(email,password)
  axios({
    method: "post",
    url: getURL("/patients/signup/creds"),
    data: {
      email: email,
      password: password,
    },
  })
    .then((res) => {
      console.log(res.data)
      if(res.status === 200){
        console.log("done")
        setCookies(res.data.token,'patientID');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const infoSign = ({
  name, number, gender, family, address, latitude, longitude
}) => {
  axios({
    method: "post",
    url: getURL("/patients/signup/info"),
    data: {
      name: name,
      number: number,
      family: family,
      address: address,
      latitude : latitude,
      longitude : longitude,
    },
    headers: {
      Authorization: `Bearer ${getUserIdCookie('patientID')}`,
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
    url: getURL("/patients/details/all"),
    headers: {
      Authorization: `Bearer ${getUserIdCookie('patientID')}`,
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

export const familyDetails = () => {
  axios({
    method: "get",
    url: getURL("/patients/details/family"),
    headers: {
      Authorization: `Bearer ${getUserIdCookie('patientID')}`,
    },
  })
    .then((res) => {
      if(res.status == 200){
        console.log(res.data.family)
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const currentAppointment = () => {
  axios({
    method: "get",
    url: getURL("/patients/appointments/current"),
    headers: {
      Authorization: `Bearer ${getUserIdCookie('patientID')}`,
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

export const createAppointment = ({
  d_id,
  h_id,
  desc,
  time,
  emergency,
  status,
  prescription
}) => {
  axios({
    method: "get",
    url: getURL("/patients/appointments/create"),
    headers: {
      Authorization: `Bearer ${getUserIdCookie('patientID')}`,
    },
    data: {
      d_id: d_id,
      h_id: h_id,
      description: desc,
      time: time,
      is_emergency: emergency,
      status: status,
      prescription: prescription,
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
