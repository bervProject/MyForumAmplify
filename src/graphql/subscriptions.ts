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
export const onCreatePostLike = /* GraphQL */ `
  subscription OnCreatePostLike($owner: String) {
    onCreatePostLike(owner: $owner) {
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
export const onUpdatePostLike = /* GraphQL */ `
  subscription OnUpdatePostLike($owner: String) {
    onUpdatePostLike(owner: $owner) {
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
export const onDeletePostLike = /* GraphQL */ `
  subscription OnDeletePostLike($owner: String) {
    onDeletePostLike(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
export const onCreateCommentLike = /* GraphQL */ `
  subscription OnCreateCommentLike($owner: String) {
    onCreateCommentLike(owner: $owner) {
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
export const onUpdateCommentLike = /* GraphQL */ `
  subscription OnUpdateCommentLike($owner: String) {
    onUpdateCommentLike(owner: $owner) {
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
export const onDeleteCommentLike = /* GraphQL */ `
  subscription OnDeleteCommentLike($owner: String) {
    onDeleteCommentLike(owner: $owner) {
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
