import { Injectable } from '@angular/core';
import { Person } from '../models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private selectedEmployeesSource = new BehaviorSubject<Person[]>([]);
  selectedEmployees$ = this.selectedEmployeesSource.asObservable();

  setSelectedEmployees(employees: Person[]) {
    // Filtra solo los empleados seleccionados antes de almacenarlos
    const selectedEmployees = employees.filter((employee) => employee.selected);
    this.selectedEmployeesSource.next(selectedEmployees);
  }

  getSelectedEmployees(): Person[] {
    return this.selectedEmployeesSource.value;
  }
}
