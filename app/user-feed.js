// const casual = require("casual");
const fetch = require("node-fetch");

const userFeed = [];

const get = async () => {
//   if (userFeed.length === 0) {
//     const response = await fetch("https://dog.ceo/api/breeds/image/random/5");
//     const body = await response.json();
//     for (const dogUrl of body.message) {
//       userFeed.push({
//         name: casual.full_name,
//         nameHandle: `@${casual.username}`,
//         message: `${casual.sentence}. ${casual.sentence}`,
//         imageSource: dogUrl,
//       });
//     }
//   } else {
//     return userFeed;
//   }

  return userFeed;
};

const add = async (user, review) => {
  userFeed.unshift({
    // name: user.name,
    // nameHandle: user.email,
    tea_type: review.tea_type,
    sugar_p: review.sugar_p,
    ice_p: review.ice_p,
    review: review.review,
    imageSource: review.img_source
  });
  console.log(userFeed);
};

module.exports = {
  get,
  add,
};
