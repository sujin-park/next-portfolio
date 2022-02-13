import React from 'react';
import Error from 'next/error';
import axios from 'axios';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';
import Link from 'next/link';

class Index extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let stories;
    let page;

    try {
      page = Number(query.page) || 1;
      const res = await axios.get(`https://node-hnapi.herokuapp.com/news?page=${page}`);
      stories = await res.data;
    } catch (err) {
      console.log(err);
      stories = [];
    }

    return { stories };
  }

  render() {
    const { stories, page } = this.props;

    if (stories.length === 0) {
      console.log(stories);
      return <Error statusCode={503} />;
    }

    return (
      <Layout title="Hacker Next" description="A Hacker News clone made with Next.js">
        <StoryList stories={stories} />
        
        <footer>
          <Link href={`/?page=${page + 1}`}>
            <a>Click here</a>
          </Link>
        </footer>
      </Layout>
    )
  }
};

export default Index;