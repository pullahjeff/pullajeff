
fetch('https://jsonplaceholder.typicode.com/todos')
.then((resp) => resp.json())
.then(function(todos) {
       return todos.map((todo) => {
        // <li class="">A third item</li>
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = todo.title;
        console.log(todo);
           
            let ul =  document.querySelector('ul');
            ul.appendChild(li);
            for (let i = 0; i < 5; i++) {
         let text = document.createElement('li')
             text += "The name is " + i + "<br>";
       }
       });
       })

.catch(function(error){
       console.log(error);});