import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Link, useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {postCheckAccount} from "services/authService"
import {messageAlert} from "../../helper/messageAlert";
import ClipLoader from "react-spinners/ClipLoader";



export default function Login() {
    const {t} = useTranslation();

    let history = useHistory();

    const regexEmailPattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [loading, setLoading] = useState(false)
    const {register, formState: {errors}, handleSubmit} = useForm();

    const mySubmitHandler = (event) => {
        event.preventDefault();
    }

    const onSubmit = data => {
        setLoading(true);

        const timer = setTimeout(() => {
            let isLogin = postCheckAccount(data);
            if (!isLogin) {
                messageAlert({
                    icon: 'error',
                    text: t("msj_login_fail"),
                    title: 'Oops!'
                })
                setLoading(false);

                return;
            }

            history.replace(`/admin/dashboard`);
        }, 2000);
        return () => clearTimeout(timer);

    }


    return (

        <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                    <div
                        className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                        <div className="rounded-t mb-0 px-6 py-6">
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <div className="text-blueGray-400 text-center mb-3 font-bold">
                                <img src={require("assets/img/logo.png").default} style={{width: '100%'}}
                                     alt="..."/>
                                <small>{t("label_login")}</small>
                            </div>
                            <form onSubmit={mySubmitHandler}>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="username">
                                        {t("label_username")}
                                    </label>
                                    <input
                                        type="email" name="username"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        {...register("username", {
                                            required: t("required_username"),
                                            pattern: {
                                                value: regexEmailPattern,
                                                message: t("required_username_mail")
                                            }
                                        })}

                                        placeholder={t("placeholder_username")}
                                    />
                                    <small className="text-red-500 text-right font-bold">{errors?.username && errors?.username.message}</small>
                                </div>

                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="password"
                                    >
                                        {t("label_password")}
                                    </label>
                                    <input
                                        type="password" name="password"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        {...register("password", {required: t("required_password")})}
                                        placeholder={t("placeholder_password")}
                                    />
                                    <small className="text-red-500 text-right font-bold">{errors?.password && errors?.password.message}</small>
                                </div>
                                <div>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            id="customCheckLogin"
                                            type="checkbox"
                                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                        />
                                        <span className="ml-2 text-sm font-semibold text-blueGray-600">
                       {t("label_rememberme")}
                      </span>
                                    </label>
                                </div>

                                <div className="text-center mt-6">

                                    {!loading &&
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="button" onClick={handleSubmit(onSubmit)}
                                            disabled={loading}>
                                            {t("button_sign_in")}
                                        </button>
                                    }

                                    <ClipLoader
                                        color="#00a5b9"
                                        loading={loading}
                                        size={20}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />

                                </div>

                                <Link to="/auth/forgot-password" className="text-blueGray-200">

                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                       {t("label_forgot_password")}
                      </span>

                                </Link>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}
