import Cookies from "js-cookie";
export function getUserIdCookie(id){
    const Cookie=Cookies.get(id);
    if(Cookie){
        return Cookie
    }
    return 'Null'
}

export function setCookies(token,id){
    Cookies.set(id,token)
}