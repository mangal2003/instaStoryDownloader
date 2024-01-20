// // const url =
// //   "https://instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com/?url=https://www.instagram.com/p/C0bXUHTo5HP/?utm_source=ig_web_copy_link";
// // const options = {
// //   method: "GET",
// //   headers: {
// //     "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
// //     "X-RapidAPI-Host":
// //       "instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com",
// //   },
// // };

// // try {
// //   const response = await fetch(url, options);
// //   const result = await response.text();
// //   console.log(result);
// // } catch (error) {
// //   console.error(error);
// // }

// let storyByLink = fetch(
//   `https://instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com/?url=https://www.instagram.com/stories/__sheebu_x2/3283014906056214152/`,
//   {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
//       "X-RapidAPI-Host":
//         "instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com",
//     },
//   }
// );

// storyByLink
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error: \n", err);
//   });

// //   ****************************************************************************************************

// // const url =
// //   "https://instagram-story-downloader-media-downloader.p.rapidapi.com/story/index?url=userNameORurl";
// // const options = {
// //   method: "GET",
// //   headers: {
// //     "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
// //     "X-RapidAPI-Host":
// //       "instagram-story-downloader-media-downloader.p.rapidapi.com",
// //   },
// // };

// // try {
// //   const response = await fetch(url, options);
// //   const result = await response.text();
// //   console.log(result);
// // } catch (error) {
// //   console.error(error);
// // }

var getStories = fetch(
  `https://instagram-story-downloader-media-downloader.p.rapidapi.com/story/index?url=${userNameORurl}`,
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
    return response.json(); //returning a promise
  })
  .then((data) => {
    var storyArray = data.stories;
    storyArray.forEach((story) => {
      console.log(story.media + "\n");
    });
  })
  .catch((err) => {
    console.log(err);
  });
