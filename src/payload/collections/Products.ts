import type { CollectionConfig } from 'payload/types';

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        {
          label: 'Premium Signals',
          value: 'premium-signals',
        },
        {
          label: 'Trading Tools',
          value: 'trading-tools',
        },
        {
          label: 'Educational Content',
          value: 'educational-content',
        },
        {
          label: 'Market Analysis',
          value: 'market-analysis',
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'featuredImage',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'gallery',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
    },
  ],
};

export default Products;