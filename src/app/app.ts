import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  task = "";
  taskList: { id: number, name: string, isDone: boolean }[] = []; 

  addTask() {
    if (this.task.trim()) { // Prevent adding empty tasks
      this.taskList.push({id: this.taskList.length + 1, name: this.task,isDone: false });
      this.task = ""; 
    }
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter(task => task.id !== id);
  }

  doneTask(id: number) {
    const task = this.taskList.find(task => task.id === id);
  if (task) {
    task.isDone = !task.isDone;
  }
  }
}