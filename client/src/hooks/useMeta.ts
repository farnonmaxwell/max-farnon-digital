import { useEffect } from "react";

type MetaOptions = {
  title: string;
  description?: string;
  path?: string;
};

function upsertMeta(selector: string, attr: string, name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useMeta({ title, description, path }: MetaOptions) {
  useEffect(() => {
    const fullTitle = title.includes("Max Farnon Digital")
      ? title
      : `${title}, Max Farnon Digital`;
    document.title = fullTitle;

    if (description) {
      upsertMeta('meta[name="description"]', "name", "description", description);
      upsertMeta('meta[property="og:description"]', "property", "og:description", description);
      upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    }
    upsertMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);

    if (path) {
      const url = `https://maxfarnondigital.com${path}`;
      upsertMeta('meta[property="og:url"]', "property", "og:url", url);
      let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = url;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [title, description, path]);
}
