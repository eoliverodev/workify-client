export interface ILoginPage {
  handleLoginForm?: () => void;
}

export interface IFormData {
  nickname?: string | null;
  email: string | null;
  password: string | null;
  confirmPassword?: string | null;
}