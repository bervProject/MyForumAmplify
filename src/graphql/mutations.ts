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
          postID
          content
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      likes {
        items {
          id
          postID
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      selectedComment {
        id
        postID
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
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          postID
          content
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      likes {
        items {
          id
          postID
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      selectedComment {
        id
        postID
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
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          postID
          content
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      likes {
        items {
          id
          postID
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      selectedComment {
        id
        postID
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
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      postID
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
          postID
          content
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      postID
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
          postID
          content
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      postID
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
          postID
          content
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      postID
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
          postID
          content
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      content
      likes {
        items {
          id
          commentID
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
      postID
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
          postID
          content
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      content
      likes {
        items {
          id
          commentID
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
      postID
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
          postID
          content
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        owner
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      content
      likes {
        items {
          id
          commentID
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
      commentID
      comment {
        id
        postID
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
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      commentID
      comment {
        id
        postID
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
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      commentID
      comment {
        id
        postID
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
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
