# Natural Language Classifier Nodejs Starter Application

  The IBM Watson&trade; Natural Language Classifier service applies deep learning techniques to make predictions about the best predefined classes for short sentences or phrases. The classes can trigger a corresponding action in an application, such as directing a request to a location or person, or answering a question. After training, the service returns information for texts that it hasn't seen before. The response includes the name of the top classes and confidence values.

Give it a try! Click the button below to fork into IBM DevOps Services and deploy your own copy of this application on Bluemix.

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/watson-developer-cloud/natural-language-classifier-nodejs)

## Getting started

1. You need a Bluemix account. If you don't have one, [sign up][sign_up]. Experimental Watson Services are free to use.

1. Download and install the [Cloud-foundry CLI][cloud_foundry] tool if you haven't already.

1. Edit the `manifest.yml` file and change `<application-name>` to something unique. The name you use determines the URL of your application. For example, `<application-name>.mybluemix.net`.
	
	```
	applications:
	- services:
	  - natural-language-classifier-service
	  name: <application-name>
	  command: node app.js
	  path: .
	  memory: 128M
	```

1. Connect to Bluemix with the command line tool.
	
	```sh
	$ cf api https://api.ng.bluemix.net
	$ cf login -u <your user ID>
	```

1. Create the Natural Language Classifier service in Bluemix.
	
	```sh
	$ cf create-service natural_language_classifier free natural-language-classifier-service
	```

1. Update the [app.js](app.js#L33) file with the classifier id in the response from the API when you create the classifier.

1. Push your app to make it live:

	```sh
	$ cf push
	```

	For more details about developing applications that use Watson Developer Cloud services in Bluemix, see [Getting started with Watson Developer Cloud and Bluemix][getting_started].

1. To get the app to respond to input, you need to train the classifier. For information about how to train with the sample data, see the [tutorial](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/nl-classifier/get_start.shtml).



## Running locally
1. Download and install [Node.js](http://nodejs.org/) and [npm](https://www.npmjs.com/).

1. Create an instance of the Natural Language Classifier service on Bluemix. 

1. [Create and train](http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/nl-classifier/get_start.shtml#create) the NLC service using say the weather training data. Take a note of the "Classifier ID" that you get back when training the service.

1. Configure the code to connect to your service:

	1. Copy the credentials from your `natural-language-classifier-service` service in Bluemix. Run the following command:

		```sh
		$ cf env <application-name>
		```

		Example output:

		```sh
		System-Provided:
		{
		  "VCAP_SERVICES": {
			"natural_language_classifier": [
			  {
				"credentials": {
				  "password": "<password>",
				  "url": "<url>",
				  "username": "<username>"
				}
				"label": "natural-language-classifier",
				"name": "natural-language-classifier-service",
				"plan": "free",
				"tags": [
				  ... 
				]
			  }
			]
		  }
		}
		```

	1. Copy `username`, `password`, and `url` from the credentials.
	1. Open the `app.js` file and paste the username, password, and url credentials for the service.
	1. In the `app.js` file paste the "Classifier ID". Save the `app.js` file.


1. Install the Natural Language Classifier Node.js package:
	1. Change to the new directory that contains the project. 
	2. Run the following command:node

	```node
	$ npm install
	```

1. Run the following command to start the application:

	```node
	node app.js
	```

1. Point your browser to [http://localhost:3000](http://localhost:3000).

1. Train the classifier, if you haven't already. See the step earlier under Getting started.


## Troubleshooting

* The main source of troubleshooting and recovery information is the Bluemix log. To view the log, run the following command:

  ```sh
  $ cf logs <application-name> --recent
  ```

* For more details about the service, see the [documentation][nlc_docs] for the Natural Language Classifier.

## License

  This sample code is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).  
  This sample uses [jquery](https://jquery.com/) which is MIT license
## Contributing

  See [CONTRIBUTING](CONTRIBUTING.md).

## Open Source @ IBM
  Find more open source projects on the [IBM Github Page](http://ibm.github.io/)

[cloud_foundry]: https://github.com/cloudfoundry/cli
[getting_started]: http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/getting_started/
[nlc_docs]: http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/nl-classifier/
[sign_up]: https://apps.admin.ibmcloud.com/manage/trial/bluemix.html?cm_mmc=WatsonDeveloperCloud-_-LandingSiteGetStarted-_-x-_-CreateAnAccountOnBluemixCLI
