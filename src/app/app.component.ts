import { Component } from '@angular/core';
import { Todo } from './ToDo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
todos : Todo[] = [];
newToDo : string;


saveToDo(){
  if(this.newToDo){
    let todo = new Todo();
    todo.name=this.newToDo;
    todo.isCompleted = true;
    this.todos.push(todo);
    this.newToDo = '';
  }else{
    alert('Please enter a todo');
  }
}
done(id:number){
  this.todos[id].isCompleted = !this.todos[id].isCompleted;
}
remove(id:number){
  this.todos = this.todos.filter((v,i)=> i !== id)
}
}


