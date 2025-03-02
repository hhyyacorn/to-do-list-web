document.getElementById('addButton').addEventListener('click', function() {
    let todoInput = document.getElementById('todoInput').value;
    let dueTimeInput = document.getElementById('dueTimeInput').value;
    let i=0;
    
    if(todoInput && dueTimeInput) {
        let todoList = document.getElementById('todoList');
        
        let li = document.createElement('li');
        li.classList.add('todo-item');
        
        let dueDate = new Date(dueTimeInput); 
        
        function updateCountdown() {
            let now = new Date();
            let timeDifference = dueDate - now;
            
            if (timeDifference <= 0) {
                li.innerHTML = `<strong>Item:</strong> ${todoInput} <br><strong>Due:</strong> Time's up!`; 
                clearInterval(countdownInterval); 
                
                setTimeout(function() {
                    li.remove(); 
                    if(i==0){
                        document.body.style.backgroundImage = 'url("v2.png")';
                    }
                    if(i==1){
                        document.body.style.backgroundImage = 'url("v3.png")';
                    }
                    if(i==2){
                        document.body.style.backgroundImage = 'url("v4.png")';
                    }
                }, 2000); 
                i++;
            } else {
                let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                
                li.innerHTML = `
                    <strong>Item:</strong> ${todoInput} <br>
                    <strong>Due in:</strong> ${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }
        
        updateCountdown();
        
        let countdownInterval = setInterval(updateCountdown, 1000);
        
        todoList.appendChild(li);
        
        document.getElementById('todoInput').value = '';
        document.getElementById('dueTimeInput').value = '';
    } else {
        alert('Please fill in both fields');
    }
});



