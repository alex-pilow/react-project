import { gql, useMutation } from '@apollo/client'

const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
  likePhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`

export const UseLikeMutation = () => {
  const [toggleLikePhoto] = useMutation(LIKE_PHOTO)

  return { toggleLikePhoto }
}

/*
export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE_PHOTO}>
      {children}
    </Mutation>
  )
}
*/
