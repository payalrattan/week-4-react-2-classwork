type imageProps = {
  title: string;
  explanation: string;
  imgURL: string;
  date: string;
  alt: string;
  appearance: string;
};


export const Image = ({ title, explanation, imgURL, date, alt, appearance }: imageProps) => {
  return (
    <div>
      <img src={imgURL} alt={alt} className={appearance}/>
      <h2>{title}</h2>
      <p>{explanation}</p>
      <p>{date}</p>

      
    </div>
  );
};
