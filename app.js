/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const express = require('express');
const app = express();
const NaturalLanguageClassifierV1 = require('watson-developer-cloud/natural-language-classifier/v1');

// Bootstrap application settings
require('./config/express')(app);

const classifier = new NaturalLanguageClassifierV1({
  // If unspecified here, the NATURAL_LANGUAGE_CLASSIFIER_USERNAME and
  // NATURAL_LANGUAGE_CLASSIFIER_PASSWORD env properties will be checked
  // After that, the SDK will fall back to the bluemix-provided VCAP_SERVICES environment property
  // username: '<username>',
  // password: '<password>',
});

app.get('/', (req, res) => {
  res.render('index');
});

/**
 * Classify text
 */
app.post('/api/classify', (req, res, next) =>
  classifier.classify({
    text: req.body.text,
    classifier_id: process.env.CLASSIFIER_ID || '<classifier-id>',
  }, (err, data) => {
    if (err) {
      return next(err);
    }
    return res.json(data);
  })
);

// error-handler settings
require('./config/error-handler')(app);

module.exports = app;
