var urlUsername = document.getElementById("urlUsername");
var animation = document.getElementById("animationLoading");
var storyWrapper = document.getElementById("stories");
var wait = document.getElementById("wait");
function getStoryLinks() {
  animation.style.display = "block";
  wait.style.display = "block";

  var getStories = fetch(
    `https://instagram-story-downloader-media-downloader.p.rapidapi.com/story/index?url=${urlUsername.value}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
        "X-RapidAPI-Host":
          "instagram-story-downloader-media-downloader.p.rapidapi.com",
      },
    }
  );

  getStories
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var storyArray = data.stories;
      console.log(urlUsername.value);
      storyArray.forEach((story) => {
        console.log(story.media + "\n");
        animation.style.display = "none";
        wait.style.display = "none";
        storyWrapper.style.display = "flex";
        if (story.Type === "Story-Image") {
          console.log("Story type is not Video");
        } else {
          storyWrapper.insertAdjacentHTML(
            "beforeend",
            `
        <div class="story">
                    <video src="${story.media}"></video>
                    <button>
                        <a href="${story.media}" target="_parent">
                            <i class="ri-download-2-fill"></i>
                        </a>
                    </button>
                </div>
        `
          );
        }
      });
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
}
