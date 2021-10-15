import React from 'react'
import useStaticCmsData from '../../Hooks/useStaticCmsData';
import { getWorkoutsPromotedTeaserQuery } from '../../Queries/Workout/getWorkoutsQuery';
import { useUser } from '../../Contexts//UserContext';
import { getLatestEntryQuery } from '../../Queries/entry/getEntriesQuery';
export default function LatestEntries() {
  const { currentUser } = useUser();
  const { data : entries } = useStaticCmsData(getLatestEntryQuery(currentUser.id));
  return (
    <div>
      <h1>Latest Entries</h1>
      {console.log(entries)}
    </div>
  )
}
