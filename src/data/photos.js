import img00 from "../assets/photos/photo-00.png";
import img01 from "../assets/photos/photo-01.jpg";
import img02 from "../assets/photos/photo-02.jpg";
import img03 from "../assets/photos/photo-03.jpg";
import img04 from "../assets/photos/photo-04.jpg";
import img05 from "../assets/photos/photo-05.jpg";
import img06 from "../assets/photos/photo-06.jpg";
import img07 from "../assets/photos/photo-07.jpg";
import img08 from "../assets/photos/photo-08.jpg";
import img09 from "../assets/photos/photo-09.jpg";
import img10 from "../assets/photos/photo-10.jpg";
import img11 from "../assets/photos/photo-11.jpeg";
import img12 from "../assets/photos/photo-12.jpg";
import img13 from "../assets/photos/photo-13.jpg";

export const IMG = [img00, img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12, img13];

export const PHOTOS = [
  { src: IMG[0], emoji: "🎬", caption: "A little piece of magic", bg: "#ffd6e8" },
  { src: IMG[1], emoji: "🍿", caption: "Pretty without even trying", bg: "#ffe5b4" },
  { src: IMG[8], emoji: "🌿", caption: "Beauty in every little moment", bg: "#d4f0ff" },
  { src: IMG[9], emoji: "☔", caption: "A face full of stories", bg: "#e0d4ff" },
  { src: IMG[11], emoji: "💞", caption: "Some smiles stay with you: next to you", bg: "#d8f5d0" },
  { src: IMG[3], emoji: "💚", caption: "A little more lovely every day", bg: "#ffe0cc" },
  { src: IMG[2], emoji: "✨", caption: "That smile", bg: "#d4ffe9" },
  { src: IMG[4], emoji: "🌸", caption: "My favourite kind of sunshine ", bg: "#ffd9f0" },
  { src: IMG[5], emoji: "😊", caption: "Blooming in your own way", bg: "#ffe5b4" },
  { src: IMG[6], emoji: "🌼", caption: "Simply, effortlessly your", bg: "#d4f0ff" },
  { src: IMG[7], emoji: "☀️", caption: "A little too hard to forgetutiful", bg: "#e0d4ff" },
  { src: IMG[10], emoji: "💙", caption: "Always stunning", bg: "#d8f5d0" },
  { src: IMG[12], emoji: "🖤", caption: "Hair flip", bg: "#ffe0cc" },
  { src: IMG[13], emoji: "💋", caption: "Main character energy", bg: "#ffd6e8" },
];

export const BALLOONS = [
  { c: "#ff5c9d", x: 6, y: 8 }, { c: "#ffb703", x: 62, y: 2 }, { c: "#8ecae6", x: 34, y: 30 },
  { c: "#b388eb", x: 10, y: 50 }, { c: "#80ed99", x: 64, y: 46 },
].map((b, i) => ({ ...b, ...PHOTOS[i] }));

// Photo shown on the password page
export const HINT_IMG = IMG[3];
