import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "movieName" });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const res = await client.getEntries({
    content_type: "movieName",
    "fields.slug": slug,
  });

  return {
    props: {
      data: res.items[0],
      validate: 1,
    },
  };
};

function slug({ data }) {
  const { movieName, director, rating, image, releaseDate, details } =
    data.fields;
  return (
    <div>
      <h1>{movieName}</h1>
      <Image
        alt="Movie thambnail"
        src={`https:${image.fields.file.url}`}
        width={image.fields.file.details.image.width}
        height={image.fields.file.details.image.height}
      />

      <div>{documentToReactComponents(details)}</div>

      <h3>Director : {director}</h3>
      <h3>Rating : {rating}</h3>
      <h3>Release Date : {releaseDate}/10</h3>
    </div>
  );
}

export default slug;
