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
