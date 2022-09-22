/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPostLike = /* GraphQL */ `
  query GetPostLike($id: ID!) {
    getPostLike(id: $id) {
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
export const listPostLikes = /* GraphQL */ `
  query ListPostLikes(
    $filter: ModelPostLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
  }
`;
export const syncPostLikes = /* GraphQL */ `
  query SyncPostLikes(
    $filter: ModelPostLikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCommentLike = /* GraphQL */ `
  query GetCommentLike($id: ID!) {
    getCommentLike(id: $id) {
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
export const listCommentLikes = /* GraphQL */ `
  query ListCommentLikes(
    $filter: ModelCommentLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        comment {
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
        commentLikesId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCommentLikes = /* GraphQL */ `
  query SyncCommentLikes(
    $filter: ModelCommentLikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCommentLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        comment {
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
        commentLikesId
      }
      nextToken
      startedAt
    }
  }
`;
