	
const ImageNoLinkDisplay = ({ 
	alt="",
	src="",
	className='inline-block p-1',
	...rest
}) => {
	let awsSrc = "https://dryllamaimages.s3.amazonaws.com/" + src;

	return (
		<>
	        <img alt={alt} src={awsSrc} className={className} />
		</>
	);
}

export {
	ImageNoLinkDisplay
}