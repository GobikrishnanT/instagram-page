async function fetchImages(link) {
  try {
    const response = await fetch(link);
    if (response.status === 200) {
      return response.json();
    }
  } catch (e) {
    console.log(e);
  }
}

async function fetchUserInfos(link) {
  try {
    const response = await fetch(link);
    if (response.status === 200) {
      return response.json();
    }
  } catch (e) {
    console.log(e);
  }
}

export { fetchImages, fetchUserInfos };
