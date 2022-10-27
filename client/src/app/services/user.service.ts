import { EmployeeModel } from './../models/employee-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }
  postEmployee(data: EmployeeModel) {
    return this.http.post<any>("http://localhost:3000/users", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getEmployee() {
    return this.http.get<any>("http://localhost:3000/users")
      .pipe(map((res: any) => {
        return res;

      }))
  }
  updateEmployee(data: EmployeeModel, id: string) {
    return this.http.put<any>("http://localhost:3000/users/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  deleteEmployee(id: number) {
    return this.http.delete<any>("http://localhost:3000/users/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
