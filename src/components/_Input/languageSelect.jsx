import React from "react";

import i18next from "i18next";



const languageMap = {
  en: { label: "English", value: "en", active: true },
  es: { label: "Español", value: "es", active: false },

};

document.body.dir = 'ltr';

const LanguageSelect = () => {
  const selected = localStorage.getItem("i18nextLng") || "en";

  return ( <div>
    <select defaultValue={selected}
        onChange={(e) => {
             i18next.changeLanguage(e.target.value);
             console.log(e.target.value);
                    }}>
        {Object.keys(languageMap)?.map((item, i )=> (
          <option key={i} selected={selected === languageMap[item].value} value={languageMap[item].value}>{languageMap[item].label}</option>
        ))}
    </select>
    </div>
  );
}

export default LanguageSelect;
