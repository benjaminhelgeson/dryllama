
import React, { useState, useEffect } from 'react';
import '../App.css';
import { TitleDisplay } from '../componets/titleDisplay';
import { SubtitleDisplay } from '../componets/subtitleDisplay';
import { ImageNoLinkDisplay } from '../componets/imageNoLinkDisplay';

export default function NoPagesScreen() {

	return (
		
      <div className="px-10 mt-2 bg-black text-white">
        <TitleDisplay goTo="/"
          title="Dry Llama"
        ></TitleDisplay>
      
        <SubtitleDisplay
          title="There is nothing for you here."
        ></SubtitleDisplay>
        <div>
          <ImageNoLinkDisplay 
              src="img/mardi_gras/IMG_3434.JPEG"
              alt="There is nothing for you here."
          ></ImageNoLinkDisplay>
        </div>
      </div>
	);
}