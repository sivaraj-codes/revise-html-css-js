let endPointsData = {
  "/user": {
    responseType: "reject",
    responseTime: 1000,
    data: [],
    error: { message: "Server Issue" },
  },
  "/posts": {
    responseType: "reject",
    responseTime: 700,
    data: [],
    error: { message: "Invalid User" },
  },
  "/likes-count": {
    responseType: "reject",
    responseTime: 1700,
    data: 25,
    error: { message: "Invalid User" },
  },
};

const mockFetch = (url) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (endPointsData?.[url]?.responseType === "reject") {
        reject(endPointsData?.[url]?.error);
      } else {
        resolve({ data: endPointsData?.[url]?.data });
      }
    }, [endPointsData?.[url]?.responseTime || 1000]);
  });
  return promise;
};

checkPromiseAllThen = () => {
  let userPromise = mockFetch("/user");
  let postsPromise = mockFetch("/posts");
  // let likesCountPromise = mockFetch("/likes-count");

  Promise.all([postsPromise, userPromise])
    .then((results) => {
      console.log("p.all results", results);
    })
    .catch((err) => {
      console.log("Any request fails, entire operation fails", err);
    })
    .finally((prop) => {
      console.log("ATTEMPTED Finally", prop);
    });
};

// checkPromiseAllThen();

checkPromiseAllAsync = async () => {
  let userPromise = mockFetch("/user");
  let postsPromise = mockFetch("/posts");
  let likesCountPromise = mockFetch("/likes-count");
  try {
    let responses = await Promise.all([
      userPromise,
      postsPromise,
      likesCountPromise,
    ]);
    console.log("p.all results", responses);
  } catch (error) {
    console.log("any of them failed->", error);
  }
};
checkPromiseAllAsync();

checkPromiseAllSettledAsync = async () => {
  let userPromise = mockFetch("/user");
  let postsPromise = mockFetch("/posts");
  let likesCountPromise = mockFetch("/likes-count");
  try {
    let responses = await Promise.allSettled([
      userPromise,
      postsPromise,
      likesCountPromise,
    ]);
    console.log("p.all Settled results", responses);
  } catch (error) {
    console.log("any of them failed->", error);
  }
};

checkPromiseAllSettledAsync();

checkPromiseAnyAsync = async () => {
  let userPromise = mockFetch("/user");
  let postsPromise = mockFetch("/posts");
  let likesCountPromise = mockFetch("/likes-count");
  try {
    let responses = await Promise.any([
      userPromise,
      postsPromise,
      likesCountPromise,
    ]);
    console.log("p.any results", responses);
  } catch (error) {
    console.log("any of them failed->", error);
  }
};

checkPromiseAnyAsync();
