import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from "@fortawesome/fontawesome-svg-core";

const coffeeLookup: IconLookup = { prefix: "fas", iconName: "coffee" };
const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup);
const iconNames = [
  "bicycle",
  "cube",
  "bolt",
  "bomb",
  "bomb",
  "bone",
  "leaf",
  "plane",
  "anchor",
  "bus",
  "globe",
  "wineglass",
  "tv",
  "taxi",
  "archway",
  "applealt",
  "bacon",
  "cookie",
  "fish",
  "pizzaslice",
  "lemon",
  "icecream",
  "seedling",
  "cheese",
  "carrot",
  "candycane",
  "chessbishop",
  "chessking",
  "chesspawn",
  "chessknight",
  "chessqueen",
  "dice",
  "guitar",
  "headphones",
  "music",
  "heart",
  "star",
  "broom",
  "cat",
  "ghost",
  "crow",
  "mask",
  "burn",
  "cannabis",
  "bong",
  "plus",
  "shoppingbag",
  "store",
  "tshirt"
];

export default class Cards extends Component {
  render() {
    return (
      <ul className="cards">
        {/* <FontAwesomeIcon></FontAwesomeIcon>
        <FontAwesomeIcon></FontAwesomeIcon> */}
      </ul>
    );
  }
}
