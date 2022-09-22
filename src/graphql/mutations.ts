/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
          _version
          _deleted
          _lastChangedAt
          postCommentsId
        }
        nextToken
        startedAt
      }
      likes {
        items {
          id
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postLikesId
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          postSelectedCommentId
        }
        content
        likes {
          nextToken
          startedAt
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postCommentsId
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          postCommentsId
        }
        nextToken
        startedAt
      }
      likes {
        items {
          id
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postLikesId
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          postSelectedCommentId
        }
        content
        likes {
          nextToken
          startedAt
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postCommentsId
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postSelectedCommentId
    }
  }
`;
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
          _version
          _deleted
          _lastChangedAt
          postCommentsId
        }
        nextToken
        startedAt
      }
      likes {
        items {
          id
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postLikesId
        }
        nextToken
        startedAt
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
          _version
          _deleted
          _lastChangedAt
          postSelectedCommentId
        }
        content
        likes {
          nextToken
          startedAt
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postCommentsId
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        selectedComment {
          id
          content
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postCommentsId
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postSelectedCommentId
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        selectedComment {
          id
          content
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postCommentsId
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postSelectedCommentId
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postLikesId
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
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        selectedComment {
          id
          content
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postCommentsId
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postSelectedCommentId
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        selectedComment {
          id
          content
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postCommentsId
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postSelectedCommentId
      }
      content
      likes {
        items {
          id
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          commentLikesId
        }
        nextToken
        startedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        selectedComment {
          id
          content
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postCommentsId
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postSelectedCommentId
      }
      content
      likes {
        items {
          id
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          commentLikesId
        }
        nextToken
        startedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postCommentsId
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
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        selectedComment {
          id
          content
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postCommentsId
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postSelectedCommentId
      }
      content
      likes {
        items {
          id
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          commentLikesId
        }
        nextToken
        startedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          postSelectedCommentId
        }
        content
        likes {
          nextToken
          startedAt
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postCommentsId
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          postSelectedCommentId
        }
        content
        likes {
          nextToken
          startedAt
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postCommentsId
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      commentLikesId
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
          _version
          _deleted
          _lastChangedAt
          postSelectedCommentId
        }
        content
        likes {
          nextToken
          startedAt
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        postCommentsId
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      commentLikesId
    }
  }
`;
