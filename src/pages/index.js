import React from 'react';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-customBlue">Latest Posts from WordPress</h1>
      {data.allWpPost.nodes.map(post => (
        <div key={post.id} className="mb-4 p-4 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold text-customBlue">{post.title}</h2>
          <div
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query {
    allWpPost {
      nodes {
        id
        title
        excerpt
      }
    }
  }
`;

export default IndexPage;
