// src/graphql/queries.ts
import { gql } from "@apollo/client";

export const useGetConferenceById = gql`
  query getConference($id: ID!) {
    conference(id: $id) {
      id
      startDate
      endDate
      slogan
      organizer {
        image {
          title
          url
        }
        firstName
        lastName
        name
        type
        social {
          homepage
          mastodon
          facebook
          instagram
          googleMaps
        }
      }
      series {
        id
        name
      }
      websiteUrl
      locations {
        image {
          url
        }
        country {
          name
        }
        name
        about
        city
        address
      }
    }
  }
`;

export const useGetConferences = gql`
  query getConferences {
    conferences {
      id
      startDate
      endDate
      slogan
      organizer {
        image {
          title
          url
        }
      }
      locations {
        image {
          url
        }
        country {
          name
        }
        name
        about
        city
        address
      }
    }
  }
`;
