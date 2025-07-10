
"use client";

import { NASA_URLs } from "@/data/nasaApi/nasaApiUrls";
import { Image } from "@/components/image/Image";
import { useEffect, useState } from "react";
import styles from "./roverPhotos.module.css";



export function RoverPhotos() {
  const [marsRover, setMarsRover] = useState({});
  const title = "Mars Rover Photos";

  useEffect(() => {
    async function fetchRoverData() {
      const response = await fetch(NASA_URLs.marsRoverPhoto);
      const data = await response.json();
      setMarsRover(data);
    }
    fetchRoverData();
  }, []);

  return (
    <div className={styles.roverContainer}>
      <h1 className={styles.roverTitle}>{title}</h1>
      <div className={styles.roverGrid}>
        {marsRover.photos && marsRover.photos.map((photo) => (
          <div key={photo.id} className={styles.roverCard}>
            <Image imgURL={photo.img_src} alt={photo.name} />
            <p><b>Rover Id:</b> {photo.id}</p>
            <p><b>Landing date:</b> {photo.rover.landing_date}</p>
            <p><b>Launch date:</b> {photo.rover.launch_date}</p>
            <p><b>Rover Name:</b> {photo.rover.name}</p>
            <p><b>Status:</b> {photo.rover.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
