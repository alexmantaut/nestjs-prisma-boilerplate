export class CreateUserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  enabled: boolean;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
