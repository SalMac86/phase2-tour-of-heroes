import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Captain Insano' },
      { id: 12, name: 'Nancy Botwin' },
      { id: 13, name: 'Tuco' },
      { id: 14, name: 'Saul Goodman' },
      { id: 15, name: 'Jon Snow' },
      { id: 16, name: 'The Doctor' },
      { id: 17, name: 'Wonder Woman' },
      { id: 18, name: 'Pam' },
      { id: 19, name: 'Jim' },
      { id: 20, name: 'Dwight' }
    ];
    return {heroes};
  }
}