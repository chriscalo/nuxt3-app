export default defineEventHandler(function (event) {
  const query = getQuery(event);
  const { name = "World" } = query;
  
  return `Hello, ${name}!`;
});
