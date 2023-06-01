import { createClient } from "contentful"
const useContentful = () => {

    const client = createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN
    })

    const getAuthors = async () => {
        try {
            const entries = await client.getEntries({
                content_type: 'product',
                select: 'fields'
            })

            // const data = entries.items.map((item) => {
            //     let image = item.fields.image.fields
            //     return { ...item.fields, ...image }
            // })
            return entries.items[0]
        }
        catch (error) {
            console.log(error);
        }
    }

    return { getAuthors }
}

export default useContentful;