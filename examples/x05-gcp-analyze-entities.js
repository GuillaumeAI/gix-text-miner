// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// sample-metadata:
//  title: Analyze v1
async function analyzeSentimentOfText(text) {
    // [START language_sentiment_text]
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

    // Detects the sentiment of the document
    const [result] = await client.analyzeSentiment({ document });

    const sentiment = result.documentSentiment;
    console.log('Document sentiment:');
    console.log(`  Score: ${sentiment.score}`);
    console.log(`  Magnitude: ${sentiment.magnitude}`);

    const sentences = result.sentences;
    sentences.forEach(sentence => {
        console.log(`Sentence: ${sentence.text.content}`);
        console.log(`  Score: ${sentence.sentiment.score}`);
        console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
    });

    // [END language_sentiment_text]
}

async function analyzeSentimentInFile(bucketName, fileName) {
    // [START language_sentiment_gcs]
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');

    // Creates a client
    const client = new language.LanguageServiceClient();

    /**
     * TODO(developer): Uncomment the following lines to run this code
     */
    // const bucketName = 'Your bucket name, e.g. my-bucket';
    // const fileName = 'Your file name, e.g. my-file.txt';

    // Prepares a document, representing a text file in Cloud Storage
    const document = {
        gcsContentUri: `gs://${bucketName}/${fileName}`,
        type: 'PLAIN_TEXT',
    };

    // Detects the sentiment of the document
    const [result] = await client.analyzeSentiment({ document });

    const sentiment = result.documentSentiment;
    console.log('Document sentiment:');
    console.log(`  Score: ${sentiment.score}`);
    console.log(`  Magnitude: ${sentiment.magnitude}`);

    const sentences = result.sentences;
    sentences.forEach(sentence => {
        console.log(`Sentence: ${sentence.text.content}`);
        console.log(`  Score: ${sentence.sentiment.score}`);
        console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
    });
    // [END language_sentiment_gcs]
}

async function analyzeEntitiesOfText(text) {
    // [START language_entities_text]
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
    const [result] = await client.analyzeEntities({ document });

    const entities = result.entities;

    console.log('Entities:');
    entities.forEach(entity => {
        if (entity.salience > 0.003) {
            console.log(entity.name);
            //console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
        }
        if (entity.metadata && entity.metadata.wikipedia_url) {
            console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}`);
        }
    });
    // [END language_entities_text]
}

async function analyzeEntitiesInFile(bucketName, fileName) {
    // [START language_entities_gcs]
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');

    // Creates a client
    const client = new language.LanguageServiceClient();

    /**
     * TODO(developer): Uncomment the following lines to run this code
     */
    // const bucketName = 'Your bucket name, e.g. my-bucket';
    // const fileName = 'Your file name, e.g. my-file.txt';

    // Prepares a document, representing a text file in Cloud Storage
    const document = {
        gcsContentUri: `gs://${bucketName}/${fileName}`,
        type: 'PLAIN_TEXT',
    };

    // Detects entities in the document
    const [result] = await client.analyzeEntities({ document });
    const entities = result.entities;

    console.log('Entities:');
    entities.forEach(entity => {
        console.log(entity.name);
        console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
        if (entity.metadata && entity.metadata.wikipedia_url) {
            console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}`);
        }
    });

    // [END language_entities_gcs]
}

async function analyzeSyntaxOfText(text) {
    // [START language_syntax_text]
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

    // Need to specify an encodingType to receive word offsets
    const encodingType = 'UTF8';

    // Detects the sentiment of the document
    const [syntax] = await client.analyzeSyntax({ document, encodingType });

    console.log('Tokens:');
    syntax.tokens.forEach(part => {
        console.log(`${part.partOfSpeech.tag}: ${part.text.content}`);
        console.log('Morphology:', part.partOfSpeech);
    });
    // [END language_syntax_text]
}

async function analyzeSyntaxInFile(bucketName, fileName) {
    // [START language_syntax_gcs]
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');

    // Creates a client
    const client = new language.LanguageServiceClient();

    /**
     * TODO(developer): Uncomment the following lines to run this code
     */
    // const bucketName = 'Your bucket name, e.g. my-bucket';
    // const fileName = 'Your file name, e.g. my-file.txt';

    // Prepares a document, representing a text file in Cloud Storage
    const document = {
        gcsContentUri: `gs://${bucketName}/${fileName}`,
        type: 'PLAIN_TEXT',
    };

    // Need to specify an encodingType to receive word offsets
    const encodingType = 'UTF8';

    // Detects the sentiment of the document
    const [syntax] = await client.analyzeSyntax({ document, encodingType });

    console.log('Parts of speech:');
    syntax.tokens.forEach(part => {
        console.log(`${part.partOfSpeech.tag}: ${part.text.content}`);
        console.log('Morphology:', part.partOfSpeech);
    });
    // [END language_syntax_gcs]
}

async function analyzeEntitySentimentOfText(text) {
    // [START language_entity_sentiment_text]
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

    // Detects sentiment of entities in the document
    const [result] = await client.analyzeEntitySentiment({ document });
    const entities = result.entities;

    console.log('Entities and sentiments:');
    entities.forEach(entity => {
        console.log(`  Name: ${entity.name}`);
        console.log(`  Type: ${entity.type}`);
        console.log(`  Score: ${entity.sentiment.score}`);
        console.log(`  Magnitude: ${entity.sentiment.magnitude}`);
    });
    // [END language_entity_sentiment_text]
}

async function analyzeEntitySentimentInFile(bucketName, fileName) {
    // [START language_entity_sentiment_gcs]
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');

    // Creates a client
    const client = new language.LanguageServiceClient();

    /**
     * TODO(developer): Uncomment the following lines to run this code
     */
    // const bucketName = 'Your bucket name, e.g. my-bucket';
    // const fileName = 'Your file name, e.g. my-file.txt';

    // Prepares a document, representing a text file in Cloud Storage
    const document = {
        gcsContentUri: `gs://${bucketName}/${fileName}`,
        type: 'PLAIN_TEXT',
    };

    // Detects sentiment of entities in the document
    const [result] = await client.analyzeEntitySentiment({ document });
    const entities = result.entities;

    console.log('Entities and sentiments:');
    entities.forEach(entity => {
        console.log(`  Name: ${entity.name}`);
        console.log(`  Type: ${entity.type}`);
        console.log(`  Score: ${entity.sentiment.score}`);
        console.log(`  Magnitude: ${entity.sentiment.magnitude}`);
    });
    // [END language_entity_sentiment_gcs]
}

async function classifyTextOfText(text) {
    // [START language_classify_text]
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

    // Classifies text in the document
    const [classification] = await client.classifyText({ document });
    console.log('Categories:');
    classification.categories.forEach(category => {
        console.log(`Name: ${category.name}, Confidence: ${category.confidence}`);
    });
    // [END language_classify_text]
}

async function classifyTextInFile(bucketName, fileName) {
    // [START language_classify_gcs]
    // Imports the Google Cloud client library.
    const language = require('@google-cloud/language');

    // Creates a client.
    const client = new language.LanguageServiceClient();

    /**
     * TODO(developer): Uncomment the following lines to run this code
     */
    // const bucketName = 'Your bucket name, e.g. my-bucket';
    // const fileName = 'Your file name, e.g. my-file.txt';

    // Prepares a document, representing a text file in Cloud Storage
    const document = {
        gcsContentUri: `gs://${bucketName}/${fileName}`,
        type: 'PLAIN_TEXT',
    };

    // Classifies text in the document
    const [classification] = await client.classifyText({ document });

    console.log('Categories:');
    classification.categories.forEach(category => {
        console.log(`Name: ${category.name}, Confidence: ${category.confidence}`);
    });
    // [END language_classify_gcs]
}







//-----------------
var rejectioncontent = require("./rejectioncontent")();
var rejectedWords = rejectioncontent.RejectedWords;

//["a","at","and","on","this","from","the"];

//@STCGoal Understand what Text mining is about
//@STCGoal Preparing Data

var tm = require('gix-text-miner');

var corpus = new tm.Corpus([]);
var data = require("./corpuscontent")();

corpus.addDoc(data.Akten2016);
corpus.addDoc(data.Pouyanfar2018);


//@STCGoal Cleanup / Prep of the corpus before mining
corpus.trim();
corpus.removeNewlines();
corpus.removeInterpunctuation();
corpus.clean();
corpus.removeDigits();
corpus.removeInvalidCharacters();
corpus.toLower();
corpus.removeWords(["#", "##"]);

//console.log(corpus);
corpus.removeWords(tm.STOPWORDS.EN);
//console.log(corpus);


var text = corpus.documents[0].text;

console.log(text);

console.log(`Guessing we are working on...`);

analyzeEntitiesOfText(text);