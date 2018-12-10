import React from 'react';
import Layout from './layout.jsx';
import { Demo } from './demo.jsx';

export default function Index({ showHeader }) {
  return (
    <Layout showHeader={showHeader}>
      <Demo />
    </Layout>
  );
}
