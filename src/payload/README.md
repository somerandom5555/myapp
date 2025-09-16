# Payload CMS Collections

This directory contains Payload CMS collection configurations for the trading platform. These collections provide the data structure for content management and e-commerce functionality.

## Collections Overview

### 1. Users (`Users.ts`)
- **Purpose**: User authentication and management
- **Features**: 
  - Auth-enabled collection
  - Role-based access (admin, editor, user)
  - Name field for user display
- **Usage**: Handles user registration, authentication, and role management

### 2. Products (`Products.ts`)
- **Purpose**: Product catalog management
- **Features**:
  - Product name, description, and pricing
  - Category selection (Premium Signals, Trading Tools, Educational Content, Market Analysis)
  - Active/inactive status
  - Featured image and gallery relationships to Media collection
- **Usage**: Manages trading tools, signals, and educational products

### 3. Orders (`Orders.ts`)
- **Purpose**: Order processing and management
- **Features**:
  - Unique order numbers
  - User relationship (who placed the order)
  - Product relationships with quantities and pricing
  - Order status tracking (pending, processing, completed, cancelled, refunded)
  - Payment method selection
  - Total amount calculation
- **Usage**: Handles e-commerce transactions for premium services

### 4. Media (`Media.ts`)
- **Purpose**: File and image management
- **Features**:
  - Image upload with automatic sizing (thumbnail, card, tablet)
  - Alt text and captions for accessibility
  - Category organization (Product Images, Blog Images, Trading Charts, User Avatars, Marketing Assets)
  - MIME type restrictions for security
- **Usage**: Manages all visual assets used across the platform

### 5. Posts (`Posts.ts`)
- **Purpose**: Blog and content management
- **Features**:
  - Rich text content editor
  - SEO optimization fields
  - Category system aligned with existing blog structure
  - Author relationships to Users
  - Publication status and scheduling
  - Tag system for content organization
- **Usage**: Powers the blog and educational content sections

## Installation

When Payload CMS is installed, update the import statements to use the official Payload types:

```typescript
// Change from:
import type { CollectionConfig } from '../types';

// To:
import type { CollectionConfig } from 'payload/types';
```

## Usage in Payload Config

```typescript
import { collections } from './src/payload/collections';

export default buildConfig({
  collections,
  // ... other config
});
```

## Field Relationships

- **Orders** → **Users**: Each order belongs to a user
- **Orders** → **Products**: Orders contain multiple products
- **Posts** → **Users**: Each post has an author
- **Posts** → **Media**: Posts can have featured images
- **Products** → **Media**: Products have featured images and galleries

## Categories

The collections include predefined categories that align with the existing application structure:

- **Product Categories**: Premium Signals, Trading Tools, Educational Content, Market Analysis
- **Post Categories**: BTC Value Areas, BTC Daily Analysis, Whales & Institutions, Technical Analysis, Market Updates, Trading Strategies
- **Media Categories**: Product Images, Blog Images, Trading Charts, User Avatars, Marketing Assets

These categories match the existing data structures found in `src/data/blogPosts.ts` and `src/data/premiumChannels.ts`.