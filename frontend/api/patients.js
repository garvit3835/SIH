import axios from "axios";
import { getUserIdCookie, setCookies } from "./cookies";

export const login = (username, password) => {
  axios({
    method: "post",
    url: getURL("/patients/login"),
    data: {
      username: username,
      password: password,
    },
  })
    .then((ele) => {
      if (ele) {
        return ele;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const credSign = (email, password) => {
  axios({
    method: "post",
    url: getURL("/patients/signup/creds"),
    data: {
      email: email,
      password: password,
    },
  })
    .then((ele) => {
      setCookies(ele.data.token);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const infoSign = ({
  name,
  phone,
  family,
  policy,
  address,
  location,
  diseases,
}) => {
  axios({
    method: "post",
    url: getURL("/patients/signup/info"),
    data: {
        name : name,
        phone : phone,
        family : family,
        policy : policy,
        address : address,
        location : location,
        diseases : diseases,
    },
    headers: {
      Authorization: `Bearer ${getUserIdCookie}`,
    },
  })
    .then((ele) => {
      console.log(ele);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDetails = ()=>{
    axios({
        method: "get",
        url: getURL("/patients/details/all"),
        headers: {
          Authorization: `Bearer ${getUserIdCookie}`,
        },
      })
        .then((ele) => {
          console.log(ele);
        })
        .catch((err) => {
          console.log(err);
        });
}


