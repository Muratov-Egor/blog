import about from './about.json';
import blog from './blog.json';
import footer from './footer.json';
import header from './header.json';
import home from './index.json';
import map from './map.json';
import marineLife from './marine-life-page.json';
import metadata from './metadata.json';
import search from './search.json';
import notFound from './404.json';

const ru = {
  about,
  blog,
  footer,
  header,
  home,
  map,
  marineLife,
  metadata,
  search,
  notFound,
} as const;

export default ru; 