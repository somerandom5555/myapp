// Export all Payload CMS collection configurations
export { default as Users } from './Users';
export { default as Products } from './Products';
export { default as Orders } from './Orders';
export { default as Media } from './Media';
export { default as Posts } from './Posts';

// Export as array for easier importing in payload.config.ts
import Users from './Users';
import Products from './Products';
import Orders from './Orders';
import Media from './Media';
import Posts from './Posts';

export const collections = [
  Users,
  Products,
  Orders,
  Media,
  Posts,
];