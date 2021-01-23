const API_KEY = 'JoCd7NoAcsFGjcOTS01ldNI0U4hOpmNs'

function fetchNews() {

    // main div - containing header and navbar
    var nav_div = document.createElement("div")
    nav_div.setAttribute("class", "container")

    // div containing header
    var header_div = document.createElement("div");
    header_div.setAttribute("class", "container");

    // header element
    var header = document.createElement("h1");
    header.innerText = "THE PERTINENT TIMES";
    header.setAttribute("style", "font-family:times-new-roman;text-align:center")
    header_div.appendChild(header)

    // 
    var nav = document.createElement("nav");
    nav.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light");


    var nav_button = document.createElement("button")
    nav_button.setAttribute("class", "navbar-toggler")
    nav_button.setAttribute("type", "button")
    nav_button.setAttribute("data-toggle", "collapse")
    nav_button.setAttribute("data-target", "#navbar")
    nav_button.setAttribute("aria-controls", "navbar")
    nav.appendChild(nav_button)

    var nav_bar_div = document.createElement("div")
    nav_bar_div.setAttribute("class", "collapse navbar-collapse justify-content-center")

    var nav_ul = document.createElement("ul")
    nav_ul.setAttribute("class", "navbar-nav")

    var li1 = document.createElement("li")
    li1.setAttribute("class", "nav-item");
    var a1 = document.createElement("a")
    a1.setAttribute("class", "nav-link btn")
    a1.setAttribute("style", "color:black")
    a1.innerText = "HOME"
    a1.setAttribute("id", "home")
    a1.addEventListener("click", function() {
        getResult("home")
    })

    li1.appendChild(a1)
    nav_ul.appendChild(li1)


    var li2 = document.createElement("li")
    li2.setAttribute("class", "nav-item");
    var a2 = document.createElement("a")
    a2.setAttribute("class", "nav-link btn")
    a2.setAttribute("style", "color:black")
    a2.innerText = "WORLD"
    a2.setAttribute("id", "world")
    a2.addEventListener("click", function() {
        getResult("world")

    })

    li2.appendChild(a2)
    nav_ul.appendChild(li2)


    var li3 = document.createElement("li")
    li3.setAttribute("class", "nav-item");
    var a3 = document.createElement("a")
    a3.setAttribute("class", "nav-link btn")
    a3.setAttribute("style", "color:black")
    a3.innerText = "POLITICS"
    a3.setAttribute("id", "politics")
    a3.addEventListener("click", function() {
        getResult("politics")
    })

    li3.appendChild(a3)
    nav_ul.appendChild(li3)


    var li4 = document.createElement("li")
    li4.setAttribute("class", "nav-item");
    var a4 = document.createElement("a")
    a4.setAttribute("class", "nav-link btn")
    a4.setAttribute("style", "color:black")
    a4.innerText = "MAGAZINE"
    a4.setAttribute("id", "magazine")
    a4.addEventListener("click", function() {
        getResult("magazine")
    })

    li4.appendChild(a4)
    nav_ul.appendChild(li4)


    var li5 = document.createElement("li")
    li5.setAttribute("class", "nav-item");
    var a5 = document.createElement("a")
    a5.setAttribute("class", "nav-link btn")
    a5.setAttribute("style", "color:black")
    a5.innerText = "SCIENCE"
    a5.setAttribute("id", "science")
    a5.addEventListener("click", function() {
        getResult("science")
    })

    li5.appendChild(a5)
    nav_ul.appendChild(li5)


    var li5 = document.createElement("li")
    li5.setAttribute("class", "nav-item");
    var a5 = document.createElement("a")
    a5.setAttribute("class", "nav-link btn")
    a5.setAttribute("style", "color:black")
    a5.innerText = "TECHNOLOGY"
    a5.setAttribute("id", "technology")
    a5.addEventListener("click", function() {
        getResult("technology")
    })

    li5.appendChild(a5)
    nav_ul.appendChild(li5)

    var li6 = document.createElement("li")
    li6.setAttribute("class", "nav-item");
    var a6 = document.createElement("a")
    a6.setAttribute("class", "nav-link btn")
    a6.setAttribute("style", "color:black")
    a6.innerText = "HEALTH"
    a6.setAttribute("id", "health")
    a6.addEventListener("click", function() {
        getResult("health")
    })

    li6.appendChild(a6)
    nav_ul.appendChild(li6)

    var li7 = document.createElement("li")
    li7.setAttribute("class", "nav-item");
    var a7 = document.createElement("a")
    a7.setAttribute("class", "nav-link btn")
    a7.setAttribute("style", "color:black")
    a7.innerText = "SPORTS"
    a7.setAttribute("id", "sports")
    a7.addEventListener("click", function() {
        getResult("sports")
    })

    li7.appendChild(a7)
    nav_ul.appendChild(li7)



    nav_bar_div.appendChild(nav_ul)

    nav.appendChild(nav_bar_div)
    nav_div.appendChild(header_div)
    nav_div.appendChild(nav)

    document.body.appendChild(nav_div)

    var news = document.createElement("div")
    news.setAttribute("class", "container")


    async function getData(url) {
        let data = await fetch(url)
        let arr = await data.json()
        return arr
    }


    async function getResult(news_type) {
        let arr = await getData(`https://api.nytimes.com/svc/topstories/v2/${news_type}.json?api-key=${API_KEY}`)
        data = arr["results"]
        console.log(data)


        // appending data to body
        var news_info = document.createElement("div");

        for (i of data) {
            news.innerHTML = ""

            var container = document.createElement("div")
            container.setAttribute("class", "container")
            container.setAttribute("style", "margin-top:30px;width:100%")


            var news_section = document.createElement("li")
            var news_title = document.createElement("li")
            var news_date = document.createElement("li")
            var news_content = document.createElement("li")

            news_section.innerHTML = i["section"];
            news_title.innerHTML = i["title"];
            news_date.innerHTML = i["created_date"];
            news_content.innerHTML = i["abstract"];

            container.appendChild(news_section);
            container.appendChild(news_title);
            container.appendChild(news_date);
            container.appendChild(news_content)

            // news_info.style.margin = '10%';

            news_info.appendChild(container)

            news.appendChild(news_info);
            document.body.appendChild(news)



        }





    }

    document.addEventListener("DOMContentLoaded", function(event) {
        document.getElementById("home").click()
    })




    // getResult('science')


    // Insert text

}

fetchNews();