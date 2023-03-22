import { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import ruFlag from '../../assets/lang/lang-ru.png';
import enFlag from '../../assets/lang/lang-en.png';
import deFlag from '../../assets/lang/lang-de.png';

const langs = [
  { name: 'ru', flag: ruFlag },
  { name: 'en', flag: enFlag },
  { name: 'de', flag: deFlag },
];

export const LanguageToggle: FC = () => {
  const { i18n } = useTranslation();
  const [currentLangIndex, setCurrentLangIndex] = useState(
    langs.findIndex(lang => i18n.languages[0] === lang.name)
  );

  useEffect(() => {
    setCurrentLangIndex(
      langs.findIndex(lang => i18n.languages[0] === lang.name)
    );
  }, [i18n.languages]);

  const handleClick = () => {
    const nextLangIndex = (currentLangIndex + 1) % langs.length;
    setCurrentLangIndex(nextLangIndex);
    i18n.changeLanguage(langs[nextLangIndex].name);
  };

  return (
    <button onClick={handleClick} className={'w-10 h-10 lg:w-8 lg:w-8'}>
      <img
        src={langs[currentLangIndex].flag}
        alt={langs[currentLangIndex].name}
      />
    </button>
  );
};
