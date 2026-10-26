// ✏️ EDIT THESE
export const NAME = "Shreya";
export const BIRTHDATE = "27/10/2005"; // password = her birthdate (DD/MM/YYYY)
export const MUSIC_SRC = "./song.mp3"; // background song (optional) e.g. "/song.mp3" (put the file in /public)


export const AGE = String(new Date().getFullYear() - Number(BIRTHDATE.split("/")[2]));

export const BDAY_MSG =
  "Happy Birthday, " + NAME + "...! Some people hold a special place in our hearts without even trying… and you’re one of those rare souls. 🫶🏻💫 May your smile always shine, your dreams come true, and life give you a thousand little reasons to be happy. 🌸🧿";

export const NOTE =
  "Dear " + NAME + ",\nThank you for every laugh, every talk and every memory. You make my world brighter, and I’m so lucky to have you. Happy Birthday! 💛";

export const PROMISES = [
  "I promise to never hurt you again, to be more careful with your feelings, and to protect the trust you place in me. ❤️",
  "I promise to always make you smile, even on your hardest days.",
  "I promise to listen, really listen, whenever you need to talk.",
  "I promise to be honest with you, always.",
  "I promise to stand by you in every happy and tough moment.",
  "I promise to celebrate you, not just today, but every day.",
  "I promise to love you forever and be there for you, anytime.",
];

export const REASONS = [
  "Your smile heals my worst days 🌷",
  "You hear my heart even when I stay silent",
  "You make me laugh when I forgot how",
  "Your kindness makes this world softer",
  "With you, ordinary days become my favourite memories",
  "You believe in me when I can’t",
];

export const LETTERS = [
  { type: "env", icon: "💌", title: "Sealed with a ribbon", text: "Some friendships become special not because of how long they last, but because of the happiness, laughter, and memories they bring into our lives. I hope your journey ahead is filled with success, unforgettable adventures, genuine friendships, and all the little things that make you happy. Keep smiling, keep believing in yourself, and always remember how wonderful you are. Happy Birthday, Bestie! 🎀🎉" },
  { type: "seal", icon: "💗", title: "Sealed with love", text: "May your smile always shine brighter than your worries, your dreams grow bigger than your fears, and your happiness last longer than your toughest days. Never stop being the wonderful soul you are. Happy Birthday!" },
  { type: "bloom", icon: "🌷", title: "A flower for you", text: "Some people make this world a better place simply by being in it, and you are one of them. May your life always be filled with happiness, your eyes with dreams, and your heart with peace. Never let the world change the beautiful person you are. You deserve all the wonderful things life has to offer. Happy Birthday! ✨🌷" },
];

export const LAST_NOTE =
  "Shreya…\n\nI don’t say this often, but you mean more to me than I ever show.\n\nWhenever you miss me, or things feel quiet, open this again. Look at these photos and remember that I was always smiling because of you.\n\nLife changes, people get busy, days pass… but the memories we made are mine forever, and I’ll keep them safe in my heart.\n\nPlease keep smiling, stay strong, and take care of yourself, even when I’m not there to remind you.\n\nThank you for being the best part of my days. 💗\n\n— Always yours";
