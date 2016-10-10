import React from 'react';
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
          mainBreadcrumbs="Natural Language Classifier"
          mainBreadcrumbsUrl="http://www.ibm.com/watson/developercloud/nl-classifier.html"
        />
        <Jumbotron
          serviceName="Natural Language Classifier"
          repository="https://github.com/watson-developer-cloud/natural-language-classifier-nodejs"
          documentation="http://www.ibm.com/watson/developercloud/doc/nl-classifier"
          apiReference="http://www.ibm.com/watson/developercloud/natural-language-classifier/api/v1/"
          version="GA" serviceIcon="/images/service-icon.png"
          description={DESCRIPTION}
        />
        <div id="root">
          {props.children}
        </div>
        <script type="text/javascript" src="js/bundle.js" />
        <script type="text/javascript" src="js/ga.js" />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default Layout;
