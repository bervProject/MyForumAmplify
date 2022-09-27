import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentLikeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostLikeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly draft: boolean;
  readonly comments?: (Comment | null)[] | null;
  readonly likes?: (PostLike | null)[] | null;
  readonly selectedComment?: Comment | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly post?: Post | null;
  readonly content: string;
  readonly likes?: (CommentLike | null)[] | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class CommentLike {
  readonly id: string;
  readonly comment?: Comment | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CommentLike, CommentLikeMetaData>);
  static copyOf(source: CommentLike, mutator: (draft: MutableModel<CommentLike, CommentLikeMetaData>) => MutableModel<CommentLike, CommentLikeMetaData> | void): CommentLike;
}

export declare class PostLike {
  readonly id: string;
  readonly post?: Post | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PostLike, PostLikeMetaData>);
  static copyOf(source: PostLike, mutator: (draft: MutableModel<PostLike, PostLikeMetaData>) => MutableModel<PostLike, PostLikeMetaData> | void): PostLike;
}