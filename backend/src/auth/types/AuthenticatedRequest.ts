import { User } from "src/users/user.entity";
export interface AuthenticatedRequest extends Request {
    user: User;
}