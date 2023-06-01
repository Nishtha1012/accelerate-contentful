import { gql } from '@apollo/client'

const GET_MAIN_BANNERS = gql`
query getMainBanners{
    bannerCollection (where: {bannerName_contains:"main_banner"}, order:sys_publishedAt_ASC){
      items{
        bannerName
        alt
        bannerImage{
          url
        }
      }
    }
  }
`

const GET_NAVBAR_DATA = gql`
query getNavbarData{
    navbarListCollection(limit:20 , order:sys_publishedAt_ASC){
      items{
        titleMain
        listCollection(limit:20){
          items{
            title
            listItemsCollection(limit:20){
              items{
              itemName
              slug
              }
            }
          }
        }
      }
    }
    }
      `


const GET_NORMAL_BANNERS = gql`
query getNormalBanners{
    bannerCollection (where: {bannerName_contains:"normal_banner"}, order:sys_publishedAt_ASC){
      items{
        bannerName
        alt
        bannerImage{
          url
        }
      }
    }
  }
`

const GET_TOP_CATEGORIES = gql`
query getTopCategories{
    topCategoriesCollection(order:sys_publishedAt_ASC){
      items{
        categoryName
        alt
        redirect
        categoryImage {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
      }
    `

const GET_SMALL_BANNERS = gql`
    query getSmallBanners{
        bannerCollection (where: {bannerName_contains:"small_banner"}, order:sys_publishedAt_ASC){
          items{
            bannerName
            alt
            bannerImage{
              url
            }
          }
        }
      }`

const GET_FEATURE_PRODUCTS = gql`
query getFeatureProducts{
  featuredProductsCollection(order:sys_publishedAt_ASC){
    items{
      productsName
      productImageCollection{
        items{
          url
        }
      }
      productPrice
      altText
    }
  }
}`

const GET_FOOTER_DATA = gql`
query getFooterData{
	footerListsCollection(order:sys_publishedAt_ASC){
    items{
      listHeading
      listItemsCollection{
        items{
          itemName
          slug
        }
      }
    }
  }
  footerLevel2LogoCollection{
    items{
      title
      description
      logo{
        url
      }
    }
  }
  copyrightCollection{
    items{
      copyrightText
    }
  }
}`

export {
  GET_MAIN_BANNERS,
  GET_NAVBAR_DATA,
  GET_NORMAL_BANNERS,
  GET_TOP_CATEGORIES,
  GET_SMALL_BANNERS,
  GET_FEATURE_PRODUCTS,
  GET_FOOTER_DATA
}