import React from 'react';
import Error from 'next/error';
import axios from 'axios';
import StoryList from '../components/StoryList';

class Index extends React.Component {
  static async getInitialProps() {
    let stories;
    try {
      const res = await axios.get('https://node-hnapi.herokuapp.com/news?page=1');
      stories = await res.data;
    } catch (err) {
      console.log(err);
      stories = [];
    }

    return { stories };
  }

  render() {
    const { stories } = this.props;

    if (stories.length === 0) {
      console.log(stories);
      return <Error statusCode={503} />;
    }

    return (
      <>
        <h1>hacker next</h1>
        <StoryList stories={stories} />
      </>
    )
  }
};

export default Index;