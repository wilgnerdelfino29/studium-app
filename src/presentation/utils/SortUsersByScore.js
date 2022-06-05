export const sortUsersByScore = (users) => {
  return users.sort((a, b) => (a.total_posts < b.total_posts ? 1 : -1));
};
