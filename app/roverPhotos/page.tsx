
import { RoverPhotos } from "@/components/roverPhotos/RoverPhotos";

export default function RoverPage() {
    const title = "Mars Rover Photos";
  return (
    <div>
        <h1>{title}</h1>
       <RoverPhotos />
    </div>
  );
}
