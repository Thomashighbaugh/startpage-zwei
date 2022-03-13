export default Object.seal([
  "“Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me.” \n- Frank Herbert, 'Dune'.",
  "“It is by will alone I set my mind in motion.” \n- Frank Herbert, 'Dune'",
  "“He who wants to know the Shaktimaan(holder of power) must first know the Shakti(power)” \n- Vijnana Bhairava Tantra",
  "“Rivers of power flowing everywhere, fields of magnetism connecting everything. This is your origin, this is your lineage.” \n― Radiance Sutras",
  "“Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic.” \n― Frank Herbert, 'Dune'",
  "“Most writers regard the truth as their most valuable possession, and therefore are economical in its use.” \n― Mark Twain",
  "“Who knows for certain? Who shall here declare it? Whence was it born, whence came creation? The gods are later than this world's formation, Who then can know the origins of the world? None knows whence creation arose. And whether he has or has not made it; He who surveys it from the lofty skies.Only he knows-or perhaps he knows not” \n― Rig Veda",
  "“Truth is one, but the wise men know it as many; God is one, but we can approach Him in many ways.“ \n― Rig Veda",
  "“I seek refuge in Siva whose power is unequalled, whose glory spreads everywhere, who is Un-born!“ \n― Siva Purana",
]).map((quote) => ({
  text: quote.split("\n")[0].trim(),
  author: quote.split("\n")[1].trim(),
}));
