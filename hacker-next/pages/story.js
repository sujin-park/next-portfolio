import axios from 'axios';
import Error from 'next/error';
import Layout from '../components/Layout';

const Story = ({ story }) => {

  if (!story) {
    return <Error statusCode={503} />
  }

  return (
    <Layout title={story.title}>
      <main>
        <h1 clasName="story-title">
          <a href={story.url}>{story.title}</a>
        </h1>
        <div className="story-details">
          <strong>{story.points}</strong>
          <strong>{story.comments_count}</strong>
          <strong>{story.time_ago}</strong>
        </div>
      </main> 
    </Layout>
  )
}

Story.getInitialProps = ({ req, res, query }) => {
  let story;
  
  try {
    const storyId = query.id;
    const response = await axios.get(`https://node-hnapi.herokuap.com/item/${storyId}`)
    story = await res.data;
  } catch (err) {
    console.log(err);
    story = null;
  }
};