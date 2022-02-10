import { Component } from '@angular/core';
import { Guid } from 'guid-typescript';
import { map, Observable, of } from 'rxjs';
import { GraphQLService } from './@graphql/graphql.service';
import { Message, User } from './@types/app.types';

const CHAT_USER_ID: string = '3e3e485a-c30a-454a-9dfe-aa63018b4548';
const CURRENT_USER_ID: string = '80eeb088-1493-49bd-82aa-349b5425cc8c';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public messages: Observable<ReadonlyArray<Message>> = of([]);
  public message: string = '';

  public selectedUserObs: Observable<User> = of(null);
  public users: Observable<ReadonlyArray<User>> = of([]);

  constructor(private graphQlService: GraphQLService) {
    this.selectedUserObs = this.graphQlService.getUserById(Guid.parse(CURRENT_USER_ID))
      .pipe(map(result => result?.user_by_pk));

    this.users = this.graphQlService.getAllUsers().pipe(map(result => result?.user));

    this.messages = this.graphQlService.subscribeReceivedMessages([CURRENT_USER_ID, CHAT_USER_ID])
      .pipe(map(result => result?.messages));
  }

  send() {
    this.graphQlService.sendMessage(Guid.parse(CURRENT_USER_ID), Guid.parse(CHAT_USER_ID), this.message);
    this.message = '';
  }
}
