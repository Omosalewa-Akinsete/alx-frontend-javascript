interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  FullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}
