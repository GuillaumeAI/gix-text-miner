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



console.log(corpus.documents[0]);
console.log(corpus.documents[0].text)


console.log(`
------------------------------
//@STCGoal trim text
`);
corpus.trim();
console.log(corpus.documents[0].text)


//---------------------------------------------
console.log(`
-------------------------------
//@STCGoal clean text
`);
corpus.clean();
console.log(corpus.documents[0]);
console.log(corpus.documents[0].text)


//---------------------------------------------
console.log(`
--------------------------------
//@STCGoal .removeInterpunctuation()
`);
corpus.removeInterpunctuation()
console.log(corpus.documents[0]);
console.log(corpus.documents[0].text)
console.log(corpus.documents[1].text)


//---------------------------------------------
console.log(`
---------------------------------
//@STCGoal ..removeNewlines()()
`);
corpus.removeNewlines()
console.log(corpus.documents[1]);
console.log(corpus.documents[1].text)


//---------------------------------------------
console.log(`
---------------------------------
//@STCGoal ...removeDigits()
`);
corpus.removeDigits();
console.log(corpus.documents[1]);
console.log(corpus.documents[1].text)



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

