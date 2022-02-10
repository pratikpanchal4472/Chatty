export interface UserBase { readonly name: string; readonly id: any; }

export interface User extends UserBase {
  readonly image: string | null;
}

export interface Message {
  readonly created_at: any;
  readonly message: string;
  readonly recipient_user: User;
  readonly sender_user: User;
}
