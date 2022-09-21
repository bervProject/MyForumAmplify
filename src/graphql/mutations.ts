/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      content
      draft
      comments {
        items {
          id
          content
          owner
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      likes {
        items {
          id
          owner
          createdAt
          updatedAt
          postLikesId
        }
        nextToken
      }
      selectedComment {
        id
        post {
          id
          title
          content
          draft
          owner
          createdAt
          updatedAt
          postSelectedCommentId
        }
        content
        likes {
          nextToken
        }
        owner
        createdAt
        updatedAt
        postCommentsId
      }
      owner
      createdAt
      updatedAt
      postSelectedCommentId
    }
  }
`;
export const deletePostLike = /* GraphQL */ `
  mutation DeletePostLike(
    $input: DeletePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    deletePostLike(input: $input, condition: $condition) {
      id
      post {
        id
        title
        content
        draft
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        selectedComment {
          id
          content
          owner
          createdAt
          updatedAt
          postCommentsId
        }
        owner
        createdAt
        updatedAt
        postSelectedCommentId
      }
      owner
      createdAt
      updatedAt
      postLikesId
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        content
        draft
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        selectedComment {
          id
          content
          owner
          createdAt
          updatedAt
          postCommentsId
        }
        owner
        createdAt
        updatedAt
        postSelectedCommentId
      }
      content
      likes {
        items {
          id
          owner
          createdAt
          updatedAt
          commentLikesId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const deleteCommentLike = /* GraphQL */ `
  mutation DeleteCommentLike(
    $input: DeleteCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    deleteCommentLike(input: $input, condition: $condition) {
      id
      comment {
        id
        post {
          id
          title
          content
          draft
          owner
          createdAt
          updatedAt
          postSelectedCommentId
        }
        content
        likes {
          nextToken
        }
        owner
        createdAt
        updatedAt
        postCommentsId
      }
      owner
      createdAt
      updatedAt
      commentLikesId
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      content
      draft
      comments {
        items {
          id
          content
          owner
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      likes {
        items {
          id
          owner
          createdAt
          updatedAt
          postLikesId
        }
        nextToken
      }
      selectedComment {
        id
        post {
          id
          title
          content
          draft
          owner
          createdAt
          updatedAt
          postSelectedCommentId
        }
        content
        likes {
          nextToken
        }
        owner
        createdAt
        updatedAt
        postCommentsId
      }
      owner
      createdAt
      updatedAt
      postSelectedCommentId
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      content
      draft
      comments {
        items {
          id
          content
          owner
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      likes {
        items {
          id
          owner
          createdAt
          updatedAt
          postLikesId
        }
        nextToken
      }
      selectedComment {
        id
        post {
          id
          title
          content
          draft
          owner
          createdAt
          updatedAt
          postSelectedCommentId
        }
        content
        likes {
          nextToken
        }
        owner
        createdAt
        updatedAt
        postCommentsId
      }
      owner
      createdAt
      updatedAt
      postSelectedCommentId
    }
  }
`;
export const createPostLike = /* GraphQL */ `
  mutation CreatePostLike(
    $input: CreatePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    createPostLike(input: $input, condition: $condition) {
      id
      post {
        id
        title
        content
        draft
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        selectedComment {
          id
          content
          owner
          createdAt
          updatedAt
          postCommentsId
        }
        owner
        createdAt
        updatedAt
        postSelectedCommentId
      }
      owner
      createdAt
      updatedAt
      postLikesId
    }
  }
`;
export const updatePostLike = /* GraphQL */ `
  mutation UpdatePostLike(
    $input: UpdatePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    updatePostLike(input: $input, condition: $condition) {
      id
      post {
        id
        title
        content
        draft
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        selectedComment {
          id
          content
          owner
          createdAt
          updatedAt
          postCommentsId
        }
        owner
        createdAt
        updatedAt
        postSelectedCommentId
      }
      owner
      createdAt
      updatedAt
      postLikesId
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        content
        draft
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        selectedComment {
          id
          content
          owner
          createdAt
          updatedAt
          postCommentsId
        }
        owner
        createdAt
        updatedAt
        postSelectedCommentId
      }
      content
      likes {
        items {
          id
          owner
          createdAt
          updatedAt
          commentLikesId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      post {
        id
        title
        content
        draft
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        selectedComment {
          id
          content
          owner
          createdAt
          updatedAt
          postCommentsId
        }
        owner
        createdAt
        updatedAt
        postSelectedCommentId
      }
      content
      likes {
        items {
          id
          owner
          createdAt
          updatedAt
          commentLikesId
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const createCommentLike = /* GraphQL */ `
  mutation CreateCommentLike(
    $input: CreateCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    createCommentLike(input: $input, condition: $condition) {
      id
      comment {
        id
        post {
          id
          title
          content
          draft
          owner
          createdAt
          updatedAt
          postSelectedCommentId
        }
        content
        likes {
          nextToken
        }
        owner
        createdAt
        updatedAt
        postCommentsId
      }
      owner
      createdAt
      updatedAt
      commentLikesId
    }
  }
`;
export const updateCommentLike = /* GraphQL */ `
  mutation UpdateCommentLike(
    $input: UpdateCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    updateCommentLike(input: $input, condition: $condition) {
      id
      comment {
        id
        post {
          id
          title
          content
          draft
          owner
          createdAt
          updatedAt
          postSelectedCommentId
        }
        content
        likes {
          nextToken
        }
        owner
        createdAt
        updatedAt
        postCommentsId
      }
      owner
      createdAt
      updatedAt
      commentLikesId
    }
  }
`;
