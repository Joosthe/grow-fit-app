import React from 'react'
import Container from '../../Wrappers/Container'
import AddContentCard from '../../PageComponents/Cards/AddContentCard'
import PageTitle from '../../PageSections/PageTitle'
import StaticContent from'../../../staticContent/content-En.js'
import ReactHtmlParser from 'react-html-parser';
import { FaThumbsUp,FaMagic,FaTasks,FaPencilAlt } from "react-icons/fa";

const sc =  StaticContent.WorkoutPages.AddContent;

export default function addContent() {
  return (
    <>
    <section className="intro">
      <PageTitle>{sc.title}</PageTitle>
      <p className="intro-line">{sc.introLine}</p>
    </section>
    <Container>
      <div class="flex flex-wrap -mx-2 overflow-hidden grid-add-content pb-4">
        <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/4 flex-auto">
          <AddContentCard
            to="/new-entry"
            icon={<FaThumbsUp/>}
            title={sc.cards[0].title}
            descr={ReactHtmlParser(sc.cards[0].descr)}
          />
        </div>
        <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/4 flex-auto">   
        <AddContentCard
            to="/choose-workout"
            icon={<FaMagic/>}
            title={sc.cards[1].title}
            descr={ReactHtmlParser(sc.cards[1].descr)}
          />
        </div>
        <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/4 flex-auto">
          <AddContentCard
            to="/create-workout"
            icon={<FaPencilAlt/>}
            title={sc.cards[2].title}
            descr={ReactHtmlParser(sc.cards[2].descr)}
          />
        </div>
        <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/4 flex-auto">
          <AddContentCard
            to="/new-exercise"
            icon={<FaTasks/>}
            title={sc.cards[3].title}
            descr={ReactHtmlParser(sc.cards[3].descr)}
          />
        </div>

    </div>
    </Container>
    </>
  )
}
