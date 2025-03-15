"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import i18nConfig from "../../i18n";
import { useState, useEffect } from "react";

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
  { code: "ar", label: "العربية", flag: "🇸🇦" }
];

export default function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const segments = pathname.split("/");
  const currentLocale = i18nConfig.locales.includes(segments[1]) ? segments[1] : i18nConfig.defaultLocale;
  const [selectedLang, setSelectedLang] = useState(currentLocale);

  useEffect(() => {
    setSelectedLang(currentLocale);
  }, [currentLocale]);

  const changeLanguage = (lang: string) => {
    setSelectedLang(lang);

    // pathname이 "/" (루트)인지, 또는 "/ko", "/en" 같은 언어 경로인지 판별
    const isRootPath = (pathname === "/" || pathname === "");

    let newPath = "";
    if (isRootPath) {
      // 루트 경로라면 "/ko", "/en" 등으로 이동
      newPath = `/${lang}`;
    } else if (i18nConfig.locales.includes(segments[1])) {
      // 이미 언어가 포함된 경로 => "/ko/..." 형태
      // segments[1] 길이 + 1(슬래시)만큼 substring 하여 뒤 경로 추출
      // 예: pathname === "/ko/lotto" → segments[1] === "ko" → substring(3) → "/lotto"
      newPath = `/${lang}${pathname.substring(segments[1].length + 1)}`;
    } else {
      // 언어 없는 일반 경로 => "/lotto" 등
      newPath = `/${lang}${pathname}`;
    }

    // 쿼리 파라미터가 있다면 붙여준다
    const queryString = searchParams ? "?" + searchParams.toString() : "";
    router.push(newPath + queryString);
  };

  return (
    <select
      value={selectedLang}
      onChange={(e) => changeLanguage(e.target.value)}
      className="border rounded px-2 py-1 text-sm"
    >
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.flag} {language.label}
        </option>
      ))}
    </select>
  );
}
