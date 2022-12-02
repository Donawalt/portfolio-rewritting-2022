export const allIndexPosts =
  '*[_type == "project"]{category, name, slug, cover}';

export const allPostsCategory = (category, type, isSlug) => {
  if (isSlug === true) {
    return `*[_type == "${type}" && category == "${category}"]`;
  }

  return `*[_type == "${type}" && category == "${category}"]{name, category, slug, cover}`;
};

export const post = (slug, category, type) => {
  return `*[_type == "${type}" && slug.current == ${slug} && category == "${category}"][0]`;
};

export const nextPost = (slug, category, type, createdAt) => {
  return `*[_type == '${type}' && ${createdAt}< _createdAt && category == '${category}'] | order(_createdAt asc)[0]`;
};
