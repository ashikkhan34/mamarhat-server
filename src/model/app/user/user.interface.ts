export interface IUser {
  name: String;
  email: String;
  password: string;
  photoURL:String;
  role: "user" | "admin";
  createdAt: Date;
}
