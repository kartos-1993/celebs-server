export interface RegisterDto {
  email: string;
  emailVerified: boolean;
  password: string;
  confirmPassword: string;
  userAgent?: string;
}
