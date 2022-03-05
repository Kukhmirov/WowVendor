function tag () {
    const tagArr = [
        {
            name: 'Strategy'
        },
        {
            name: 'RPG'
        },
        {
            name: 'Action'
        },
        {
            name: 'Shooter'
        },
        {
            name: 'Clear all'
        }
    ];

    const tag = document.querySelector('.box');

        tagArr.forEach(item => {     
            const element = document.createElement('div');
            element.classList.add('tag-box__item');
            element.innerHTML = `
                ${item.name} <span>x</span>
            `;
            tag.appendChild(element);
        });
};

export default tag;