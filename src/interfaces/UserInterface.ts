export interface UserInterface {
  id: number;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  address: string;
  phone: string;
  role: string;
  facebookLink: string;
  twitterLink: string;
  instagramLink: string;
  avatar: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}
