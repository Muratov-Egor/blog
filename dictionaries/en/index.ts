import about from './about.json';
import blog from './blog.json';
import footer from './footer.json';
import header from './header.json';
import home from './home.json';
import map from './map.json';
import marineLife from './marine-life-page.json';
import metadata from './metadata.json';
import search from './search.json';
import articleNotFound from './articleNotFound.json';

const en = {
  about,
  blog,
  footer,
  header,
  home,
  map,
  marineLife,
  metadata,
  search,
  articleNotFound,
} as const;

export default en; 