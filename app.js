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
const NaturalLanguageClassifierV1 = require('ibm-watson/natural-language-classifier/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

// Bootstrap application settings
require('./config/express')(app);

// Create the service wrapper

const classifier = new NaturalLanguageClassifierV1({
  version: '2018-04-05',
  authenticator: new IamAuthenticator({
    apikey: process.env.NATURAL_LANGUAGE_CLASSIFIER_IAM_APIKEY || '<api-key>',
  }),
  url: process.env.NATURAL_LANGUAGE_CLASSIFIER_URL,
});

app.get('/', (req, res) => {
  res.render('index', {
    showHeader: !(req.query.hide_header == 'true' || req.query.hide_header == '1'), // eslint-disable-line
  });
});

/**
 * Classify text
 */
app.post('/api/classify', (req, res, next) => {
  classifier.classify({
    text: req.body.text,
    classifierId: process.env.CLASSIFIER_ID || '<classifier-id>',
  }, (err, data) => {
    if (err) {
      return next(err);
    }
    return res.json(data.result);
  });
});

// error-handler settings
require('./config/error-handler')(app);

module.exports = app;
