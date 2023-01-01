import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client =  sanityClient({
  projectId:'8ymeskmf',
  dataset:'production',
  apiVersion:'2022-12-31',
  useCdn:true,
  token:process.env.Public_Sanity_Token
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
