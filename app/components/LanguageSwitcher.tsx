"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import i18nConfig from "../../i18n";

const languages = [
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "zh-CN", label: "中文", flag: "🇨🇳" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "id", label: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "ms", label: "Bahasa Melayu", flag: "🇲🇾" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const segments = pathname.split("/");
  const currentLocale = i18nConfig.locales.includes(segments[1]) ? segments[1] : i18nConfig.defaultLocale;

  const changeLanguage = (lang: string) => {
    let newPath = pathname;
    if (i18nConfig.locales.includes(segments[1])) {
      newPath = "/" + lang + pathname.substring(3);
    } else {
      newPath = "/" + lang + pathname;
    }
    router.push(newPath + (searchParams ? "?" + searchParams.toString() : ""));
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => changeLanguage(language.code)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            padding: "0",
          }}
          title={language.label}
        >
          {language.flag}
        </button>
      ))}
    </div>
  );
}
