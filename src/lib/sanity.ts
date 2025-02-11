import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'your-project-id', // Replace with your Sanity project ID
  dataset: 'production',
  apiVersion: '2024-02-05',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Queries
export async function getRestaurants() {
  return await client.fetch(`
    *[_type == "restaurant"] {
      _id,
      name,
      cuisine,
      description,
      rating,
      "image": image.asset->url,
      slug
    }
  `);
}

export async function getRestaurantBySlug(slug: string) {
  return await client.fetch(`
    *[_type == "restaurant" && slug.current == $slug][0] {
      _id,
      name,
      cuisine,
      description,
      rating,
      "image": image.asset->url,
      "menu": *[_type == "menuItem" && references(^._id)] {
        _id,
        name,
        description,
        price,
        "image": image.asset->url,
        category
      }
    }
  `, { slug });
}

export async function submitContactForm(data: any) {
  return await client.create({
    _type: 'contact',
    name: data.name,
    email: data.email,
    message: data.message,
    createdAt: new Date().toISOString(),
  });
}
