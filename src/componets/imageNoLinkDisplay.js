const ImageNoLinkDisplay = ({
  alt = "",
  src = "",
  className = "inline-block p-1",
  ...rest
}) => {
  let awsSrc = "https://d1oycyo1rfoi7d.cloudfront.net/" + src;

  return (
    <>
      <img alt={alt} src={awsSrc} className={className} />
    </>
  );
};

export { ImageNoLinkDisplay };
