var rejectioncontent = require("./rejectioncontent")();
var rejectedWords = rejectioncontent.RejectedWords;

//["a","at","and","on","this","from","the"];

//@STCGoal Understand what Text mining is about
//@STCGoal Preparing Data

var tm = require( 'gix-text-miner' );

var corpus = new tm.Corpus([]);
var data = require("./corpuscontent")();

corpus.addDoc( data.Akten2016);
corpus.addDoc( data.Pouyanfar2018);


console.log(corpus);
tm.removeWords( tm.STOPWORDS.EN )
console.log(corpus);



//@STCGoal clean it before getting terms

corpus.trim();
corpus.removeNewlines();
corpus.removeInterpunctuation();
corpus.clean();
corpus.removeDigits();
corpus.removeInvalidCharacters();
corpus.toLower();
corpus.removeWords(["#","##"]);

corpus.removeWords(rejectedWords);
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
var termsFifetyPercent = terms2.removeSparseTerms( 1 );
var o = "";
termsFifetyPercent.vocabulary.forEach(t => {
    o+= t + ", ";
});
console.log(o);


