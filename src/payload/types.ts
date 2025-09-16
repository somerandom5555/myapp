// Basic type definitions for Payload CMS collections
// This file provides type safety when Payload CMS is not yet installed
//
// NOTE: When Payload CMS is properly installed, these types should be replaced
// with imports from 'payload/types'. Update all collection files to import from:
// import type { CollectionConfig } from 'payload/types';
//
// This temporary solution allows the collection configurations to be written
// and validated without requiring the full Payload CMS installation.

export interface CollectionConfig {
  slug: string;
  auth?: boolean;
  admin?: {
    useAsTitle?: string;
  };
  upload?: {
    staticURL?: string;
    staticDir?: string;
    imageSizes?: Array<{
      name: string;
      width?: number;
      height?: number;
      position?: string;
    }>;
    adminThumbnail?: string;
    mimeTypes?: string[];
  };
  fields: Array<any>;
  timestamps?: boolean;
}

// Re-export types for compatibility
export type { CollectionConfig as default };