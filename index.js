// Adds 'reverse' to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Returns true if string is blank or whitespace only
String.prototype.blank = function() {
  return (/^\s+$/).test(this) || this.length === 0;
}

// Returns last item in array
Array.prototype.last = function () {
  return this.slice(-1)[0];
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome(){
    return this.processedContent() === this.processedContent().reverse();
  }

  this.processor = function processor(string){
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Makes the phrase LOUDER.
  this.louder = function louder(){
  return this.content.toUpperCase();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation){
  this.content = content;
  this.translation = translation;

  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
