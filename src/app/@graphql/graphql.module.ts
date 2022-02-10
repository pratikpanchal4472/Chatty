import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { WebSocketLink } from '@apollo/client/link/ws';
import { Apollo } from 'apollo-angular';
import { environment } from 'src/environments/environment';

const GRAPHQL_WS_ENDPOINT = environment.graphqlWSEndpoint;

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [],
  declarations: [],
})
export class GraphQLModule {
  constructor(public apollo: Apollo) {
    this.initApolloWithHeaders({ 'x-hasura-admin-secret': environment.HASURA_ADMIN_SECRET });
  }

  private initApolloWithHeaders(headers: any) {
    const wsLink = new WebSocketLink({
      uri: GRAPHQL_WS_ENDPOINT,
      lazy: true,
      options: {
        reconnect: true,
        lazy: true,
        connectionParams: {
          headers: headers,
        },
      },
    });

    this.apollo.create(
      {
        link: wsLink,
        cache: new InMemoryCache(),
        name: 'GrahpQL Client',
        version: '0.0.0',
      },
      'default'
    );
  }
}
