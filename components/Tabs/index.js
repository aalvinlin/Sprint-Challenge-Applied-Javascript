// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics")
     .then(response => {

        let parent = document.querySelector(".topics");

        for (topic of response.data.topics)
             {
                let topicClass = topic;
                if (topic === "node.js")
                    { topicClass = "node"; }

                let tab = createAndAppend("div", parent, {class: "tab", textContent: topic, onclick: "showOnly('" + topicClass + "')"});
             }
        
        createAndAppend("div", parent, {class: "tab", textContent: "Show All", onclick: "showAll()"});
             
     })
     .catch(error => {
         console.log("error getting topics:", error);
     })


function showOnly(topicToShow)
{
    let allArticles = document.querySelectorAll(".card");

    for (article of allArticles)
    {
        // hide all articles first
        article.classList.add("hidden");

        // show only the desired articles
        if (article.classList.contains(topicToShow))
        {
            article.classList.toggle("hidden");
        }

    }
}

function showAll()
{
    let allArticles = document.querySelectorAll(".card");

    for (article of allArticles)
    {
        article.classList.remove("hidden");
    }
}