import React, { useState } from 'react'
import useStaticCmsData from '@/Hooks/useStaticCmsData';
import { getWorkoutExercisesQuery } from '@/Queries/Workout/getWorkoutsQuery';
import { BsChevronDown } from 'react-icons/bs'
import './styles/WorkoutExercise.scss'

export default function WorkoutExercise(props) {
  const { data: ex } = useStaticCmsData({}, getWorkoutExercisesQuery(props.itemId));
  const [open, setopen] = useState(false)

  return (
    <div className="workoutexercise__wrapper">
      <div className={"workoutexercise__header " + (open ? "" : "closed")} onClick={() => setopen(!open)}>
        <p>{ex?.exercise?.title}</p>
        <span className={"workoutexercise__icon "}>
          <BsChevronDown />
        </span>
      </div>
      <div className={"workoutexercise__body " + (open ? "" : "closed")}>
        <p>{ex?.exercise?.description}</p>
      </div>
    </div>

  )
}
