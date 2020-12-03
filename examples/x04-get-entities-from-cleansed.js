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
//console.log(corpus);


var text =  corpus.documents[0].text;

console.log(text);

// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const client = new language.LanguageServiceClient();

/**
 * TODO(developer): Uncomment the following line to run this code.
 */
// const text = 'Your text to analyze, e.g. Hello, world!';

// Prepares a document, representing the provided text
const document = {
  content: text,
  type: 'PLAIN_TEXT',
};


// Detects entities in the document
const [result] = await client.analyzeEntities({document});

const entities = result.entities;

console.log('Entities:');
entities.forEach(entity => {
  console.log(entity.name);
  console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);

//   if (entity.metadata && entity.metadata.wikipedia_url) {
//     console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}`);
//   }
});