const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: 'yyhfht6g',
    dataset: 'production',
    apiVersion: '2021-07-30', // use current UTC date - see "specifying API version"!
    useCdn: false, // `false` if you want to ensure fresh data
})

export default client;