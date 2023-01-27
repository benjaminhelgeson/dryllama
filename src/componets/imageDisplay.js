
const ImageDisplay = ({ 
	alt="",
	src="",
	className='inline-block h-48 p-1',
	href="",
	...rest
}) => {
	let awsSrc = "https://dryllamaimages.s3.amazonaws.com/" + src;
	return (
		<>
	      <a href={href}>
	        <img alt={alt} src={awsSrc} className={className} />
	      </a>			
		</>
	);
}

export {
	ImageDisplay
}