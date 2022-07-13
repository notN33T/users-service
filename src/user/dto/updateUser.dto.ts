import { Role } from '../enums/role.enum';

export class UpdateUserDto {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  role?: Role;
  points?: number;
}
