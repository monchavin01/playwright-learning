import { ICredential } from "../interfaces/user";

const credential: ICredential = {
  username: "monchavin",
  password: "123456",
};

const validUser = credential;

const invalidUser: ICredential = { username: "aaa", password: "234" };

export { validUser, invalidUser };
