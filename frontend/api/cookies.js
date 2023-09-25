import Cookies from "js-cookie";
export function getUserIdCookie(){
    const Cookie=Cookies.get('UserId');
    if(Cookie){
        return Cookie
    }
    return 'Null'
}

export function setCookies(token){
    Cookies.set('UserId',token)
}