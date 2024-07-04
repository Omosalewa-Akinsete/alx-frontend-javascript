namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
    experienceTeachingReact?: number;
    experienceTeachingJava?: number;
  }

  export class Subject {
    private teacher: Teacher;

    public setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }

  export class Cpp extends Subject {
    public getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    public getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }

  export class React extends Subject {
    public getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    public getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }

  export class Java extends Subject {
    public getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    public getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
