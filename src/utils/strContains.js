export const strContains = (searchString, title) => { 
  const regex = new RegExp(searchString, "i");

  return regex.test(title);
};