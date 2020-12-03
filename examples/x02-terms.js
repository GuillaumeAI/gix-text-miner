//@STCGoal Understand what Text mining is about
//@STCGoal Preparing Data

var tm = require( 'gix-text-miner' );

var corpus = new tm.Corpus([]);

corpus.addDoc(" 00 -  Something new . With bad char we do not wand such an interogation mark !  Slash / etc...  ");

corpus.addDoc(` # Chapter no 1
Something new . With new lines.

With bad char we do not wand such an interogation mark !  Slash / etc...  


And new paragraph. $&(*@#&($*&#@(

)))`
);

showCorpusObject();



//---------------------------------------------
console.log(`
---------------------------------
//@STCGoal var terms = new tm.DocumentTermMatrix( my_corpus )
    The Whole Terms Object
`);
var terms = new tm.DocumentTermMatrix( corpus );
console.log(terms);

//@STCGoal clean it before getting terms

corpus.trim();
corpus.removeNewlines();
corpus.removeInterpunctuation();
corpus.clean();
corpus.removeDigits();
corpus.removeInvalidCharacters();
corpus.toLower();
corpus.removeWords(["#","##"]);

//---------------------------------------------
console.log(`
---------------------------------
//@STCGoal  terms  CLEARED
    The Whole Terms Object
`);
var terms2 = new tm.DocumentTermMatrix( corpus );
console.log(terms2);


//---------------------------------------------
console.log(`
---------------------------------
//@STCGoal .vocabulary
    The Whole Terms Object
`);
var voc = terms2.vocabulary;
console.log(voc);





//---------------------------------------------
showCorpusObject();

function showCorpusObject() {
    console.log(
        `
    ---------------------------------
//@STCGoal The Whole Corpus Object
`);
    console.log(corpus); 
     console.log(
        `
    --------------------------------- 
    `);
}


    console.log(
        `
    ---------------------------------
//@STCGoal Word Freqouency > 3
`);
console.log(terms2.findFreqTerms(3));


    console.log(
        `
    ---------------------------------
//@STCGoal  removeSparseTerms
`);
var termsFifetyPercent = terms2.removeSparseTerms( 2 );
console.log(termsFifetyPercent);