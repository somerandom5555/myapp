import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
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
      type: 'richText',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        step: 0.01,
      },
    },
    {
      name: 'currency',
      type: 'select',
      options: [
        {
          label: 'USD',
          value: 'usd',
        },
        {
          label: 'BTC',
          value: 'btc',
        },
        {
          label: 'ETH',
          value: 'eth',
        },
      ],
      defaultValue: 'usd',
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
          label: 'Trading Course',
          value: 'trading-course',
        },
        {
          label: 'Analysis Report',
          value: 'analysis-report',
        },
        {
          label: 'Community Access',
          value: 'community-access',
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'relationship',
          relationTo: 'media',
        },
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'metadata',
      type: 'group',
      fields: [
        {
          name: 'tags',
          type: 'array',
          fields: [
            {
              name: 'tag',
              type: 'text',
            },
          ],
        },
        {
          name: 'duration',
          type: 'text',
          admin: {
            description: 'e.g., "30 days", "lifetime", "1 month"',
          },
        },
      ],
    },
  ],
}