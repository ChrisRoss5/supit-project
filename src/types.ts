export interface User {
  username: string;
  token: string;
}

export interface Course {
  id: number;
  kolegij: string;
  ects: number;
  sati: number;
  predavanja: number;
  vjezbe: number;
  tip: string;
  semestar: number;
}

export interface APICall<Response> {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string[];
  data?: Response;
}
