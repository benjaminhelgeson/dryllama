import React, { useState, useEffect } from 'react';
import '../App.css';
import { TitleDisplay } from '../componets/titleDisplay';
import { SubtitleDisplay } from '../componets/subtitleDisplay';

export default function AboutScreen() {
	return (		
	  	<div className="px-10 mt-2 bg-black text-white">
		    <TitleDisplay goTo="/"
		      title="Dry Llama"
		    ></TitleDisplay>

		    <SubtitleDisplay
		      subtitle="About Dry Llama"
		    ></SubtitleDisplay>
		    <div className="flex flex-row">
  	    		<div className="flex w-full md:w-3/6 flex-col">
	    			<p className="my-2 flex">My name is Ben. I started this site just to warehouse the pictures I have taken.
	    			Dry llama is a collection of photographs I have taken over the last decade or so while traveling.
			    	They are mostly taken with my camera phone (iPhone 10 + 11) or a Sony a7. Mostly, these pictures
		    		are captures of landscapes, buildings, graffiti, or street covers that seem out of the ordinary.</p>

		    		<p className="my-2 flex">Outside of being bad at photography, I do web development. I largely started
		    		this site to work with React and get some more experience with it and various JS libraries I am
		    		using on the site.</p> 

		    		<p classnName="my-2 flex">I am based out of Austin, Texas at the moment but am originally from
		    		Dallas, Texas. I travel as much as I can to as many places as I can and frequently try to find
		    		various graffiti spots and art museums to check out in the places I go to.</p>

		    		<p className="my-2 flex">Additionally, I like street art, tattoos, terrific views, and art museums.
		    		I like trying to check out new music, new places, and trying new things. I like watching soccer
		    		and root for both Tottenham and Bayern Munich. I like cinema, punk rock shows, bouldering, hiking,
		    		and mailing out postcards.
		    		</p>

		    		<p className="my-2 flex">Some of these pictures were taken while living out of my van and traversing
		    		the West Coast. While doing so, I tried hitting up various National Parks. Some pictures are from
		    		travelling abroad and exploring new cities in new countries.</p>

		    		<p className="my-2 flex">Thanks for checking out my site, Ben.</p>
			    </div>
		    </div>
	  	</div>
	);
} 
