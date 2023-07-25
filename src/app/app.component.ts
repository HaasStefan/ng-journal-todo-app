import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  InputComponent,
  TitleComponent,
} from 'ng-journal-todo-design-system';

interface Todo {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent, TitleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly todosSignal = signal<Todo[]>([
    { title: 'Nx', description: 'Migrate Polyrepo to an Nx Workspace.' },
    { title: 'Coffee', description: 'Make a coffee.' },
    { title: 'Angular', description: 'Learn more advanced Angular.' },
    {
      title: 'Subscribe',
      description: 'Subscribe to the ng-journal Newsletter.',
    },
  ]);

  title!: string | null;
  description!: string | null;

  addTodo() {
    const title = this.title;
    const description = this.description;
    if (!title || !description) {
      return;
    }

    this.todosSignal.update((todos) => [
      ...todos,
      { title, description },
    ]);

    this.title = null;
    this.description = null;
  }
}
