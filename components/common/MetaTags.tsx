type BlogMetaTagsProps = {
  title: string;
  subtitle: string;
  slug: string;
  coverImage: {
    fields: {
      file: {
        url: string;
      };
    };
  };
};

export const BlogMetaTags: React.FC<BlogMetaTagsProps> = ({
  title,
  subtitle,
  slug,
  coverImage,
}: BlogMetaTagsProps) => {
  return (
    <>
      <title>{title} | Jorge Pasco Blog</title>
      <meta
        name="keyword"
        content="portfolio, javascript, developer, engineer, software, backend, frontend"
      />
      <meta name="description" content={subtitle} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={`${title} | Jorge Pasco Blog`} />
      <meta property="og:description" content={subtitle} />
      <meta
        property="og:url"
        content={`https://www.jorgepasco.me/blog/posts/${slug}`}
      />
      <meta property="og:type" content="blog.post" />
      <meta
        property="og:image"
        content={`https:${coverImage?.fields.file.url}`}
      />
      <meta property="og:image:alt" content="Blog Post Cover" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://www.jorgepasco.me/blog/posts/${slug}`}
      />
      <meta property="twitter:title" content={`${title} | Jorge Pasco Blog`} />
      <meta property="twitter:description" content={subtitle} />
      <meta
        property="twitter:image"
        content={`https:${coverImage?.fields.file.url}`}
      />
    </>
  );
};
