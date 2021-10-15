import React from 'react'
import useStaticCmsData from '../../Hooks/useStaticCmsData';
import { getWorkoutsPromotedTeaserQuery } from '../../Queries/Workout/getWorkoutsQuery';
import { useUser } from '../../Contexts//UserContext';
import { getLatestEntryQuery } from '../../Queries/entry/getEntriesQuery';
import EntryCard from '../PageComponents/Cards/EntryCard';
import Button from '../PageComponents/Buttons/Button';
import {BsChevronRight} from 'react-icons/bs'
export default function LatestEntries() {
  const { currentUser } = useUser();
  const { data : entries } = useStaticCmsData(getLatestEntryQuery(currentUser.id));
  return (
    <div className="my-8">
      <h1 className="text-center text-3xl font-bold my-4">Latest Entries</h1>
      <div className="flex flex-wrap -mx-2 overflow-hidden grid-add-content pb-4">  
      {entries?.entries?.map(item => 
       < EntryCard entry={item} key={item?.id}/>

      )}
      </div>
      <Button variant="btn-cta-section" to="/all-entries">Check out all your entrys <BsChevronRight/> </Button>
    </div>
  )
}
