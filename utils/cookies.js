/**
 * The getCookies function retrieves and returns an array of cookies from the current browser window.
 * @returns {{name: string, value: string}[]} The function `getCookies` returns an array of objects, where each object represents a
 * cookie. Each object has two properties: `name` (the name of the cookie) and `value` (the value of
 * the cookie).
 */
export const getCookies = () => {
  if (typeof window === "object" && !!window.document.cookie) {
    const decodedCookie = window.document.cookie.split(";");
    let arr = decodedCookie.map((d) => {
      let tmp = d.split("=");
      return { name: tmp[0]?.trim(), value: tmp[1]?.trim() };
    });
    return arr;
  }
  return [];
};

/**
 * The function `getCookie` returns a specific cookie object based on the provided key.
 * @param {string} key - The `key` parameter is a string that represents the name of the cookie you want to
 * retrieve.
 * @returns The `getCookie` function returns the cookie object with the specified key.
 */
export const getCookie = (key) => {
  return getCookies().find((c) => c.name === key);
};

/**
 * The function `deleteCookies` clears all cookies in the current browser window.
 */
export const deleteCookies = () => {
  getCookies().forEach((c) => {
    if (typeof window === "object") {
      window.document.cookie = `${c.name}=${c.value};expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
    }
  });
};

/**
 * The function `deleteCookie` is used to delete a cookie by setting its expiration date to a past
 * date.
 * @param {string} name - The name of the cookie that you want to delete.
 */
export const deleteCookie = (name) => {
  if (typeof window === "object")
    window.document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
};

/**
 * The `setCookie` function sets a cookie in the browser with the provided key-value pair.
 * @param {string} cname - The key parameter is a string that represents the name of the cookie. It is used to
 * identify the cookie when retrieving or updating its value.
 * @param {string} cvalue - The value parameter is the value that you want to set for the cookie. It can be any
 * valid string value.
 * @param {string} expires
 * @param {string} path
 */
export const setCookie = (cname, cvalue, expires, path) => {
  if (typeof window === "object") {
    if (!!cname && !!cvalue) {
      if (!!expires) {
        let d = new Date();
        const exStr = expires.charAt(expires.length - 1);
        if (exStr === "h") {
          d.setTime(d.getTime() + expires * 60 * 60 * 1000);
        } else if (exStr === "m") {
          d.setTime(d.getTime() + expires * 60 * 1000);
        } else if (exStr === "s") {
          d.setTime(d.getTime() + expires * 1000);
        } else if (exStr === "d") {
          d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000);
        }
        if (!!path) {
          window.document.cookie = `${cname}=${cvalue};expires=${d.toUTCString()};path=${path}`;
        } else {
          window.document.cookie = `${cname}=${cvalue};expires=${d.toUTCString()}`;
        }
      } else if (!!path) {
        window.document.cookie = `${cname}=${cvalue};path=${path}`;
      } else {
        window.document.cookie = `${cname}=${cvalue};`;
      }
    }
  }
};
