//@STCGoal Understand what Text mining is about
//@STCGoal Preparing Data

var tm = require( 'gix-text-miner' );

var corpus = new tm.Corpus([]);

corpus.addDoc("Something new . With bad char we do not wand such an interogation mark !  Slash / etc...");

console.log(corpus.documents[0])
console.log(corpus.documents[0].text)