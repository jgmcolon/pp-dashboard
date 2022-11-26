import React, {useState} from "react";
import {Controller} from 'react-hook-form';
import {useTranslation} from "react-i18next";

import Datetime from "react-datetime";
import Select from "react-select";
import AsyncSelect from 'react-select/async';

export default function CustomInputs(props) {
    const {t} = useTranslation();

    const [error, setError] = useState();

    const {
        format,
        name,
        control,
        isRequired,
        type,

        isLoading,
        isClearable,
        isSearchable,
        loadOptions,
        setValue,
    } = props;


    switch (format || 'input') {
        case 'input':
            return <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor={name}>
                    {t(`label_${name}`)}
                </label>
                <Controller
                    name={name}
                    control={control}
                    defaultValue=""
                    render={({field: {onChange, value}, fieldState: {error}}) => {
                        setError(!!error);
                        return <>
                            <input
                                type={type || 'text'} name={name}
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder={t(`placeholder_${name}`)}

                            />

                            {error ?? error.message}
                        </>
                    }}
                    rules={(isRequired || false) ? {required: `${t(`label_${name}`)} Campo Requerido`} : null}/>
            </div>

        case 'date':
            return <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor={name}>
                    {t(`label_${name}`)}
                </label>
                <Controller
                    name={name}
                    control={control}
                    defaultValue=""
                    render={({field: {onChange, value}, fieldState: {error}}) => {
                        setError(!!error);
                        return <><Datetime
                            closeOnSelect={true}
                            value={value}
                            onChange={onChange}
                            id={name}
                            dateFormat={"DD-MM-YYYY"}
                            timeFormat={false}
                            inputProps={{placeholder: t(`placeholder_${name}`)}}/>
                            {error ?? error.message}
                        </>
                    }}
                    rules={(isRequired || false) ? {required: `${t(`label_${name}`)} Campo Requerido`} : null}/>
            </div>
        case 'select':
            return <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor={name}>
                    {t(`label_${name}`)}
                </label>
                <Controller
                    name={name}
                    control={control}
                    defaultValue=""
                    render={({field: {onChange, value}, fieldState: {error}}) => {
                        setError(!!error);
                        return <>
                            <Select classNamePrefix="select"
                                    isClearable={isClearable || true}
                                    isSearchable={isSearchable || true}
                                    placeholder={t(`label_${name}`)}
                                    getOptionValue={option => option.value}
                                    onChange={e => {
                                        if (setValue !== undefined) {
                                            if (e !== null) setValue(e.value);
                                            else setValue(null);
                                        }

                                        if (e !== null) onChange(e.value);
                                    }}
                                    options={loadOptions}/>
                            <input type="hidden" value={value}/>

                            {error ?? error.message}
                        </>
                    }}
                    rules={(isRequired || false) ? {required: `${t(`label_${name}`)} Campo Requerido`} : null}/>
            </div>

        case 'select-async':
            return <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor={name}>
                    {t(`label_${name}`)}
                </label>
                <Controller
                    name={name}
                    control={control}
                    defaultValue=""
                    render={({field: {onChange, value}, fieldState: {error}}) => {
                        setError(!!error);
                        return <>
                            <AsyncSelect classNamePrefix="select"
                                         isLoading={isLoading}
                                         isClearable={isClearable || true}
                                         isSearchable={isSearchable || true}
                                         name={name}
                                         placeholder={t(`placeholder_${name}`)}
                                         LoadingMessage
                                         onChange={e => {
                                             if (setValue !== undefined) {
                                                 if (e !== null) setValue(e.value);
                                                 else setValue(null);
                                             }

                                             if (e !== null) onChange(e.value);
                                         }}
                                         loadOptions={loadOptions}/>
                            <input type="hidden" value={value}/>
                            {error ?? error.message}
                        </>
                    }}
                    rules={(isRequired || false) ? {required: `${t(`label_${name}`)} Campo Requerido`} : null}/>
            </div>
        case 'textarea':
            return <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor={name}>
                    {t(`label_${name}`)}
                </label>
                <Controller
                    name={name}
                    control={control}
                    defaultValue=""
                    render={({field: {onChange, value}, fieldState: {error}}) => {
                        setError(!!error);
                        return <>
                        <textarea
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            rows="4"></textarea>
                            {error ?? error.message}
                        </>
                    }}
                    rules={(isRequired || false) ? {required: `${t(`label_${name}`)} Campo Requerido`} : null}/>
            </div>
        default:
            return ""

    }
}
