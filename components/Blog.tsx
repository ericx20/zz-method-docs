import { getPagesUnderRoute } from "nextra/context";
// import filterRouteLocale from "nextra/filter-route-locale";
import Link from "next/link";
import { useRouter } from "nextra/hooks";

export default function BlogIndex() {
  const { locale } = useRouter();
  return getPagesUnderRoute(`/${locale}/blog`).map((page: any) => {
    return (
      <div key={page.route} className="_mb-10">
        <h3>
          <Link
            href={page.route}
            style={{ color: "inherit", textDecoration: "none" }}
            className="_block _font-semibold _mt-8 _text-2xl"
          >
            {page.meta?.title || page.frontMatter?.title || page.name}
          </Link>
        </h3>
        {page.frontMatter?.date ? (
          <p className="_opacity-80 _text-sm">{page.frontMatter.date}</p>
        ) : null}
        <p className="_mt-5">
          {page.frontMatter?.description}{" "}
          <span className="inline-block">
            <Link
              href={page.route}
              className="_text-[color:hsl(var(--nextra-primary-hue),100%,50%)] _underline _underline-offset-2 _decoration-from-font"
            >
              {"Read →"}
            </Link>
          </span>
        </p>
      </div>
    );
  });
}
