import React from 'react';
import Container from '../Container';
import ArticlePreview from '../ArticlePreview';
import * as styles from './ArticleList.module.css';

const ArticleList = ({ posts }) => {
  if (!posts) return null;
  if (!Array.isArray(posts)) return null;

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post, i ) => <ArticlePreview post={post} key={i}/>)}
      </ul>
    </Container>
  );
};

export default ArticleList;
