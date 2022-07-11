import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Tags from '../components/Tags';
import * as styles from './blog-post.module.css';

// Gatsby will automatically pass the result of the query (exported on line 72) as "data" in the props.
const BlogPostTemplate = ({ data, location }) => {

  const post = data.contentfulBlogPost;
  const previous = data.previous;
  const next = data.next;

  return (
    <Layout location={location}>
      <Hero
        image={post.heroImage?.gatsbyImageData}
        title={post.title}
        content={post.description?.childMarkdownRemark?.excerpt}
      />
      <div className={styles.container}>
        <span className={styles.meta}>
          {post.author?.name} &middot;{' '}
          <time dateTime={post.rawDate}>{post.publishDate}</time> –{' '}
          {post.body?.childMarkdownRemark?.timeToRead} minute read
        </span>
        <div className={styles.article}>
          <div
            className={styles.body}
            // Since this content is set up as markdown in Contentful, we need to "dangerouslySetInnerHTML". Another way to do it is to have it as rich text then parse the text using "documentToReactComponents".
            dangerouslySetInnerHTML={{
              __html: post.body?.childMarkdownRemark?.html,
            }}
          />
          <Tags tags={post.tags} />
          {(previous || next) && (
            <nav>
              <ul className={styles.articleNavigation}>
                {previous && (
                  <li>
                    <Link to={`/blog/${previous.slug}`} rel="prev">
                      ← {previous.title}
                    </Link>
                  </li>
                )}
                {next && (
                  <li>
                    <Link to={`/blog/${next.slug}`} rel="next">
                      {next.title} →
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </Layout>
  );
};


export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      author {
        name
      }
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      tags
      description {
        childMarkdownRemark {
          excerpt
        }
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`;
