let newsacc = document.getElementById("accordion");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8e21bdd43c5842a4b1385e5a3674d415",
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      let news = `  <div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        <b>Breaking News ${index + 1}:</b> ${element["title"]}
                    </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                data-parent="#accordion">
                <div class="card-body"> ${element["content"]}. <a href="${
        element["url"]
      }" target="_blank" >Read more here</a>  </div>
                    
                </div>
            </div>
            </div>
            `;
      newsHtml += news;
    });
    newsacc.innerHTML = newsHtml;
  } else {
    console.log("some error occured");
  }
};

xhr.send();
