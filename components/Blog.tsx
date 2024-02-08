import { getPagesUnderRoute } from "nextra/context";
import filterRouteLocale from "nextra/filter-route-locale";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BlogIndex() {
  const { locale, defaultLocale } = useRouter();
  return filterRouteLocale(
    getPagesUnderRoute("/blog"),
    locale,
    defaultLocale
  ).map((page: any) => {
    return (
      <div key={page.route} className="nx-mb-10">
        <h3>
          <Link
            href={page.route}
            style={{ color: "inherit", textDecoration: "none" }}
            className="nx-block nx-font-semibold nx-mt-8 nx-text-2xl"
          >
            {page.meta?.title || page.frontMatter?.title || page.name}
          </Link>
        </h3>
        {page.frontMatter?.date ? (
          <p className="nx-opacity-80 nx-text-sm">{page.frontMatter.date}</p>
        ) : null}
        <p className="nx-mt-5">
          {page.frontMatter?.description}{" "}
          <span className="inline-block">
            <Link
              href={page.route}
              className="nx-text-[color:hsl(var(--nextra-primary-hue),100%,50%)] nx-underline nx-underline-offset-2 nx-decoration-from-font"
            >
              {"Read →"}
            </Link>
          </span>
        </p>
      </div>
    );
  });
}
