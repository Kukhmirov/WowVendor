function question(){

    const button = document.querySelectorAll('.questions__open'),
          description = document.querySelectorAll('.descr');

    button.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            switch(index){
                case 0: 
                description[index].classList.toggle('close');
                button[index].classList.toggle('questions__open--close');
                break;
                case 1: 
                description[index].classList.toggle('close');
                button[index].classList.toggle('questions__open--close');
                break;
                case 2: 
                description[index].classList.toggle('close');
                button[index].classList.toggle('questions__open--close');
                break;
                case 3: 
                description[index].classList.toggle('close');
                button[index].classList.toggle('questions__open--close');
                break;
            }
            
            console.log();
        });
    });
};

export default question;