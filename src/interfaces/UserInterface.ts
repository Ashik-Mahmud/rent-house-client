export interface UserInterface {
  _id: string;
  name: string;
  email: string;
  address?: string;
  phone?: string;
  role: string;
  isVerified: boolean;
  facebookLink?: string;
  twitterLink?: string;
  instagramLink?: string;
  blogAllowed: boolean;
  avatar: string;
  status: string;
  profileImage?: string;
  isBlogRequestSent?: boolean;
  isHouseHolderReqSent?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface authUserInterface {
  user: UserInterface | undefined;
  token: string | undefined;
  isAuthenticated?: boolean;
}

export interface LoginAuthState {
  success: boolean;
  token: string | undefined;
  user: UserInterface | undefined;
}
