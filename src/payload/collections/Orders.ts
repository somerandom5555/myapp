import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderNumber',
  },
  fields: [
    {
      name: 'orderNumber',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Unique order identifier',
      },
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'products',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
        },
        {
          name: 'quantity',
          type: 'number',
          required: true,
          min: 1,
          defaultValue: 1,
        },
        {
          name: 'price',
          type: 'number',
          required: true,
          min: 0,
          admin: {
            step: 0.01,
            description: 'Price at time of purchase',
          },
        },
      ],
    },
    {
      name: 'totalAmount',
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
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Processing',
          value: 'processing',
        },
        {
          label: 'Completed',
          value: 'completed',
        },
        {
          label: 'Cancelled',
          value: 'cancelled',
        },
        {
          label: 'Refunded',
          value: 'refunded',
        },
      ],
      defaultValue: 'pending',
    },
    {
      name: 'paymentMethod',
      type: 'select',
      options: [
        {
          label: 'Credit Card',
          value: 'credit-card',
        },
        {
          label: 'Bitcoin',
          value: 'bitcoin',
        },
        {
          label: 'Ethereum',
          value: 'ethereum',
        },
        {
          label: 'Other Crypto',
          value: 'other-crypto',
        },
      ],
    },
    {
      name: 'transactionId',
      type: 'text',
      admin: {
        description: 'Payment processor transaction ID',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Internal order notes',
      },
    },
  ],
  timestamps: true,
}