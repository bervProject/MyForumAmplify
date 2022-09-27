// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Comment, CommentLike, PostLike } = initSchema(schema);

export {
  Post,
  Comment,
  CommentLike,
  PostLike
};