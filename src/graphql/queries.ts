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
      nextToken
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
          postSelectedCommentId
        }
        owner
        createdAt
        updatedAt
        postLikesId
      }
      nextToken
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
      nextToken
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
          postCommentsId
        }
        owner
        createdAt
        updatedAt
        commentLikesId
      }
      nextToken
    }
  }
`;
