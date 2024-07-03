interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly FullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

const director1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  contrcat: true,
};

console.log(teacher1);
