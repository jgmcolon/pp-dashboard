
export const SetLocalStorage = (nameString, data) => {
  window.localStorage.setItem(nameString, JSON.stringify(data));
};

export const SetSessionStorage = (nameString, data) => {
  window.sessionStorage.setItem(nameString, JSON.stringify(data));
};

export const GetLocalStorage = (nameString) => {
  let data = window.localStorage.getItem(nameString);
  return JSON.parse(data);
};

export const GetSessionStorage = (nameString) => {
  let data = window.sessionStorage.getItem(nameString);
  return JSON.parse(data);
};

export const RemoveLocalStorage = (nameString) => {
  window.localStorage.removeItem(nameString);
};

export const RemoveSessionStorage = (nameString) => {
  window.sessionStorage.removeItem(nameString);
};

export const getUsername = () => {

  let data = GetSessionStorage('account');

  return data.username;
}

export const Islogin = () => {
  return window.sessionStorage.getItem('account') ? true : false;
}

export const  Logout = () => {
  window.localStorage.clear();
  window.location.replace('/');
}