import {set, SetSessionStorage} from "helper/DataStorage";

export const postCheckAccount = ({username, password}) => {
    let auth = (username === 'prologin@prologin.com' && password === 'ProLogin123456');

    if (auth) {
        SetSessionStorage('account', {username: username});
    }

    return auth;
};
