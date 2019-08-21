/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  const nameGenerator = () => {
    let nameDomain = [];

    for (let i in pronoun) {
      for (let j in adj) {
        for (let k in noun) {
          nameDomain.push;
        }
      }
    }

  let myList = "";
  for (let i = 0; i < nameDomain.length; i++) {
    myList += "<li>${nameDomain[i]}.com</li>";
  }
  document.querySelector("#generator").innerHTML = "<ul>${myList}</ul>";
};
