/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
export const onCreatePostLike = /* GraphQL */ `
  subscription OnCreatePostLike($owner: String) {
    onCreatePostLike(owner: $owner) {
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
export const onUpdatePostLike = /* GraphQL */ `
  subscription OnUpdatePostLike($owner: String) {
    onUpdatePostLike(owner: $owner) {
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
export const onDeletePostLike = /* GraphQL */ `
  subscription OnDeletePostLike($owner: String) {
    onDeletePostLike(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
export const onCreateCommentLike = /* GraphQL */ `
  subscription OnCreateCommentLike($owner: String) {
    onCreateCommentLike(owner: $owner) {
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
export const onUpdateCommentLike = /* GraphQL */ `
  subscription OnUpdateCommentLike($owner: String) {
    onUpdateCommentLike(owner: $owner) {
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
export const onDeleteCommentLike = /* GraphQL */ `
  subscription OnDeleteCommentLike($owner: String) {
    onDeleteCommentLike(owner: $owner) {
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
