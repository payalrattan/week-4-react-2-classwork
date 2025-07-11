
import { AstronomyPOD } from "@/components/astronomyPOD/AstronomyPOD";

export default function APODPage() {
    const title = "Astronomy Picture of the Day";
  return (
    <div>
        <h1>{title}</h1>
      <AstronomyPOD />
    </div>
  );
}
