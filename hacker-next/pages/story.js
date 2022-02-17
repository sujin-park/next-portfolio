import axios from 'axios';
import Error from 'next/error';
import Layout from '../components/Layout';
import CommentList from '../components/CommentList';

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

        {/* {story.comments.length > 0 ? (
          <CommentList comments={story.comments}/>
        ) : (
          <div>No comments for this story</div>
        )} */}
      </main>
    </Layout>
  )
}

Story.getInitialProps = async ({ req, res, query }) => {
  let story;
  
  try {
    const storyId = query.id;
    const { data } = await axios.get(`https://node-hnapi.herokuap.com/item/${storyId}`)

    story = data;
  } catch (err) {
    story = null;
    console.log(err);
  }

  return { story };
};

export default Story;