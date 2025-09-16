# Payload CMS Backend Configuration

This directory contains the Payload CMS backend configuration for the TradersPool application.

## Overview

The Payload CMS backend provides a headless CMS with the following collections:

### Collections

#### Users
- **Purpose**: User management compatible with Auth0
- **Key Features**: 
  - Auth0 integration with `auth0Id` field
  - User roles (admin, user)
  - Profile information
  - Disabled local authentication (uses Auth0)

#### Products
- **Purpose**: Trading products, courses, and services management
- **Key Features**:
  - Name, description, and pricing
  - Multiple currencies (USD, BTC, ETH)
  - Categories (premium signals, trading courses, etc.)
  - Image galleries with media relationships
  - Featured products and activation status

#### Orders
- **Purpose**: Order and transaction management
- **Key Features**:
  - Order tracking with unique order numbers
  - Product quantities and pricing at purchase time
  - Multiple payment methods including crypto
  - Order status tracking (pending, processing, completed, etc.)
  - User relationships

#### Media
- **Purpose**: File and media management
- **Key Features**:
  - Image upload with multiple sizes (thumbnail, card, featured)
  - Video and document support
  - Categorization (blog images, product images, trading charts, etc.)
  - Public/private access control
  - SEO-friendly alt text and descriptions

#### Posts
- **Purpose**: Blog posts and trading analysis content
- **Key Features**:
  - Rich text content with Lexical editor
  - Categories matching existing blog structure (BTC Value Areas, BTC Daily Analysis, Whales & Institutions)
  - SEO optimization fields
  - Author relationships
  - Publication status and scheduling
  - Featured posts and tagging

## Configuration

The main configuration is in `payload.config.ts` and includes:

- **Database**: MongoDB with Mongoose adapter
- **Editor**: Lexical rich text editor
- **Admin UI**: Currently disabled (backend only)
- **Authentication**: Disabled local strategy (uses Auth0)
- **CORS/CSRF**: Configured for Next.js integration

## Environment Variables

Required environment variables:

```bash
# Database
DATABASE_URI=mongodb://localhost:27017/traderspool
# or
MONGODB_URI=mongodb://localhost:27017/traderspool

# Payload CMS
PAYLOAD_SECRET=your-secret-key

# App URLs (inherited from existing Auth0 setup)
NEXT_PUBLIC_APP_URL=http://localhost:3000
APP_BASE_URL=http://localhost:3000
```

## Integration

This backend configuration:

1. **Maintains Auth0 compatibility** - Users collection designed to work alongside Auth0 authentication
2. **No breaking changes** - Does not interfere with existing routes or functionality
3. **Backend only** - Admin UI is disabled, ready for future frontend integration
4. **Type-safe** - Generates TypeScript types for all collections

## Next Steps

- Add environment variables for database connection
- Optionally enable admin UI when needed: set `admin.disable: false` in config
- Create API routes to integrate with existing Next.js pages
- Set up database connection for production use