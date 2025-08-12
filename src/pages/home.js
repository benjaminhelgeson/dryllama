import React, { useState, useEffect } from "react";
import "../App.css";
import { TitleDisplay } from "../componets/titleDisplay";
import { SubtitleDisplay } from "../componets/subtitleDisplay";

export default function HomeScreen() {
  return (
    <div className="px-10 mt-2 bg-black text-white">
      <TitleDisplay goTo="/" title="Dry Llama"></TitleDisplay>

      <div className="max-w-lg float-right md:block hidden">
        <img src="https://dryllamaimages.s3.amazonaws.com/img/amsterdam/IMG_6036.jpg" />
      </div>

      <div>
        <a href="/about">About Dry Llama</a>
      </div>

      <SubtitleDisplay title="Street Art"></SubtitleDisplay>
      <div>
        <a href="/covers">Street Covers</a>
      </div>

      <SubtitleDisplay title="National Parks System"></SubtitleDisplay>
      <div>
        <a href="/arches">Arches National Park</a>
      </div>
      <div>
        <a href="/bigbend">Big Bend National Park</a>
      </div>
      <div>
        <a href="/canyonlands">Canyonlands National Park</a>
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

      <SubtitleDisplay title="United States"></SubtitleDisplay>
      <div>
        <a href="/anchorage">Anchorage, Ak</a>
      </div>
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
        <a href="/chicago">Chicago, Il</a>
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
        <a href="/mckinneyfalls">McKinney Falls, Tx</a>
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
        <a href="/sandiego">San Diego, Ca</a>
      </div>
      <div>
        <a href="/seattle">Seattle, Wa</a>
      </div>
      <div>
        <a href="/westtexas">West Texas</a>
      </div>

      <SubtitleDisplay title="Abroad"></SubtitleDisplay>
      <div>
        <a href="/amsterdam">Amsterdam, Netherlands</a>
      </div>
      <div>
        <a href="/barcelona">Barcelona, Spain</a>
      </div>
      <div>
        <a href="/banos">Ba&#241;os, Ecuador</a>
      </div>
      <div>
        <a href="/belfast">Belfast, Norhtern Ireland</a>
      </div>
      <div>
        <a href="/berlin">Berlin, Germany</a>
      </div>
      <div>
        <a href="/bogota">Bogota, Colombia</a>
      </div>
      <div>
        <a href="/bratislava">Bratislava, Slovakia</a>
      </div>
      <div>
        <a href="/bruges">Bruges, Belgium</a>
      </div>
      <div>
        <a href="/cliffsofmoher">Cliffs of Moher, Ireland</a>
      </div>
      <div>
        <a href="/dublin">Dublin, Ireland</a>
      </div>
      <div>
        <a href="/fussen">Fussen, Germany</a>
      </div>
      <div>
        <a href="/galapagos">Galapagos Islands, Ecuador</a>
      </div>
      <div>
        <a href="/giantscauseway">Giant's Causeway, Ireland</a>
      </div>
      <div>
        <a href="/goldencircle">Golden Circle, Iceland</a>
      </div>
      <div>
        <a href="/havana">Havana, Cuba</a>
      </div>
      <div>
        <a href="/irishcoast">Irish Coast</a>
      </div>
      <div>
        <a href="/kyoto">Kyoto, Japan</a>
      </div>
      <div>
        <a href="/landsend">Lands End, England</a>
      </div>
      <div>
        <a href="/lisbon">Lisbon, Portugal</a>
      </div>
      <div>
        <a href="/london">London, England</a>
      </div>
      <div>
        <a href="/madrid">Madrid, Spain</a>
      </div>
      <div>
        <a href="/manchester">Manchester, England</a>
      </div>
      <div>
        <a href="/mexicocity">Mexico City, Mexico</a>
      </div>
      <div>
        <a href="/munich">Munich, Germany</a>
      </div>
      <div>
        <a href="/paris">Paris, France</a>
      </div>
      <div>
        <a href="/penzance">Penzance, England</a>
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
        <a href="/ronda">Ronda, Spain</a>
      </div>
      <div>
        <a href="/salzburg">Salzburg, Austria</a>
      </div>
      <div>
        <a href="/santiago">Santiago, Chile</a>
      </div>
      <div>
        <a href="/sevilla">Sevilla, Spain</a>
      </div>
      <div>
        <a href="/spanishcountryside">Spanish Countryside</a>
      </div>
      <div>
        <a href="/tokyo">Tokyo, Japan</a>
      </div>
      <div>
        <a href="/vienna">Vienna, Austria</a>
      </div>
      <div>
        <a href="/zaragoza">Zaragoza, Spain</a>
      </div>
    </div>
  );
}
