import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://graphql.contentful.com/content/v1/spaces/0j1i1whyos26',
    cache: new InMemoryCache(),
    headers: {
        Authorization: 'Bearer dT_L95vaaPhb_7rhbtCn-e9BxeCXc-yHPnoCPUB9wzs'
    }
});

export default client