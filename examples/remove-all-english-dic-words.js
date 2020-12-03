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


//console.log(corpus);
corpus.removeWords( tm.STOPWORDS.EN );
console.log(corpus);



