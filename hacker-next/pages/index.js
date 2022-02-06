import React from 'react';
import Error from 'next/error';
import fetch from 'isomorphic-fetch';

class Index extends React.Component {
  static async getInitialProps() {
    let stories;
    try {
      const response = await fetch('https://node-hnapi.herokuapp.com/news?page=1');
      stories = await response.json();

      console.log(response);
    } catch (err) {
      console.log(err);
      stories = [];
    }

    return { stories }
  }

  render() {
    const { stories } = this.props;

    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }

    return (
      <>
        <h1>hacker next</h1>
        <div>{stories.map(story => (
            <h2 key={story.id}>{story.title}</h2>
          
          )
        )}</div>
      </>
    )
  }
};

export default Index;