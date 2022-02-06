import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <Layout title={title}>
      <p>포스팅 내용</p>
    </Layout>
  )
};

export default Post;