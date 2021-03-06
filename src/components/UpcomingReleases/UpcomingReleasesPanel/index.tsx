import React from 'react';
import UpcomingReleasesItem from '../UpcomingReleasesItem';
import { UpcomingReleaseData } from '../../../hooks/useUpcomingReleases';

type Props = {
  releases: UpcomingReleaseData[];
};

export default function UpcomingReleasesPanel({
  releases,
}: Props): JSX.Element {
  return (
    <div className="upcoming-releases__panel">
      {releases.map(release => (
        <UpcomingReleasesItem
          key={release.releaseType}
          releaseDate={release.releaseDate}
          releaseType={release.releaseType}
          alreadyReleased={release.alreadyReleased}
        />
      ))}
    </div>
  );
}
