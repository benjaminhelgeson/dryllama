
const TitleDisplay = ({
	title="",
	goTo=false,
	...rest
}) => {
	if (goTo) {
		return (
			<div className="my-5 text-2xl">
				<a href={goTo}>{title}</a>
		    </div>
	    );
	} else {
		return (
			<div className="my-5 text-2xl">{title}</div>
	    );
	}
}

export {
	TitleDisplay
}


