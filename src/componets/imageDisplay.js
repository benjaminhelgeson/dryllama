
const ImageDisplay = ({
	alt="",
	src="",
	className='inline-block h-48 p-1',
	href="",
	...rest
}) => {
	let awsSrc = "https://dryllamaimages.s3.amazonaws.com/" + src;
	let hrefSrc = "https://dryllamaimages.s3.amazonaws.com/" + href;

	return (
		<>
	      <a href={hrefSrc}>
	        <img alt={alt} loading="lazy" src={awsSrc} className={className} />
		  </a>
		</>
	);
}

export {
	ImageDisplay
}