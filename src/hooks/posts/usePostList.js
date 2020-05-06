import { useSelector } from 'react-redux'

export default function usePostList() {
  return useSelector(({ posts }) => posts.postList)
}
