import { UserMetadata } from "firebase/auth";

export interface IallPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IInitialState {
  list: IallPost[];
}

export interface IModalEditPost {
  modal: IModalContain;
  changeState: any;
  showHeader: boolean;
  post: IallPost | null;
}

export interface IModalContain {
  open: boolean;
  post: IallPost | null;
}

export interface PropTypesPost {
  readonly posts: IallPost[];
  readonly currentUser: IUser | null;
}

export interface IUser {
  accessToken: string;
  auth?: object;
  displayName?: boolean;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: UserMetadata;
  phoneNumber?: null;
  photoURL?: null;
  proactiveRefresh?: object;
  providerData?: object[];
  providerId: string;
  reloadListener?: null;
  reloadUserInfo?: object;
  stsTokenManager?: object;
  tenantId?: null;
  uid: string;
}
