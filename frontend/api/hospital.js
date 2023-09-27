import axios from "axios";
import { getUserIdCookie, setCookies } from "./cookies";
import { getURL } from "./url";

export const login = (username, password) => {
  axios({
    method: "post",
    url: getURL("/hospitals/login"),
    data: {
      username: username,
      password: password,
    },
  })
    .then((res) => {
      if(res.status == 200){
        setCookies(res.data.token,'hospitalsID');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const credSignHospital = async(email, password) => {
  axios({
    method: "post",
    url: getURL("/hospitals/signup/creds"),
    data: {
      email: email,
      password: password,
    },
  })
    .then((res) => {
      if(res.status == 201){
        setCookies(res.data.token,'hospitalsID');
        return true
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const infoSign = ({
    name, number, address, latitude, longitude
}) => {
  console.log(name, number, address, latitude, longitude)
  axios({
    method: "post",
    url: getURL("/hospitals/signup/info"),
    data: {
      name: name,
      number: number,
      address: address,
      latitude : latitude,
      longitude : longitude,
    },
    headers: {
      Authorization: `Bearer ${getUserIdCookie('hospitalsID')}`,
    },
  })
    .then((res) => {
      console.log(res)
      if(res.status == 200){
        console.log(res.data.details)
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDetails = () => {
  axios({
    method: "get",
    url: getURL("/hospitals/details/all"),
    headers: {
      Authorization: `Bearer ${getUserIdCookie('hospitalsID')}`,
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

export const getDoctors = () => {
  axios({
    method: "get",
    url: getURL("/hospitals/details/doctors"),
    headers: {
      Authorization: `Bearer ${getUserIdCookie('hospitalsID')}`,
    },
  })
    .then((res) => {
      if(res.status == 200){
        console.log(res.data.doctors)
      }
    })
    .catch((err) => {
      console.log(err);
    });
};


export const addDoctors = (d_id) => {
    axios({
      method: "post",
      url: getURL("/hospitals/add/doctors"),
      headers: {
        Authorization: `Bearer ${getUserIdCookie('hospitalsID')}`,
      },
      data:{
        d_id : d_id
      }
    })
      .then((res) => {
        if(res.status == 201){
          console.log(res.data.doctor)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  