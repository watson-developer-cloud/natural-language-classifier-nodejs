import React from 'react';
import PropTypes from 'prop-types';
import { Header, Jumbotron } from 'watson-react-components';

// eslint-disable-next-line
const DESCRIPTION = 'Natural Language Classifier applies deep learning techniques to make predictions about the best predefined classes for short sentences or phrases.';

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <title>Natural Language Classifier Demo</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="Natural Language Classifier Demo" />
        <meta name="og:description" content={DESCRIPTION} />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Header
          mainBreadcrumbs="DPA Natural Language Classifier"
          mainBreadcrumbsUrl="https://www.ibm.com/watson/services/natural-language-classifier/"
        />
        <Jumbotron
          serviceName="DPA Natural Language Classifier"
          repository="https://github.com/watson-developer-cloud/natural-language-classifier-nodejs"
          documentation="https://console.bluemix.net/docs/services/natural-language-classifier/getting-started.html"
          apiReference="http://www.ibm.com/watson/developercloud/natural-language-classifier/api/v1/"
          version="GA"
          serviceIcon="/images/service-icon.png"
          startInBluemix="https://console.bluemix.net/registration/trial?target=%2Fdeveloper%2Fwatson%2Fcreate-project%3Fservices%3Dnatural_language_classifier%26hideTours%3Dtrue&cm_mmc%3DOSocial_Tumblr-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmc%3DOSocial_Tumblr-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmca1%3D000000OF%26cm_mmca2%3D10000409%"
          description={DESCRIPTION}
        />
        <div id="root">
          {props.children}
        </div>
        <script type="text/javascript" src="js/bundle.js" />
        { props.bluemixAnalytics ? <script type="text/javascript" src="js/analytics.js" /> : null }
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  bluemixAnalytics: PropTypes.bool.isRequired,
};

export default Layout;
