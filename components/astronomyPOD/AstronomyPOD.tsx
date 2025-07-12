import styles from "./astronomyPOD.module.css";
import { NASA_URLs } from "@/data/nasaApi/nasaApiUrls";
import { Image } from "@/components/image/Image";

export async function AstronomyPOD() {
  const nasaResponse = await fetch(`${NASA_URLs.astronomyPicOfTheDay}`);
  const nasaData = await nasaResponse.json();
  console.log("NASA Data:", nasaData);
  
  return (
    
    <div className={styles.podContainer}>
      <h1 className={styles.podTitle}>{nasaData.title}</h1>

      <Image
        imgURL={nasaData.url}
        title={nasaData.title}
        alt={nasaData.title}
        appearance={styles.podImage}
        explanation={nasaData.explanation}
      />
    </div>
  );
}
