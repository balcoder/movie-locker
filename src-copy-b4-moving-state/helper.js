export default function getPage(pageNum, arr) {
  let pageResult = arr.find(val => val.page === parseInt(pageNum, 10));
  console.log(pageResult);
  return pageResult.results;
}