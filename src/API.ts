/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type DeletePostInput = {
  id: string,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  draft?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  postSelectedCommentId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  content: string,
  draft: boolean,
  comments?: ModelCommentConnection | null,
  likes?: ModelPostLikeConnection | null,
  selectedComment?: Comment | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  postSelectedCommentId?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  post?: Post | null,
  content: string,
  likes?: ModelCommentLikeConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  postCommentsId?: string | null,
};

export type ModelCommentLikeConnection = {
  __typename: "ModelCommentLikeConnection",
  items:  Array<CommentLike | null >,
  nextToken?: string | null,
};

export type CommentLike = {
  __typename: "CommentLike",
  id: string,
  comment?: Comment | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  commentLikesId?: string | null,
};

export type ModelPostLikeConnection = {
  __typename: "ModelPostLikeConnection",
  items:  Array<PostLike | null >,
  nextToken?: string | null,
};

export type PostLike = {
  __typename: "PostLike",
  id: string,
  post?: Post | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  postLikesId?: string | null,
};

export type DeletePostLikeInput = {
  id: string,
};

export type ModelPostLikeConditionInput = {
  owner?: ModelStringInput | null,
  and?: Array< ModelPostLikeConditionInput | null > | null,
  or?: Array< ModelPostLikeConditionInput | null > | null,
  not?: ModelPostLikeConditionInput | null,
  postLikesId?: ModelIDInput | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type DeleteCommentLikeInput = {
  id: string,
};

export type ModelCommentLikeConditionInput = {
  owner?: ModelStringInput | null,
  and?: Array< ModelCommentLikeConditionInput | null > | null,
  or?: Array< ModelCommentLikeConditionInput | null > | null,
  not?: ModelCommentLikeConditionInput | null,
  commentLikesId?: ModelIDInput | null,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  content: string,
  draft: boolean,
  owner?: string | null,
  postSelectedCommentId?: string | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  draft?: boolean | null,
  owner?: string | null,
  postSelectedCommentId?: string | null,
};

export type CreatePostLikeInput = {
  id?: string | null,
  owner?: string | null,
  postLikesId?: string | null,
};

export type UpdatePostLikeInput = {
  id: string,
  owner?: string | null,
  postLikesId?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  owner?: string | null,
  postCommentsId?: string | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  owner?: string | null,
  postCommentsId?: string | null,
};

export type CreateCommentLikeInput = {
  id?: string | null,
  owner?: string | null,
  commentLikesId?: string | null,
};

export type UpdateCommentLikeInput = {
  id: string,
  owner?: string | null,
  commentLikesId?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  draft?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  postSelectedCommentId?: ModelIDInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelPostLikeFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelPostLikeFilterInput | null > | null,
  or?: Array< ModelPostLikeFilterInput | null > | null,
  not?: ModelPostLikeFilterInput | null,
  postLikesId?: ModelIDInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type ModelCommentLikeFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCommentLikeFilterInput | null > | null,
  or?: Array< ModelCommentLikeFilterInput | null > | null,
  not?: ModelCommentLikeFilterInput | null,
  commentLikesId?: ModelIDInput | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    draft: boolean,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelPostLikeConnection",
      items:  Array< {
        __typename: "PostLike",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    selectedComment?:  {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        content: string,
        draft: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postSelectedCommentId?: string | null,
      } | null,
      content: string,
      likes?:  {
        __typename: "ModelCommentLikeConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postSelectedCommentId?: string | null,
  } | null,
};

export type DeletePostLikeMutationVariables = {
  input: DeletePostLikeInput,
  condition?: ModelPostLikeConditionInput | null,
};

export type DeletePostLikeMutation = {
  deletePostLike?:  {
    __typename: "PostLike",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      draft: boolean,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelPostLikeConnection",
        nextToken?: string | null,
      } | null,
      selectedComment?:  {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postSelectedCommentId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      draft: boolean,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelPostLikeConnection",
        nextToken?: string | null,
      } | null,
      selectedComment?:  {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postSelectedCommentId?: string | null,
    } | null,
    content: string,
    likes?:  {
      __typename: "ModelCommentLikeConnection",
      items:  Array< {
        __typename: "CommentLike",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        commentLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type DeleteCommentLikeMutationVariables = {
  input: DeleteCommentLikeInput,
  condition?: ModelCommentLikeConditionInput | null,
};

export type DeleteCommentLikeMutation = {
  deleteCommentLike?:  {
    __typename: "CommentLike",
    id: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        content: string,
        draft: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postSelectedCommentId?: string | null,
      } | null,
      content: string,
      likes?:  {
        __typename: "ModelCommentLikeConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    commentLikesId?: string | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    draft: boolean,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelPostLikeConnection",
      items:  Array< {
        __typename: "PostLike",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    selectedComment?:  {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        content: string,
        draft: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postSelectedCommentId?: string | null,
      } | null,
      content: string,
      likes?:  {
        __typename: "ModelCommentLikeConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postSelectedCommentId?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    draft: boolean,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelPostLikeConnection",
      items:  Array< {
        __typename: "PostLike",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    selectedComment?:  {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        content: string,
        draft: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postSelectedCommentId?: string | null,
      } | null,
      content: string,
      likes?:  {
        __typename: "ModelCommentLikeConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postSelectedCommentId?: string | null,
  } | null,
};

export type CreatePostLikeMutationVariables = {
  input: CreatePostLikeInput,
  condition?: ModelPostLikeConditionInput | null,
};

export type CreatePostLikeMutation = {
  createPostLike?:  {
    __typename: "PostLike",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      draft: boolean,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelPostLikeConnection",
        nextToken?: string | null,
      } | null,
      selectedComment?:  {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postSelectedCommentId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
  } | null,
};

export type UpdatePostLikeMutationVariables = {
  input: UpdatePostLikeInput,
  condition?: ModelPostLikeConditionInput | null,
};

export type UpdatePostLikeMutation = {
  updatePostLike?:  {
    __typename: "PostLike",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      draft: boolean,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelPostLikeConnection",
        nextToken?: string | null,
      } | null,
      selectedComment?:  {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postSelectedCommentId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      draft: boolean,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelPostLikeConnection",
        nextToken?: string | null,
      } | null,
      selectedComment?:  {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postSelectedCommentId?: string | null,
    } | null,
    content: string,
    likes?:  {
      __typename: "ModelCommentLikeConnection",
      items:  Array< {
        __typename: "CommentLike",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        commentLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      draft: boolean,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelPostLikeConnection",
        nextToken?: string | null,
      } | null,
      selectedComment?:  {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postSelectedCommentId?: string | null,
    } | null,
    content: string,
    likes?:  {
      __typename: "ModelCommentLikeConnection",
      items:  Array< {
        __typename: "CommentLike",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        commentLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type CreateCommentLikeMutationVariables = {
  input: CreateCommentLikeInput,
  condition?: ModelCommentLikeConditionInput | null,
};

export type CreateCommentLikeMutation = {
  createCommentLike?:  {
    __typename: "CommentLike",
    id: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        content: string,
        draft: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postSelectedCommentId?: string | null,
      } | null,
      content: string,
      likes?:  {
        __typename: "ModelCommentLikeConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    commentLikesId?: string | null,
  } | null,
};

export type UpdateCommentLikeMutationVariables = {
  input: UpdateCommentLikeInput,
  condition?: ModelCommentLikeConditionInput | null,
};

export type UpdateCommentLikeMutation = {
  updateCommentLike?:  {
    __typename: "CommentLike",
    id: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        content: string,
        draft: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postSelectedCommentId?: string | null,
      } | null,
      content: string,
      likes?:  {
        __typename: "ModelCommentLikeConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    commentLikesId?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    draft: boolean,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelPostLikeConnection",
      items:  Array< {
        __typename: "PostLike",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    selectedComment?:  {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        content: string,
        draft: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postSelectedCommentId?: string | null,
      } | null,
      content: string,
      likes?:  {
        __typename: "ModelCommentLikeConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postSelectedCommentId?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      draft: boolean,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelPostLikeConnection",
        nextToken?: string | null,
      } | null,
      selectedComment?:  {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postSelectedCommentId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostLikeQueryVariables = {
  id: string,
};

export type GetPostLikeQuery = {
  getPostLike?:  {
    __typename: "PostLike",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      draft: boolean,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelPostLikeConnection",
        nextToken?: string | null,
      } | null,
      selectedComment?:  {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postSelectedCommentId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
  } | null,
};

export type ListPostLikesQueryVariables = {
  filter?: ModelPostLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostLikesQuery = {
  listPostLikes?:  {
    __typename: "ModelPostLikeConnection",
    items:  Array< {
      __typename: "PostLike",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        content: string,
        draft: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postSelectedCommentId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postLikesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      draft: boolean,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelPostLikeConnection",
        nextToken?: string | null,
      } | null,
      selectedComment?:  {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postSelectedCommentId?: string | null,
    } | null,
    content: string,
    likes?:  {
      __typename: "ModelCommentLikeConnection",
      items:  Array< {
        __typename: "CommentLike",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        commentLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        content: string,
        draft: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postSelectedCommentId?: string | null,
      } | null,
      content: string,
      likes?:  {
        __typename: "ModelCommentLikeConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentLikeQueryVariables = {
  id: string,
};

export type GetCommentLikeQuery = {
  getCommentLike?:  {
    __typename: "CommentLike",
    id: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        content: string,
        draft: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postSelectedCommentId?: string | null,
      } | null,
      content: string,
      likes?:  {
        __typename: "ModelCommentLikeConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    commentLikesId?: string | null,
  } | null,
};

export type ListCommentLikesQueryVariables = {
  filter?: ModelCommentLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentLikesQuery = {
  listCommentLikes?:  {
    __typename: "ModelCommentLikeConnection",
    items:  Array< {
      __typename: "CommentLike",
      id: string,
      comment?:  {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      commentLikesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    draft: boolean,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelPostLikeConnection",
      items:  Array< {
        __typename: "PostLike",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    selectedComment?:  {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        content: string,
        draft: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postSelectedCommentId?: string | null,
      } | null,
      content: string,
      likes?:  {
        __typename: "ModelCommentLikeConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postSelectedCommentId?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    draft: boolean,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelPostLikeConnection",
      items:  Array< {
        __typename: "PostLike",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    selectedComment?:  {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        content: string,
        draft: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postSelectedCommentId?: string | null,
      } | null,
      content: string,
      likes?:  {
        __typename: "ModelCommentLikeConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postSelectedCommentId?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    draft: boolean,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelPostLikeConnection",
      items:  Array< {
        __typename: "PostLike",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    selectedComment?:  {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        content: string,
        draft: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postSelectedCommentId?: string | null,
      } | null,
      content: string,
      likes?:  {
        __typename: "ModelCommentLikeConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postSelectedCommentId?: string | null,
  } | null,
};

export type OnCreatePostLikeSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePostLikeSubscription = {
  onCreatePostLike?:  {
    __typename: "PostLike",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      draft: boolean,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelPostLikeConnection",
        nextToken?: string | null,
      } | null,
      selectedComment?:  {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postSelectedCommentId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
  } | null,
};

export type OnUpdatePostLikeSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePostLikeSubscription = {
  onUpdatePostLike?:  {
    __typename: "PostLike",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      draft: boolean,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelPostLikeConnection",
        nextToken?: string | null,
      } | null,
      selectedComment?:  {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postSelectedCommentId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
  } | null,
};

export type OnDeletePostLikeSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePostLikeSubscription = {
  onDeletePostLike?:  {
    __typename: "PostLike",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      draft: boolean,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelPostLikeConnection",
        nextToken?: string | null,
      } | null,
      selectedComment?:  {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postSelectedCommentId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postLikesId?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      draft: boolean,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelPostLikeConnection",
        nextToken?: string | null,
      } | null,
      selectedComment?:  {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postSelectedCommentId?: string | null,
    } | null,
    content: string,
    likes?:  {
      __typename: "ModelCommentLikeConnection",
      items:  Array< {
        __typename: "CommentLike",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        commentLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      draft: boolean,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelPostLikeConnection",
        nextToken?: string | null,
      } | null,
      selectedComment?:  {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postSelectedCommentId?: string | null,
    } | null,
    content: string,
    likes?:  {
      __typename: "ModelCommentLikeConnection",
      items:  Array< {
        __typename: "CommentLike",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        commentLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      draft: boolean,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelPostLikeConnection",
        nextToken?: string | null,
      } | null,
      selectedComment?:  {
        __typename: "Comment",
        id: string,
        content: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postSelectedCommentId?: string | null,
    } | null,
    content: string,
    likes?:  {
      __typename: "ModelCommentLikeConnection",
      items:  Array< {
        __typename: "CommentLike",
        id: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        commentLikesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnCreateCommentLikeSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCommentLikeSubscription = {
  onCreateCommentLike?:  {
    __typename: "CommentLike",
    id: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        content: string,
        draft: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postSelectedCommentId?: string | null,
      } | null,
      content: string,
      likes?:  {
        __typename: "ModelCommentLikeConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    commentLikesId?: string | null,
  } | null,
};

export type OnUpdateCommentLikeSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCommentLikeSubscription = {
  onUpdateCommentLike?:  {
    __typename: "CommentLike",
    id: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        content: string,
        draft: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postSelectedCommentId?: string | null,
      } | null,
      content: string,
      likes?:  {
        __typename: "ModelCommentLikeConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    commentLikesId?: string | null,
  } | null,
};

export type OnDeleteCommentLikeSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCommentLikeSubscription = {
  onDeleteCommentLike?:  {
    __typename: "CommentLike",
    id: string,
    comment?:  {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        content: string,
        draft: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        postSelectedCommentId?: string | null,
      } | null,
      content: string,
      likes?:  {
        __typename: "ModelCommentLikeConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    commentLikesId?: string | null,
  } | null,
};
