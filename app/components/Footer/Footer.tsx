import React from 'react';
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaTelegram } from 'react-icons/fa';

export default async function Footer({ lang }: { lang: Locale }) {
    const t = await getDictionary(lang);

    return (
        <footer className="flex flex-col text-center gap-6 p-10 bg-white dark:bg-gray-900 transition-colors duration-200 text-sm lg:flex-row lg:justify-around border-t border-gray-200 dark:border-gray-800 mt-auto">
            <p>{t.footer.copyright}</p>
            <div className="flex flex-raw gap-4 justify-center whitespace-nowrap">
                <Link href={`/${lang}/blog`} className="hover:underline">{t.footer.links.blog}</Link>
                <Link href={`/${lang}/marine-life`} className="hover:underline">{t.footer.links.marineLife}</Link>
                <Link href={`/${lang}/map`} className="hover:underline">{t.footer.links.map}</Link>
            </div>
            <div className="flex flex-raw gap-4 justify-center">
                <a href="https://instagram.com/diver_egor" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200" />
                </a>
                <a href="https://www.youtube.com/@diversnotes" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FaYoutube className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200" />
                </a>
                <a href="https://t.me/diversnotes" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                    <FaTelegram className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200" />
                </a>
            </div>
        </footer>
    )
}