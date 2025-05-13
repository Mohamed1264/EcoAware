import logo from '../logo.png'
import logoGray from '../LogoGray.png'
import logoAmber from '../logoAmber (1).png'
import logoBlue from '../logoBlue.png'
import { useLocation } from 'react-router-dom'
import { footerTexts } from '../data/footerTranslations'
import { useContext } from 'react'
import { useLanguage } from '../context/LanguageContext';

const assets = {
    '/': {
        logo: logoGray,
        navBg: 'bg-gray-100',
        navLinkColor: 'text-gray-500',
        textColor: 'text-gray-700',
        border: 'border-gray-700'
    },
    '/forests': {
        logo: logo,
        navBg: 'bg-green-100',
        navLinkColor: 'text-green-500',
        textColor: 'text-green-700',
        border: 'border-green-700'
    },
    '/wetlands': {
        logo: logo,
        navBg: 'bg-lime-100',
        navLinkColor: 'text-lime-500',
        textColor: 'text-lime-700',
        border: 'border-lime-700'
    },
    '/water': {
        logo: logoBlue,
        navBg: 'bg-blue-100',
        navLinkColor: 'text-blue-500',
        textColor: 'text-blue-700',
        border: 'border-blue-700'
    },
    '/funny': {
        logo: logoAmber,
        navBg: 'bg-amber-100',
        navLinkColor: 'text-amber-500',
        textColor: 'text-amber-700',
        border: 'border-amber-700'
    },
}

export default function Footer() {
    const location = useLocation()
    const firstWord = location.pathname.split("/")[1]
    const active = assets[`/${firstWord}`]
    const { language } = useLanguage();
    const texts = footerTexts[language] // Get texts for current language

    return (
        <footer className={`${active.navBg} rounded-lg shadow-lg ${active.textColor} mt-8 mb-0 relative bottom-0`}>
            <div className="w-full max-w-screen-xl mx-auto p-6 md:py-8">
                <div className="md:flex md:justify-between gap-10">
                    <div className='mb-6 md:mb-0 md:w-1/3'>
                        <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={active.logo} className={'size-14 2xl:size-20'} alt="EcoAware Logo" />
                            <span className="self-center text-2xl 2xl:text-4xl font-bold whitespace-nowrap">
                                {texts.title}
                            </span>
                        </a>
                        <p className={`pl-7 text-sm 2xl:text-xl font-semibold ${language === 'ar' ? 'text-right' : ''}`}>
                            {texts.description}
                        </p>
                    </div>
                    <div className={`grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 md:w-2/3 ${language === 'ar' ? 'text-right' : ''}`}>
                        <div>
                            <h2 className={`mb-3 text-lg 2xl:text-2xl font-semibold ${active.textColor} uppercase`}>
                                {texts.quickLinks}
                            </h2>
                            <ul className={`space-y-2 2xl:text-xl font-medium ${active.navLinkColor}`}>
                                <li>
                                    <a href="/forests" className="hover:underline transition duration-300">
                                        {texts.forests}
                                    </a>
                                </li>
                                <li>
                                    <a href="/wetlands" className="hover:underline transition duration-300">
                                        {texts.wetlands}
                                    </a>
                                </li>
                                <li>
                                    <a href="/water" className="hover:underline transition duration-300">
                                        {texts.water}
                                    </a>
                                </li>
                                <li>
                                    <a href="/funny" className="hover:underline transition duration-300">
                                        {texts.funny}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className={`mb-3 text-lg 2xl:text-2xl font-semibold ${active.textColor} uppercase`}>
                                {language === 'en' ? 'Legal' : language === 'fr' ? 'Légal' : 'قانوني'}
                            </h2>
                            <ul className={`space-y-2 2xl:text-xl font-medium ${active.navLinkColor}`}>
                                <li>
                                    <a href="#" className="hover:underline transition duration-300">
                                        {language === 'en' ? 'Privacy Policy' : language === 'fr' ? 'Politique de confidentialité' : 'سياسة الخصوصية'}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline transition duration-300">
                                        {language === 'en' ? 'Terms & Conditions' : language === 'fr' ? 'Conditions générales' : 'الشروط والأحكام'}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className={`my-6 ${active.border} sm:mx-auto lg:my-8`} />
                <div className={`sm:flex sm:items-center sm:justify-between ${active.textColor} font-medium text-sm 2xl:text-xl`}>
                    <span className={`block text-center mb-4 sm:mb-0 ${language === 'ar' ? 'text-right' : ''}`}>
                        {texts.disclaimer}
                    </span>
                    <span className={`block text-center ${language === 'ar' ? 'text-right' : ''}`}>
                        {texts.copyright}
                    </span>
                </div>
            </div>
        </footer>
    )
}