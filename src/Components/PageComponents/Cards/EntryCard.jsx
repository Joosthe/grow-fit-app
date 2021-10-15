import React from 'react'

import useStaticCmsData from '../../../Hooks/useStaticCmsData';
import { getWorkoutTitleQuery } from '../../../Queries/Workout/getWorkoutsQuery';
import './styles/EntryCard.scss'

export default function EntryCard(props) {
  const workoutdate = new Date(props.entry.date);
  const { data : workout } = useStaticCmsData(getWorkoutTitleQuery(props.entry.workoutId));
  return (
        <div className="entrycard__wrapper my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/4">
          <article>
            <div className="entrycard__header">
              <time className="entrycard__date">{ workoutdate.getDate()} / { workoutdate.getMonth()+1} / {workoutdate.getFullYear()}</time>
              <h1>{workout?.workout?.title}</h1>
            </div>
            <div className="entrycard__body">
           <p className="entrycard__descr">{props.entry.info.substring(0, 200)}</p>
           <p className="entrycard__score">{props.entry.score} / 10</p>
           </div>
           </article>
        </div>
  )
}
