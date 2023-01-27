
import React, { useState, useEffect } from 'react';
import '../App.css';
import LightGallery from 'lightgallery/react';
import myData from '../data/nashville.json';
import _ from 'lodash';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { ImageDisplay } from '../componets/imageDisplay';
import { TitleDisplay } from '../componets/titleDisplay';

export default function NashvilleScreen() {
	return (		
	  <div className="px-10 mt-2 bg-black text-white">
	    <TitleDisplay
	      title="Nashville, Tennessee"
	    ></TitleDisplay>

	    <LightGallery
	      speed={500}
	      licenseKey="7496AEF8-854E4589-A1F42D35-84B89F15"
	      plugins={[lgThumbnail, lgZoom]}
	      counter={true}
	      download={false}
	      getCaptionFromTitleOrAlt={true}
	    > 
			{_.map(myData?.nashville, data => {
				return(
					<ImageDisplay 
			    		href={data[0].href} 
			    		src={data[0].src}
			    		alt={data[0].alt}
					></ImageDisplay>
				);
			})}
	    </LightGallery>
	  </div>
	);
}