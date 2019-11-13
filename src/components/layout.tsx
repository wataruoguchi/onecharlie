import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import 'typeface-roboto';
import 'typeface-noto-serif-jp';
import '@openfonts/big-shoulders-display_all';
import './layout.css';
import './utils.scss';

const footerHeight = '50px';
const Main = styled.main`
  min-height: calc(100vh - ${footerHeight});
`;
const Footer = styled.footer`
  height: ${footerHeight};
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 20px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;

  .cell.light {
    color: #78757a;
  }
`;

type Props = {
  children: React.ReactNode;
};
const Layout: React.FC<Props> = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Main>{children}</Main>
      <Footer className="container divide-by-2 horizontal">
        <div className="cell">© onecharlie.com</div>
        <div className="cell light">
          Built by <a href="https://github.com/wataruoguchi">Wataru</a>
        </div>
      </Footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
