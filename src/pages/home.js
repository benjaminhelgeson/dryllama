
import React, { useState, useEffect } from 'react';
import '../App.css';
import { TitleDisplay } from '../componets/titleDisplay';
import { SubtitleDisplay } from '../componets/subtitleDisplay';

export default function HomeScreen() {

	return (
		
      <div className="px-10 mt-2 bg-black text-white">
        <TitleDisplay goTo="/"
          title="Dry Llama"
        ></TitleDisplay>

        <div>
          <a href="/about">About Dry Llama</a>
        </div>   

        <SubtitleDisplay 
          title="Street Art"
        ></SubtitleDisplay>
        <div>
          <a href="/covers">Street Covers</a>
        </div>    

        <SubtitleDisplay 
          title="National Parks System"
        ></SubtitleDisplay>  
        <div>
          <a href="/bigbend">Big Bend National Park</a>
        </div> 
        <div>
          <a href="/deathvalley">Death Valley National Park</a>
        </div> 
        <div>
          <a href="/joshuatree">Joshua Tree National Park</a>
        </div>
        <div>
          <a href="/littlebighorn">Little Big Horn National Monument</a>
        </div>      
        <div>
          <a href="/rushmore">Mount Rushmore National Memorial</a>
        </div>   
        <div>
          <a href="/petroglyph">Petroglyph National Monument</a>
        </div>   
        <div>
          <a href="/rmnp">Rocky Mountain National Park</a>
        </div>       
        <div>
          <a href="/whitesands">White Sands National Park</a>
        </div>      

        <SubtitleDisplay 
          title="United States"
        ></SubtitleDisplay>
        <div>
          <a href="/austin">Austin, Tx</a>
        </div>   
        <div>
          <a href="/bayarea">Bay Area, Ca</a>
        </div>   
        <div>
          <a href="/bolivar">Bolivar Penninsula, Tx</a>
        </div>  
        <div>
          <a href="/cadillacranch">Cadillac Ranch, Tx</a>
        </div>   
        <div>
          <a href="/california">Coastal California, Ca</a>
        </div>   
        <div>
          <a href="/dallas">Dallas, Tx</a>
        </div>    
        <div>
          <a href="/golden">Golden, Co</a>
        </div>   
        <div>
          <a href="/goldengatecanyon">Golden Gate Canyon, Co</a>
        </div>   
        <div>
          <a href="/grandcanyon">Grand Canyon, Az</a>
        </div>   
        <div>
          <a href="/la">Los Angeles, Ca</a>
        </div>   
        <div>
          <a href="/lasvegas">Las Vegas, Nv</a>
        </div>   
        <div>
          <a href="/mardigras">Mardi Gras</a>
        </div>    
        <div>
          <a href="/miami">Miami, Fl</a>
        </div>  
        <div>
          <a href="/midcal">Mid-Coastal California</a>
        </div>   
        <div>
          <a href="/morrobay">Morro Bay, Ca</a>
        </div>   
        <div>
          <a href="/nashville">Nashville, Tn</a>
        </div>    
        <div>
          <a href="/nola">New Orleans, La</a>
        </div>     
        <div>
          <a href="/norcal">Northern California</a>
        </div>    
        <div>
          <a href="/oregoncoast">Oregon Coast</a>
        </div>   
        <div>
          <a href="/portland">Portland, Or</a>
        </div>    
        <div>
          <a href="/seattle">Seattle, Wa</a>
        </div>    
        <div>
          <a href="/westtexas">West Texas</a>
        </div>    

        <SubtitleDisplay 
          title="Abroad"
        ></SubtitleDisplay>
        <div>
          <a href="/barcelona">Barcelona, Spain</a>
        </div>   
        <div>
          <a href="/berlin">Berlin, Germany</a>
        </div>   
        <div>
          <a href="/bratislava">Bratislava, Slovakia</a>
        </div>   
        <div>
          <a href="/fussen">Fussen, Germany</a>
        </div>     
        <div>
          <a href="/goldencircle">Golden Circle, Iceland</a>
        </div> 
        <div>
          <a href="/london">London, England</a>
        </div>   
        <div>
          <a href="/munich">Munich, Germany</a>
        </div>    
        <div>
          <a href="/pilsen">Pilsen, Czechia</a>
        </div>    
        <div>
          <a href="/prague">Prague, Czechia</a>
        </div>    
        <div>
          <a href="/regensburg">Regensburg, Germany</a>
        </div>   
        <div>
          <a href="/reykjavik">Reykjavik, Iceland</a>
        </div>    
        <div>
          <a href="/rockypoint">Puerto Penasco, Mexico</a>
        </div>    
        <div>
          <a href="/salzburg">Salzburg, Austria</a>
        </div>    
        <div>
          <a href="/vienna">Vienna, Austria</a>
        </div>    

      </div>
	);
}