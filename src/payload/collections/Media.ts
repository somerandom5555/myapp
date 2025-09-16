import type { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        {
          label: 'Product Images',
          value: 'product-images',
        },
        {
          label: 'Blog Images',
          value: 'blog-images',
        },
        {
          label: 'Trading Charts',
          value: 'trading-charts',
        },
        {
          label: 'User Avatars',
          value: 'user-avatars',
        },
        {
          label: 'Marketing Assets',
          value: 'marketing-assets',
        },
      ],
    },
  ],
};

export default Media;