import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  readonly _eq: InputMaybe<Scalars['String']>;
  readonly _gt: InputMaybe<Scalars['String']>;
  readonly _gte: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  readonly _ilike: InputMaybe<Scalars['String']>;
  readonly _in: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  readonly _iregex: InputMaybe<Scalars['String']>;
  readonly _is_null: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  readonly _like: InputMaybe<Scalars['String']>;
  readonly _lt: InputMaybe<Scalars['String']>;
  readonly _lte: InputMaybe<Scalars['String']>;
  readonly _neq: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  readonly _nilike: InputMaybe<Scalars['String']>;
  readonly _nin: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  readonly _niregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  readonly _nlike: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  readonly _nregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  readonly _nsimilar: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  readonly _regex: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  readonly _similar: InputMaybe<Scalars['String']>;
};

/**
 * Chat Messages App
 *
 *
 * columns and relationships of "messages"
 *
 */
export type Messages = {
  readonly created_at: Scalars['timestamptz'];
  readonly message: Scalars['String'];
  readonly recipient: Scalars['uuid'];
  /** An object relationship */
  readonly recipient_user: Maybe<User>;
  readonly sender: Scalars['uuid'];
  /** An object relationship */
  readonly sender_user: Maybe<User>;
};

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  readonly aggregate: Maybe<Messages_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<Messages>;
};

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  readonly count: Scalars['Int'];
  readonly max: Maybe<Messages_Max_Fields>;
  readonly min: Maybe<Messages_Min_Fields>;
};


/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<ReadonlyArray<Messages_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  readonly count: InputMaybe<Order_By>;
  readonly max: InputMaybe<Messages_Max_Order_By>;
  readonly min: InputMaybe<Messages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  readonly data: ReadonlyArray<Messages_Insert_Input>;
  /** on conflict condition */
  readonly on_conflict: InputMaybe<Messages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  readonly _and: InputMaybe<ReadonlyArray<Messages_Bool_Exp>>;
  readonly _not: InputMaybe<Messages_Bool_Exp>;
  readonly _or: InputMaybe<ReadonlyArray<Messages_Bool_Exp>>;
  readonly created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly message: InputMaybe<String_Comparison_Exp>;
  readonly recipient: InputMaybe<Uuid_Comparison_Exp>;
  readonly recipient_user: InputMaybe<User_Bool_Exp>;
  readonly sender: InputMaybe<Uuid_Comparison_Exp>;
  readonly sender_user: InputMaybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = 'messages_pkey'
}

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  readonly created_at: InputMaybe<Scalars['timestamptz']>;
  readonly message: InputMaybe<Scalars['String']>;
  readonly recipient: InputMaybe<Scalars['uuid']>;
  readonly recipient_user: InputMaybe<User_Obj_Rel_Insert_Input>;
  readonly sender: InputMaybe<Scalars['uuid']>;
  readonly sender_user: InputMaybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Messages_Max_Fields = {
  readonly created_at: Maybe<Scalars['timestamptz']>;
  readonly message: Maybe<Scalars['String']>;
  readonly recipient: Maybe<Scalars['uuid']>;
  readonly sender: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  readonly created_at: InputMaybe<Order_By>;
  readonly message: InputMaybe<Order_By>;
  readonly recipient: InputMaybe<Order_By>;
  readonly sender: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Messages_Min_Fields = {
  readonly created_at: Maybe<Scalars['timestamptz']>;
  readonly message: Maybe<Scalars['String']>;
  readonly recipient: Maybe<Scalars['uuid']>;
  readonly sender: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  readonly created_at: InputMaybe<Order_By>;
  readonly message: InputMaybe<Order_By>;
  readonly recipient: InputMaybe<Order_By>;
  readonly sender: InputMaybe<Order_By>;
};

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<Messages>;
};

/** on conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  readonly constraint: Messages_Constraint;
  readonly update_columns: ReadonlyArray<Messages_Update_Column>;
  readonly where: InputMaybe<Messages_Bool_Exp>;
};

/** Ordering options when selecting data from "messages". */
export type Messages_Order_By = {
  readonly created_at: InputMaybe<Order_By>;
  readonly message: InputMaybe<Order_By>;
  readonly recipient: InputMaybe<Order_By>;
  readonly recipient_user: InputMaybe<User_Order_By>;
  readonly sender: InputMaybe<Order_By>;
  readonly sender_user: InputMaybe<User_Order_By>;
};

/** primary key columns input for table: messages */
export type Messages_Pk_Columns_Input = {
  readonly created_at: Scalars['timestamptz'];
  readonly recipient: Scalars['uuid'];
  readonly sender: Scalars['uuid'];
};

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Message = 'message',
  /** column name */
  Recipient = 'recipient',
  /** column name */
  Sender = 'sender'
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  readonly created_at: InputMaybe<Scalars['timestamptz']>;
  readonly message: InputMaybe<Scalars['String']>;
  readonly recipient: InputMaybe<Scalars['uuid']>;
  readonly sender: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Message = 'message',
  /** column name */
  Recipient = 'recipient',
  /** column name */
  Sender = 'sender'
}

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "messages" */
  readonly delete_messages: Maybe<Messages_Mutation_Response>;
  /** delete single row from the table: "messages" */
  readonly delete_messages_by_pk: Maybe<Messages>;
  /** delete data from the table: "user" */
  readonly delete_user: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  readonly delete_user_by_pk: Maybe<User>;
  /** insert data into the table: "messages" */
  readonly insert_messages: Maybe<Messages_Mutation_Response>;
  /** insert a single row into the table: "messages" */
  readonly insert_messages_one: Maybe<Messages>;
  /** insert data into the table: "user" */
  readonly insert_user: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  readonly insert_user_one: Maybe<User>;
  /** update data of the table: "messages" */
  readonly update_messages: Maybe<Messages_Mutation_Response>;
  /** update single row of the table: "messages" */
  readonly update_messages_by_pk: Maybe<Messages>;
  /** update data of the table: "user" */
  readonly update_user: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  readonly update_user_by_pk: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  created_at: Scalars['timestamptz'];
  recipient: Scalars['uuid'];
  sender: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_MessagesArgs = {
  objects: ReadonlyArray<Messages_Insert_Input>;
  on_conflict: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: ReadonlyArray<User_Insert_Input>;
  on_conflict: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_MessagesArgs = {
  _set: InputMaybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _set: InputMaybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  /** fetch data from the table: "messages" */
  readonly messages: ReadonlyArray<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  readonly messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  readonly messages_by_pk: Maybe<Messages>;
  /** fetch data from the table: "user" */
  readonly user: ReadonlyArray<User>;
  /** fetch aggregated fields from the table: "user" */
  readonly user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  readonly user_by_pk: Maybe<User>;
};


export type Query_RootMessagesArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Messages_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Messages_Order_By>>;
  where: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Messages_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Messages_Order_By>>;
  where: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_By_PkArgs = {
  created_at: Scalars['timestamptz'];
  recipient: Scalars['uuid'];
  sender: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on: InputMaybe<ReadonlyArray<User_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<User_Order_By>>;
  where: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<User_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<User_Order_By>>;
  where: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  /** fetch data from the table: "messages" */
  readonly messages: ReadonlyArray<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  readonly messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  readonly messages_by_pk: Maybe<Messages>;
  /** fetch data from the table: "user" */
  readonly user: ReadonlyArray<User>;
  /** fetch aggregated fields from the table: "user" */
  readonly user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  readonly user_by_pk: Maybe<User>;
};


export type Subscription_RootMessagesArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Messages_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Messages_Order_By>>;
  where: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Messages_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Messages_Order_By>>;
  where: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_By_PkArgs = {
  created_at: Scalars['timestamptz'];
  recipient: Scalars['uuid'];
  sender: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on: InputMaybe<ReadonlyArray<User_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<User_Order_By>>;
  where: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<User_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<User_Order_By>>;
  where: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  readonly _eq: InputMaybe<Scalars['timestamptz']>;
  readonly _gt: InputMaybe<Scalars['timestamptz']>;
  readonly _gte: InputMaybe<Scalars['timestamptz']>;
  readonly _in: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>;
  readonly _is_null: InputMaybe<Scalars['Boolean']>;
  readonly _lt: InputMaybe<Scalars['timestamptz']>;
  readonly _lte: InputMaybe<Scalars['timestamptz']>;
  readonly _neq: InputMaybe<Scalars['timestamptz']>;
  readonly _nin: InputMaybe<ReadonlyArray<Scalars['timestamptz']>>;
};

/**
 * User Table
 *
 *
 * columns and relationships of "user"
 *
 */
export type User = {
  readonly createdAt: Scalars['timestamptz'];
  readonly email: Scalars['String'];
  readonly id: Scalars['uuid'];
  readonly image: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly profileId: Maybe<Scalars['String']>;
  /** An array relationship */
  readonly received_messages: ReadonlyArray<Messages>;
  /** An aggregate relationship */
  readonly received_messages_aggregate: Messages_Aggregate;
  /** An array relationship */
  readonly sent_messages: ReadonlyArray<Messages>;
  /** An aggregate relationship */
  readonly sent_messages_aggregate: Messages_Aggregate;
};


/**
 * User Table
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserReceived_MessagesArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Messages_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Messages_Order_By>>;
  where: InputMaybe<Messages_Bool_Exp>;
};


/**
 * User Table
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserReceived_Messages_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Messages_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Messages_Order_By>>;
  where: InputMaybe<Messages_Bool_Exp>;
};


/**
 * User Table
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserSent_MessagesArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Messages_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Messages_Order_By>>;
  where: InputMaybe<Messages_Bool_Exp>;
};


/**
 * User Table
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserSent_Messages_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<Messages_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<Messages_Order_By>>;
  where: InputMaybe<Messages_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  readonly aggregate: Maybe<User_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  readonly count: Scalars['Int'];
  readonly max: Maybe<User_Max_Fields>;
  readonly min: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<ReadonlyArray<User_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  readonly _and: InputMaybe<ReadonlyArray<User_Bool_Exp>>;
  readonly _not: InputMaybe<User_Bool_Exp>;
  readonly _or: InputMaybe<ReadonlyArray<User_Bool_Exp>>;
  readonly createdAt: InputMaybe<Timestamptz_Comparison_Exp>;
  readonly email: InputMaybe<String_Comparison_Exp>;
  readonly id: InputMaybe<Uuid_Comparison_Exp>;
  readonly image: InputMaybe<String_Comparison_Exp>;
  readonly name: InputMaybe<String_Comparison_Exp>;
  readonly profileId: InputMaybe<String_Comparison_Exp>;
  readonly received_messages: InputMaybe<Messages_Bool_Exp>;
  readonly sent_messages: InputMaybe<Messages_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  readonly createdAt: InputMaybe<Scalars['timestamptz']>;
  readonly email: InputMaybe<Scalars['String']>;
  readonly id: InputMaybe<Scalars['uuid']>;
  readonly image: InputMaybe<Scalars['String']>;
  readonly name: InputMaybe<Scalars['String']>;
  readonly profileId: InputMaybe<Scalars['String']>;
  readonly received_messages: InputMaybe<Messages_Arr_Rel_Insert_Input>;
  readonly sent_messages: InputMaybe<Messages_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  readonly createdAt: Maybe<Scalars['timestamptz']>;
  readonly email: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['uuid']>;
  readonly image: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly profileId: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  readonly createdAt: Maybe<Scalars['timestamptz']>;
  readonly email: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['uuid']>;
  readonly image: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly profileId: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  readonly data: User_Insert_Input;
  /** on conflict condition */
  readonly on_conflict: InputMaybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  readonly constraint: User_Constraint;
  readonly update_columns: ReadonlyArray<User_Update_Column>;
  readonly where: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  readonly createdAt: InputMaybe<Order_By>;
  readonly email: InputMaybe<Order_By>;
  readonly id: InputMaybe<Order_By>;
  readonly image: InputMaybe<Order_By>;
  readonly name: InputMaybe<Order_By>;
  readonly profileId: InputMaybe<Order_By>;
  readonly received_messages_aggregate: InputMaybe<Messages_Aggregate_Order_By>;
  readonly sent_messages_aggregate: InputMaybe<Messages_Aggregate_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  ProfileId = 'profileId'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  readonly createdAt: InputMaybe<Scalars['timestamptz']>;
  readonly email: InputMaybe<Scalars['String']>;
  readonly id: InputMaybe<Scalars['uuid']>;
  readonly image: InputMaybe<Scalars['String']>;
  readonly name: InputMaybe<Scalars['String']>;
  readonly profileId: InputMaybe<Scalars['String']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  ProfileId = 'profileId'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  readonly _eq: InputMaybe<Scalars['uuid']>;
  readonly _gt: InputMaybe<Scalars['uuid']>;
  readonly _gte: InputMaybe<Scalars['uuid']>;
  readonly _in: InputMaybe<ReadonlyArray<Scalars['uuid']>>;
  readonly _is_null: InputMaybe<Scalars['Boolean']>;
  readonly _lt: InputMaybe<Scalars['uuid']>;
  readonly _lte: InputMaybe<Scalars['uuid']>;
  readonly _neq: InputMaybe<Scalars['uuid']>;
  readonly _nin: InputMaybe<ReadonlyArray<Scalars['uuid']>>;
};

export type GetAllMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMessagesQuery = { readonly user: ReadonlyArray<{ readonly id: any, readonly name: string, readonly sent_messages: ReadonlyArray<{ readonly created_at: any, readonly message: string, readonly recipient_user: { readonly name: string } | null }> }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { readonly user: ReadonlyArray<{ readonly id: any, readonly name: string, readonly image: string | null }> };

export type GetUserByIdQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type GetUserByIdQuery = { readonly user_by_pk: { readonly id: any, readonly name: string, readonly image: string | null } | null };

export type SendMessageMutationVariables = Exact<{
  sender: Scalars['uuid'];
  recipient: Scalars['uuid'];
  message: Scalars['String'];
}>;


export type SendMessageMutation = { readonly insert_messages_one: { readonly created_at: any } | null };

export type ReceivedMessagesByUserIdSubscriptionVariables = Exact<{
  sender: InputMaybe<ReadonlyArray<Scalars['uuid']> | Scalars['uuid']>;
  recipient: InputMaybe<ReadonlyArray<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type ReceivedMessagesByUserIdSubscription = { readonly messages: ReadonlyArray<{ readonly created_at: any, readonly message: string, readonly recipient_user: { readonly id: any, readonly image: string | null, readonly name: string } | null, readonly sender_user: { readonly id: any, readonly image: string | null, readonly name: string } | null }> };

export const GetAllMessagesDocument = gql`
    query GetAllMessages {
  user {
    id
    name
    sent_messages {
      recipient_user {
        name
      }
      created_at
      message
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllMessagesGQL extends Apollo.Query<GetAllMessagesQuery, GetAllMessagesQueryVariables> {
    document = GetAllMessagesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  user {
    id
    name
    image
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllUsersGQL extends Apollo.Query<GetAllUsersQuery, GetAllUsersQueryVariables> {
    document = GetAllUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserByIdDocument = gql`
    query GetUserById($user_id: uuid!) {
  user_by_pk(id: $user_id) {
    id
    name
    image
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserByIdGQL extends Apollo.Query<GetUserByIdQuery, GetUserByIdQueryVariables> {
    document = GetUserByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SendMessageDocument = gql`
    mutation SendMessage($sender: uuid!, $recipient: uuid!, $message: String!) {
  insert_messages_one(
    object: {sender: $sender, recipient: $recipient, message: $message}
  ) {
    created_at
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SendMessageGQL extends Apollo.Mutation<SendMessageMutation, SendMessageMutationVariables> {
    document = SendMessageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ReceivedMessagesByUserIdDocument = gql`
    subscription ReceivedMessagesByUserId($sender: [uuid!], $recipient: [uuid!]) {
  messages(
    where: {recipient: {_in: $recipient}, sender: {_in: $sender}}
    order_by: {created_at: asc}
  ) {
    created_at
    message
    recipient_user {
      id
      image
      name
    }
    sender_user {
      id
      image
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ReceivedMessagesByUserIdGQL extends Apollo.Subscription<ReceivedMessagesByUserIdSubscription, ReceivedMessagesByUserIdSubscriptionVariables> {
    document = ReceivedMessagesByUserIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }