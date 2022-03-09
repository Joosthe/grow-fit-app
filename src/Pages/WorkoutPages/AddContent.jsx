import React from 'react'
import { FaThumbsUp, FaCalendarAlt, FaTasks, FaPencilAlt } from "react-icons/fa";
import AddContentCard from '@PageComponent/Cards/AddContentCard'
import IntroSection from '@PageSection/IntroSection'
import Container from '@Wrapper/Container'
import useStaticContent from '@/Hooks/useStaticContent';

export default function AddContent() {
  const sc = useStaticContent('WorkoutPages.AddContent');
  return (
    <>
      <Container>
        <IntroSection line={sc.introLine} title={sc.title} />
        <div className="flex flex-wrap -mx-2 overflow-hidden grid-add-content pb-4">
          <div className="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/4 xl:w-1/4 flex-auto">
            <AddContentCard
              to="/new-entry"
              icon={<FaThumbsUp />}
              title={sc.cards[0].title}
              descr={sc.cards[0].descr}
            />
          </div>
          <div className="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/4 xl:w-1/4 flex-auto">
            <AddContentCard
              to="/schedule-workout"
              icon={<FaCalendarAlt />}
              title={sc.cards[4].title}
              descr={sc.cards[4].descr}
            />
          </div>
          <div className="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/4 xl:w-1/4 flex-auto">
            <AddContentCard
              to="/create-workout"
              icon={<FaPencilAlt />}
              title={sc.cards[2].title}
              descr={sc.cards[2].descr}
            />
          </div>
          <div className="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/4 xl:w-1/4 flex-auto">
            <AddContentCard
              to="/create-exercise"
              icon={<FaTasks />}
              title={sc.cards[3].title}
              descr={sc.cards[3].descr}
            />
          </div>

        </div>
      </Container>
    </>
  )
}
