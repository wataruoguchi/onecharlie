import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Plane from '../images/planes.svg';

const H1 = styled.h1`
  font-family: 'Noto Serif JP', serif;
  font-weight: lighter;
  font-size: 3rem;
  line-height: 1.3;
`;
const H2 = styled.h2`
  font-family: 'Noto Serif JP', serif;
  font-weight: lighter;
  font-size: 2rem;
  line-height: 1.3;
`;
const BgImage = styled.div`
  width: 250px;
  height: 250px;
  position: absolute;
  bottom: -120px;
  left: 15vw;
  opacity: 0.3;
  background-repeat: no-repeat;
  background-image: url(${Plane});
  background-size: 330px 330px;
`;

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="One Charlie" />
    <div className="container divide-by-2 vertical full-width">
      <div className="cell border-bottom">
        <div className="container divide-by-2 horizontal">
          <div className="cell">
            <div style={{ position: 'relative' }}>
              <BgImage />
            </div>
            <H1>one charlie</H1>
          </div>
        </div>
      </div>
      <div className="cell">
        <div className="container divide-by-2 horizontal">
          <H2 className="cell pt-20">landing soon.</H2>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
