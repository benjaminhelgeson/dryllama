const ImageDisplay = ({
  alt = "",
  src = "",
  className = "inline-block h-48 p-1",
  href = "",
  ...rest
}) => {
  let awsSrc = "https://d1oycyo1rfoi7d.cloudfront.net/" + src;
  let hrefSrc = "https://d1oycyo1rfoi7d.cloudfront.net/" + href;

  return (
    <>
      <a href={hrefSrc}>
        <img alt={alt} loading="lazy" src={awsSrc} className={className} />
      </a>
    </>
  );
};

export { ImageDisplay };
