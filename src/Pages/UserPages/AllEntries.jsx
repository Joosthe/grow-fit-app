import React from 'react'
import EntryCard from '@PageComponent/Cards/EntryCard';
import IntroSection from '@PageSection/IntroSection';
import Container from '@Wrapper/Container';
import { useUser } from '@/Contexts/UserContext';
import useStaticCmsData from '@/Hooks/useStaticCmsData';
import { getAllEntriesQuery } from '@/Queries/entry/getEntriesQuery';


export default function AllEntries() {
  const { currentUser } = useUser();
  const { data: entries } = useStaticCmsData({ entries: [] }, getAllEntriesQuery(currentUser.id));
  return (
    <Container>
      <IntroSection line={''} title={'Your enties'} />
      <div className="flex flex-wrap -mx-2 overflow-hidden grid-add-content pb-4">
        {entries?.entries?.map(item =>
          < EntryCard entry={item} key={item?.id} />

        )}
      </div>
    </Container>
  )
}
