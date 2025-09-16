import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    // Disable Payload's built-in auth since we're using Auth0
    disableLocalStrategy: true,
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'auth0Id',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Auth0 user identifier',
      },
    },
    {
      name: 'role',
      type: 'select',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
      defaultValue: 'user',
    },
    {
      name: 'profile',
      type: 'group',
      fields: [
        {
          name: 'firstName',
          type: 'text',
        },
        {
          name: 'lastName',
          type: 'text',
        },
        {
          name: 'avatar',
          type: 'text',
          admin: {
            description: 'Avatar URL from Auth0 or uploaded media',
          },
        },
      ],
    },
  ],
}