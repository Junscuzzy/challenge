export interface LoginProps {
  email: string
  password: string
}

export interface RegisterProps extends LoginProps {
  passwordConfirm: string
  name?: string
}

export interface User {
  id: string
  email: string
  profile?: {
    name?: string
    gender?: string
    location?: string
    picture?: string
  }
}
