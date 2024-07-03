interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly FullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}
