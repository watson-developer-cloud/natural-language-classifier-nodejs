import React from 'react';
import Layout from './layout.jsx';
import Demo from './demo.jsx';

export default function (props) {
  return (
    <Layout bluemixAnalytics={props.BLUEMIX_ANALYTICS}> <Demo /></Layout>
  );
}
