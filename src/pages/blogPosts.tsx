import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ContentfulRichText from '../components/contentfulRichText';

type ContentfulNode = {
  node: {
    id: string;
    title: string;
    body: {
      json: any;
    };
  };
};

type Props = {
  data: {
    allContentfulBlogPost: {
      edges: ContentfulNode[];
    };
  };
};

const BlogPosts: React.FC<Props> = ({ data }: Props) => {
  const documents: {
    id: string;
    title: string;
    json: any;
  }[] = data.allContentfulBlogPost.edges
    .filter(edge => edge.node.body)
    .map(edge => {
      const { id, title } = edge.node;
      const { json } = edge.node.body;
      return { id, title, json };
    });
  return (
    <Layout>
      <SEO title="Blog Posts" />
      <h1>Blog Posts (source: Contentful)</h1>
      {documents.map(node => {
        return (
          <div key={node.id}>
            <h2 key={`${node.id}-title`}>{node.title}</h2>
            <ContentfulRichText
              document={node.json}
              key={`${node.id}-content`}
            />
          </div>
        );
      })}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const query = graphql`
  query BlogPagesQuery {
    allContentfulBlogPost(limit: 10) {
      edges {
        node {
          id
          title
          updatedAt
          body {
            json
          }
        }
      }
    }
  }
`;

export default BlogPosts;
