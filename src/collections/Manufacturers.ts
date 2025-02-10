import { CollectionConfig } from "payload";

export const Manufacturers: CollectionConfig = {
  slug: 'manufacturers',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'cars',
      type: 'join',
      on: 'manufacturer',
      collection: 'cars'
    }
  ],
}
