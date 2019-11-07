<h1 align="center" style="border-bottom: none;">🚀 Natural Language Classifier Sample Application</h1>
<h3 align="center">This Node.js app demonstrates some of the Natural Language Classifier service features.</h3>
<p align="center">
  <a href="http://travis-ci.org/watson-developer-cloud/natural-language-classifier">
    <img alt="Travis" src="https://travis-ci.org/watson-developer-cloud/natural-language-classifier.svg?branch=master">
  </a>
  <a href="#badge">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
</p>
</p>

The IBM Watson&trade; Natural Language Classifier service applies deep learning techniques to make predictions about the best predefined classes for short sentences or phrases. The classes can trigger a corresponding action in an application, such as directing a request to a location or person, or answering a question. After training, the service returns information for texts that it hasn't seen before. The response includes the name of the top classes and confidence values.

![demo](public/demo.gif)

You can view a [demo](https://natural-language-classifier-demo.ng.bluemix.net/) of this app.


## Prerequisites

1. Sign up for an [IBM Cloud account](https://cloud.ibm.com/registration/).
1. Download the [IBM Cloud CLI](https://cloud.ibm.com/docs/cli/index.html#overview).
1. Create an instance of the Natural Language Classifier service and get your credentials:
    - Go to the [Natural Language Classifier](https://cloud.ibm.com/catalog/services/natural-language-classifier) page in the IBM Cloud Catalog.
    - Log in to your IBM Cloud account.
    - Click **Create**.
    - Click **Show** to view the service credentials.
    - Copy the `apikey` value.
    - Copy the `url` value.

## Configuring the application

1. The Natural Language Classifier service must be trained before you can successfully use this application. The training data is provided in the file `training/weather_data_train.csv`.  
 If you have `username` and `password` credentials, train a classifier by using the following command:

  ```sh
  curl -i -u "apikey":"<apikey>" \
  -F training_data=@training/weather_data_train.csv \
  -F training_metadata="{\"language\":\"en\",\"name\":\"TutorialClassifier\"}" \
  "<url>/v1/classifiers"
  ```
  Make sure to replace `<apikey>` and `<url>`.  
  After running the command, copy the value for `classifier_id`.

2. In the application folder, copy the *.env.example* file and create a file called *.env*

    ```
    cp .env.example .env
    ```

7. Open the *.env* file and add the service credentials that you obtained in the previous step.

    Example *.env* file that configures the `apikey` and `url` for a Natural Language Classifier service instance hosted in the US East region:

    ```
    NATURAL_LANGUAGE_CLASSIFIER_IAM_APIKEY=X4rbi8vwZmKpXfowaS3GAsA7vdy17Qh7km5D6EzKLHL2
    NATURAL_LANGUAGE_CLASSIFIER_URL=https://gateway.watsonplatform.net/natural-language-classifier/api
    ```

8. Add the `CLASSIFIER_ID` to the previous properties

    ```
    CLASSIFIER_ID=522be-7b41-ab44-dec3-g1eab2ha73c6
    ```

## Running locally

1. Install the dependencies

    ```
    npm install
    ```

1. Run the application

    ```
    npm start
    ```

1. View the application in a browser at `localhost:3000`

## Deploying to IBM Cloud as a Cloud Foundry Application

1. Login to IBM Cloud with the [IBM Cloud CLI](https://cloud.ibm.com/docs/cli/index.html#overview)

    ```
    ibmcloud login
    ```

1. Target a Cloud Foundry organization and space.

    ```
    ibmcloud target --cf
    ```

1. Edit the *manifest.yml* file. Change the **name** field to something unique.  
  For example, `- name: my-app-name`.
1. Deploy the application

    ```
    ibmcloud app push
    ```

1. View the application online at the app URL.  
For example: https://my-app-name.mybluemix.net


## Directory structure

```none
.
├── app.js                      // express routes
├── config                      // express configuration
│   ├── error-handler.js
│   ├── express.js
│   └── security.js
├── manifest.yml
├── package.json
├── public                      // static resources
├── server.js                   // entry point
├── test                        // unit tests
├── training
│   └── weather_data_train.csv  // training file
└── views                       // react components
```

## License

This sample code is licensed under Apache 2.0.  
Full license text is available in [LICENSE](LICENSE).

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md).

## Open Source @ IBM

Find more open source projects on the
[IBM Github Page](http://ibm.github.io/).
