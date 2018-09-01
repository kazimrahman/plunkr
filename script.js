// Code goes here

console.log('hi');

var todoList = {
  todos: [],
  displayTodo: function(){
    if(this.todos.length > 0){
      console.log('Todos: ');
      for(var i = 0; i < this.todos.length; i++){
        if(this.todos[i].completed === true){
          console.log('(x)', this.todos[i].todoText);
        }else{
          console.log('( )', this.todos[i].todoText);
        }
      }
    }else{
        console.log('Todos is empty!')
    }
  },
  
  addTodo: function(text){
    this.todos.push({
      todoText: text,
      completed: false
    });
    this.displayTodo();
  },
  
  updateTodo: function(index, newItem){
    this.todos[index].todoText = newItem;
    this.displayTodo();
  },
  
  deleteTodo: function(index){
    this.todos.splice(index, 1);
    this.displayTodo();
  },
  
  toggleCompleted: function(index){
    var b = this.todos[index].completed;
    this.todos[index].completed = !b;
    this.displayTodo();
  },
  
  toggleAll: function(){
    var flag = 1;
    for( var i = 0; i < this.todos.length; i++){
      if(this.todos[i].completed === false){
        flag = -1;
        break;
      }
    }
    if(flag === 1){
      for(var j = 0; j < this.todos.length; j++){
        this.todos[j].completed = false;
      }
    }else{
      for(var k = 0; k < this.todos.length; k++){
        this.todos[k].completed = true;
      }
    }
    this.displayTodo();
  }
};

  var displayTodoButton = document.getElementById('displayTodoButton')
  console.log(displayTodoButton)
  
  displayTodoButton.addEventListener('click', function(){
    todoList.displayTodo();
  });
  
  var toggleButton = document.getElementById('toggleButton')
  console.log(toggleButton)
  
  toggleButton.addEventListener('click', function(){
    todoList.toggleAll();
  })
  
  
  var handlers = {
    displayTodo: function(){
      todoList.displayTodo()
    },
    
    toggleAll: function(){
      todoList.toggleAll()
    },
    
    addTodo: function(){
      var inputText = document.getElementById('addTodoTextInput')
      todoList.addTodo(inputText.value)
      inputText.value = ''
    },
    
    updateTodo: function(){
      var inputField = document.getElementById('updateIndex')
      var inputText = document.getElementById('updateText')
      todoList.updateTodo(inputField.value, inputText.value)
      inputField.value = ''
      inputText.value = ''
      
    },
    
    deleteTodo: function(){
      var numOfTodo = document.getElementById('deleteTodoIndex')
      todoList.deleteTodo(numOfTodo)
      numOfTodo.value = ''
    },
    
    toggleTodo: function(){
      ///debugger;
      console.log('in here')
      var ind = document.getElementById('toggleSpecificIndex')
      todoList.toggleCompleted(ind.value)
      ind.value = ''
    }
  }
  