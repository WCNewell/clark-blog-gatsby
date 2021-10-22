import * as React from 'react';

import Seo from '../components/seo';
import Header from '../components/Header';

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <div className="main-grid">
      <Header />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness. 😢</p>
    </div>
  </>
);

export default NotFoundPage;

