import React from "react";
import { GetConferencesQuery } from "@/graphql/generated/graphql";
import Link from "next/link";
import Image from "next/image";

type ConferenceCardProps = GetConferencesQuery["conferences"][number];

const ConferenceCard: React.FC<ConferenceCardProps> = ({
  organizer,
  id,
  startDate,
  locations,
  endDate,
  slogan,
}) => {
  return (
    <Link href={`/conference/${id}`}>
      <div className="conference-card">
        <div className="conference-card__image-wrapper">
          <Image
            width={200}
            height={300}
            className="conference-card__image"
            src={organizer.image.url}
            alt={id}
          />
        </div>

        <div className="conference-card__content">
          <h2 className="conference-card__title">{id}</h2>
          <p className="conference-card__dates">
            {startDate} - {endDate}
          </p>
          <p className="conference-card__location">
            {locations?.map((item) => item.name).join(", ")}
          </p>
          {slogan && <p className="conference-card__slogan">"{slogan}"</p>}
        </div>
      </div>
    </Link>
  );
};

export default ConferenceCard;
