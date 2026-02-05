const FooterBottom = () => (
  <div className="max-w-7xl mx-auto px-4 mt-16 text-sm text-slate-700">
    <p className="mb-2 font-bold text-slate-800">🌎Choose your language</p>
    <div className="flex flex-wrap gap-4 mb-6">
      {[
        "English (US)",
        "German",
        "Spanish",
        "French",
        "Portuguese (Brazil)",
      ].map((lang) => (
        <span key={lang} className="cursor-pointer hover:text-slate-900">
          {lang}
        </span>
      ))}
    </div>

    <div className=" pt-6 flex flex-wrap gap-6">
      {[
        "Terms",
        "Privacy",
        "Status",
        "Security",
        "Do not share my personal information",
      ].map((item) => (
        <span key={item} className="cursor-pointer font-bold hover:text-slate-900">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default FooterBottom;
