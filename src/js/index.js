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

  let newName = [];

  for (let i in pronoun) {
    for (let j in adj) {
      for (let x in noun) {
        let newConcat = pronoun[i] + adj[j] + noun[x] + ".com \n";
        newName.push(newConcat);
      }
    }
  }

  let myList = "";
  for (let index in newName) {
    myList += `<li>${newName[index]}.com</li>`;
  }

  document.querySelector("#generator").innerHTML = `<ul>${myList}</ul>`;
};
