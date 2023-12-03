export interface ContactData {
  name: string,
  phone: string,
  email: string,
}

export interface JobData {
  name: string,
  location: string,
  title: string,
  start: Date,
  end?: Date,
  duties: Array<string>,
  contributions: Array<string>,
}

export interface EducationData {
  name: string,
  degree: string,
  location: string,
}

export interface ResumeData {
  contact: ContactData,
  jobs: Array<JobData>,
  skills: Array<string>,
  education: EducationData,
}
