import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Guid } from 'guid-typescript';
import { catchError, map, Observable, tap } from 'rxjs';
import {
  GetAllMessagesGQL,
  GetAllMessagesQuery,
  GetAllUsersGQL,
  GetAllUsersQuery,
  GetUserByIdGQL,
  GetUserByIdQuery,
  ReceivedMessagesByUserIdGQL,
  ReceivedMessagesByUserIdSubscription,
  SendMessageGQL
} from './_generated';

@Injectable({
  providedIn: 'root',
})
export class GraphQLService {
  constructor(
    private getAllUsersMessages: GetAllMessagesGQL,
    private getUserByIdGQL: GetUserByIdGQL,
    private getAllUsersGQL: GetAllUsersGQL,
    private sendMessageMutation: SendMessageGQL,
    private receivedMessagesByUserIdSubscription: ReceivedMessagesByUserIdGQL
  ) { }

  public getAllMessages(): Observable<ApolloQueryResult<GetAllMessagesQuery>> {
    return this.getAllUsersMessages.watch().valueChanges.pipe(tap((result) => console.log(result)));
  }

  public getUserById(userId: Guid): Observable<GetUserByIdQuery | any> {
    return this.getUserByIdGQL.watch({ user_id: userId.toString() }).valueChanges.pipe(
      tap((result) => console.log(result)),
      map((result) => result.data),
      catchError(error => {
        console.log(error);
        return error;
      }));
  }

  public getAllUsers(): Observable<GetAllUsersQuery> {
    return this.getAllUsersGQL.watch().valueChanges.pipe(
      tap((result) => console.log(result)),
      map((result) => result.data));
  }

  public sendMessage(senderId: Guid, recipientId: Guid, message: string): void {
    this.sendMessageMutation.mutate({
      sender: senderId.toString(),
      recipient: recipientId.toString(),
      message,
    }).pipe(tap((result) => console.log(result))).subscribe();
  }

  public subscribeReceivedMessages(values: string[]): Observable<ReceivedMessagesByUserIdSubscription | undefined> {
    return this.receivedMessagesByUserIdSubscription.subscribe({ sender: values, recipient: values })
      .pipe(
        tap((result) => console.log(result)),
        map((result) => result.data)
      );
  }
}
