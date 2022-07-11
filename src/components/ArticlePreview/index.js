
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Tags from '../Tags';
import * as styles from './ArticlePreview.module.css';

const ArticlePreview = ({ post }) => (
  <li key={post.slug}>
    <Link to={`/blog/${post.slug}`} className={styles.link}>
      <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
      <h2 className={styles.title}>{post.title}</h2>
    </Link>
    <div
      dangerouslySetInnerHTML={{
        __html: post.description.childMarkdownRemark.html,
      }}
    />
    <div className={styles.meta}>
      <small className="meta">{post.publishDate}</small>
      <Tags tags={post.tags} />
    </div>
  </li>
);

export default ArticlePreview;
