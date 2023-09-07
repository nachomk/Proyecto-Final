const categoryContainerDiv = document.getElementById('category-container');

fetch('/api/categories')
    .then(response => response.json())
    .then(categories => {
        console.log(categories);
        categoryContainerDiv.innerHTML = "";
        categories.forEach(category => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const h3 = document.createElement('h3');
            const button = document.createElement('button');

            div.classList.add('card');
            img.setAttribute('src', category.image_url);
            img.setAttribute('alt', category.titulo);
            h3.innerText = category.titulo;
            button.innerText = 'Ver más';
            button.addEventListener('click', () => {});

            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(button);
            categoryContainerDiv.appendChild(div);
        });
    })