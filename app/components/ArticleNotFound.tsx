import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Link from "next/link";

export default async function ArticleNotFound({ lang }: { lang: Locale }) {
    const t = await getDictionary(lang);
    
    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    {t.articleNotFound.title}
                </h1>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    {t.articleNotFound.description}
                </p>
                <Link 
                    href={`/${lang}`} 
                    className="inline-block text-blue-500 hover:text-blue-600 transition-colors underline"
                >
                    {t.articleNotFound.home}
                </Link>
            </div>
        </div>
    );
}