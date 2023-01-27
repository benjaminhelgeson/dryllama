
const ImageDisplay = ({ 
	alt="",
	src="",
	className='inline-block h-48 p-1',
	href="",
	...rest
}) => {
	return (
		<>
	      <a href={href}>
	        <img alt={alt} src={src} className={className} />
	      </a>			
		</>
	);
}

export {
	ImageDisplay
}