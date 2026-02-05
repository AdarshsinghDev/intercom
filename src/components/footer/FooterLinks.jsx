import { footerLinks } from "./footer.data";
const FooterLinks = () => (
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
  {footerLinks.map((col) => (
  <div key={col.title}>
    <h4 className="font-semibold mb-4">{col.title}</h4>

    {col.sections.map((section, i) => (
      <div key={i} className="mb-6">
        {section.title && (
          <p className="font-medium text-sm mb-2">{section.title}</p>
        )}

        <ul className="space-y-2  text-slate-800">
          {section.links.map((link) => (
            <li key={link} className="hover:text-slate-900 cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
))}
  </div>
);

export default FooterLinks;


