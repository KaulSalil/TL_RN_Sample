import {useQuery} from 'react-query';
import axios from 'axios';
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const fetchPosts = async (): Promise<Post[]> => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log(`data:${data.length}`);
  return data;
};

const usePosts = () => useQuery('posts', fetchPosts);
export default usePosts;
