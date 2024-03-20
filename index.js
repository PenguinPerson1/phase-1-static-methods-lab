class Formatter {
  static capitalize(word){
    return word[0].toUpperCase() + word.slice(1);
  }
  static sanitize(word){
    return word.replace(/[^A-Za-z0-9-' ]+/g, "");
  }
  static titleize(sentence){
    sentence = this.capitalize(sentence)
    const words  = sentence.split(" ")
    words.forEach((word, i) => {
      if(word === "the" || word === "a" || word === "an" || word === "but" || word === "of" || word === "and" || word === "for" || word === "at" || word === "by" || word === "from"){

      } else{
        words[i] = this.capitalize(word);
      }
    });
    return words.join(" ");
  }
}