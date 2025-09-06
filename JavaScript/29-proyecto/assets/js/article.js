let articles = document.querySelector(".layout__articles");

let posts = [
  {
    title: "Articulo 1",
    date: "30/12/2028",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorem ducimus amet culpa ex perspiciatis rerum odit! Cupiditate eum asperiores deleniti corporis quis voluptate, illo iste. Eius ducimus quae incidunt.",
  },
  {
    title: "Articulo 2",
    date: "30/12/2029",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorem ducimus amet culpa ex perspiciatis rerum odit! Cupiditate eum asperiores deleniti corporis quis voluptate, illo iste. Eius ducimus quae incidunt.",
  },
  {
    title: "Articulo 3",
    date: "30/12/2030",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorem ducimus amet culpa ex perspiciatis rerum odit! Cupiditate eum asperiores deleniti corporis quis voluptate, illo iste. Eius ducimus quae incidunt.",
  },
  {
    title: "Articulo 4",
    date: "30/12/2031",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorem ducimus amet culpa ex perspiciatis rerum odit! Cupiditate eum asperiores deleniti corporis quis voluptate, illo iste. Eius ducimus quae incidunt.",
  },
];

posts.forEach((article) => {
  articles.innerHTML += 
    `
        <article class="articles__article">
            <h3 class="article__title">${article.title}</h3>
            <span class="article__date">${article.date}</span>
            <p class="article__body">
                ${article.body}
            </p>
            <a href="#" class="article__btn">Leer Más</a>
        </article>    
    `;
});
