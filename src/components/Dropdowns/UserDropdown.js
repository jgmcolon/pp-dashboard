import React from "react";
import {createPopper} from "@popperjs/core";
import {Logout, getUsername} from "helper/DataStorage"
import {useTranslation} from "react-i18next";

const UserDropdown = () => {

    const {t} = useTranslation();

    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    return (
        <>
            <a
                className="text-blueGray-500 block"
                href="#user"
                ref={btnDropdownRef}
                onClick={(e) => {
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                <div className="items-center flex">
          <span
              className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
                alt="..."
                className="w-full rounded-full align-middle border-none shadow-lg"
                src={require("assets/img/user_icon.png").default}
            />
          </span>
                </div>
            </a>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                }
            >
                <a
                    href="#user"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                    onClick={(e) => e.preventDefault()}
                >
                    {getUsername()}
                </a>

                <div className="h-0 my-2 border border-solid border-blueGray-100"/>
                <a
                    href="#user"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                    onClick={(e) => {
                        Logout();
                        e.preventDefault()
                    }}>
                     <i className="fas fa-sign-out-alt"></i>
                    {" "} {t("button_sign_out")}
                </a>
            </div>
        </>
    );
};

export default UserDropdown;
