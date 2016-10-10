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

const path = require('path');
// load default variables for testing
require('dotenv').config({ path: path.join(__dirname, '../.env.example') });

const app = require('../app');
const request = require('supertest');
const nock = require('nock');

describe('express', () => {
  it('load home page when GET /', () =>
    request(app).get('/').expect(200)
  );

  it('404 when page not found', () =>
    request(app).get('/foo/bar').expect(404)
  );

  it('200 when calling classify', (done) => {
    const server = 'https://gateway.watsonplatform.net:443';
    const text = 'classify me';

    const response = {
      classifier_id: '<classifier-id>',
      text,
      top_class: 'bar',
      classes: [{
        class_name: 'bar',
        confidence: 0.99,
      }, {
        class_name: 'foo',
        confidence: 0.01,
      }],
    };
    nock(server)
      .post('/natural-language-classifier/api/v1/classifiers/%3Cclassifier-id%3E/classify', { text })
      .reply(200, response);

    request(app)
      .post('/api/classify')
      .send({ text })
      .expect(200, response, done);
  });
});
