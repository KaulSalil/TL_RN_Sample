import {useQuery} from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log(`data:${data.length}`);
  return data;
};

const usePosts = () => useQuery('posts', fetchPosts);
export default usePosts;
