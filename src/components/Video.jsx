import React from 'react'
import styles from "./video.module.css"
import Image from "next/image";
import Underlined from './Underlined';

const Video = ({
  title_l1 = "Luggage ",
  title_l2 = "of",
  title_l3 = "fame",
  video = "https://www.goyard.com/media/video/homepage/2023/08/desktop/Bloc-video-1-luggage-of-fame-desktop.mp4",
  pl1 = "ELECTIVE AFFINITIES",
  pl2 = "SINCE 1853",
  isLoading = false,
  text = "",
}) => {
  return (
    <div className={styles.page}>
      <video className={styles.vid} src={video} autoPlay muted></video>
      <div className={styles.text}>
        <h2>
          {title_l1} <br /> {title_l2} <br />
          {title_l3}
        </h2>
        <p>
          {pl1}
          <br /> {pl2}
        </p>
        {isLoading && <Underlined text={text} />}
      </div>
      {!isLoading &&
      <Image
        alt="dog"
        className={styles.img}
        src="/dog.gif"
        width={150}
        height={150}
      />}
    </div>
  );
};

export default Video