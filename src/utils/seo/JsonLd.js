/**
 * Renders one or more JSON-LD blocks for Google / AI crawlers.
 * Pass a single object or an array of schema objects.
 */
export default function JsonLd({ data }) {
  if (!data) return null;

  const items = Array.isArray(data) ? data.filter(Boolean) : [data];
  if (!items.length) return null;

  return (
    <>
      {items.map((item, index) => (
        <script
          key={item["@id"] || item["@type"] || index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item),
          }}
        />
      ))}
    </>
  );
}
