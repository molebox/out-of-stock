export default {
    title: 'Home page',
    name: 'homepage',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            name: 'heroVideo',
            title: 'Hero video',
            type: 'cloudinary.asset'
        },
        {
            name: 'smallInfoImage',
            title: 'Small info image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'largeHeroImage',
            title: 'Large hero image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}