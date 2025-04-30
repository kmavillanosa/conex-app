"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import Loading from "./Loading";
import {
  GetConferenceDocument
} from "@/graphql/generated/graphql";
import Link from "next/link";

type Labels = {
  back: string;
  loading: string;
  headline: string;
  datesLabel: string;
  locationLabel: string;
  organizerLabel: string;
  seriesLabel: string;
  visitWebsiteLabel: string;
};

type ConferenceDetailsProps = {
  id: string;
  labels: Labels;
};

const ConferenceDetails: React.FC<ConferenceDetailsProps> = ({
  id,
  labels,
}) => {
  const { data, loading, error } = useQuery(GetConferenceDocument, {
    variables: {
      id,
    },
  });

  const item = data?.conference;

  if (loading) return <Loading message={"Please wait"} />;

  return (
    <div className="conference-details">
      <Link href={"/conference"}>
        <button className="conference-details__back">{labels.back}</button>
      </Link>

      <div>
        <div
          className="conference-details__image"
          style={{ backgroundImage: `url(${item?.organizer.image.url})` }}
        />
      </div>

      <div className="conference-details__content">
        <h1 className="conference-details__title">{item?.id}</h1>
        <p className="conference-details__slogan">"{item?.slogan}"</p>

        <div className="conference-details__section">
          <strong>{labels.datesLabel}</strong> {item?.startDate} –{" "}
          {item?.endDate}
        </div>

        <div className="conference-details__section">
          <strong>{labels.locationLabel} </strong>
          {item?.locations?.map((location) => {
            return (
              <span key={location.name}>
                {`${location.name}, ${location.address}, ${location.city}, ${location.country?.name}`}
              </span>
            );
          })}
        </div>

        <div className="conference-details__section">
          <strong>{labels.organizerLabel}</strong>
          <table>
            <tbody>
              <tr>
                <td>{item?.organizer.name}</td>
              </tr>
              {item?.organizer.social.homepage && (
                <tr>
                  <td>
                    <a
                      href={item.organizer.social.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.organizer.social.homepage}
                    </a>
                  </td>
                </tr>
              )}
              {item?.organizer.social.facebook && (
                <tr>
                  <td>Facebook:</td>
                  <td>
                    <a
                      href={item.organizer.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.organizer.social.facebook}
                    </a>
                  </td>
                </tr>
              )}
              {item?.organizer.social.googleMaps && (
                <tr>
                  <td>Google Maps:</td>
                  <td>
                    <a
                      href={item.organizer.social.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.organizer.social.googleMaps}
                    </a>
                  </td>
                </tr>
              )}
              {item?.organizer.social.instagram && (
                <tr>
                  <td>Instagram:</td>
                  <td>
                    <a
                      href={item.organizer.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.organizer.social.instagram}
                    </a>
                  </td>
                </tr>
              )}
              {item?.organizer.social.mastodon && (
                <tr>
                  <td>Mastodon:</td>
                  <td>
                    <a
                      href={item.organizer.social.mastodon}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.organizer.social.mastodon}
                    </a>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {item?.series && (
          <div className="conference-details__section">
            <strong>{labels.seriesLabel}</strong>{" "}
            <a href={item?.series.id}>{item?.series.name}</a>
          </div>
        )}

        <div className="conference-details__section">
          <a
            href={item?.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="conference-details__website"
          >
            {labels.visitWebsiteLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConferenceDetails;
