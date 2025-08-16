export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Comment = {
  __typename?: 'Comment';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  postId: Scalars['ID']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Scalars['String']['output']>;
  createUser: User;
  deletePost?: Maybe<Scalars['String']['output']>;
  deleteUser: Scalars['String']['output'];
  likePost?: Maybe<Scalars['String']['output']>;
  updatePost?: Maybe<Scalars['String']['output']>;
  updateUser: User;
};

export type MutationCreatePostArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type MutationCreateUserArgs = {
  bio?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationLikePostArgs = {
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type MutationUpdatePostArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUserArgs = {
  bio?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  commentCount?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getComments?: Maybe<Array<Maybe<Comment>>>;
  getPost?: Maybe<Post>;
  getPosts?: Maybe<Array<Maybe<Post>>>;
  selectAllUsers: Array<Maybe<User>>;
  selectUser?: Maybe<User>;
};

export type QueryGetCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['ID']['input'];
};

export type QueryGetPostArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetPostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type QuerySelectUserArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};
