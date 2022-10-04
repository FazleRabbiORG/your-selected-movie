import Image from "next/image";
import Link from "next/link";
import styles from "../styles/MovieCard.module.css";

function MovieCard({ movie }) {
  const { movieName, director, rating, slug } = movie.fields;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          alt="Movie thambnail image"
          src={`https:${movie.fields.image.fields.file.url}`}
          width={movie.fields.image.fields.file.details.image.width}
          height={movie.fields.image.fields.file.details.image.height}
        />
      </div>
      <div className={styles.title}>
        <h1>{movieName}</h1>
        <h3>{rating}/10</h3>
      </div>
      <div className={styles.bottom}>
        <h2>{director}</h2>
        <Link href={`/movies/${slug}`}> See Details </Link>
      </div>
    </div>
  );
}

export default MovieCard;
