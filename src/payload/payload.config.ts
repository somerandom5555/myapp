import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

// Import all collections
import { Users } from './collections/Users'
import { Products } from './collections/Products'
import { Orders } from './collections/Orders'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'

export default buildConfig({
  admin: {
    // Disable admin UI for now as requested - just backend config
    disable: true,
  },
  collections: [
    Users,
    Products,
    Orders,
    Media,
    Posts,
  ],
  editor: lexicalEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/traderspool',
  }),
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key',
  typescript: {
    outputFile: './src/payload/payload-types.ts',
  },
  cors: [
    process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    process.env.APP_BASE_URL || 'http://localhost:3000',
  ],
  csrf: [
    process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    process.env.APP_BASE_URL || 'http://localhost:3000',
  ],
})