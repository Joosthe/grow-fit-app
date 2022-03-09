import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import Button from '@PageComponent/Buttons/Button';
import WorkoutTeaserCard from '@PageComponent/Cards/WorkoutTeaserCard';
import useStaticCmsData from '@/Hooks/useStaticCmsData';
import { getWorkoutsPromotedTeaserQuery } from '@/Queries/Workout/getWorkoutsQuery';
import './styles/PromotedWorkout.scss';

export default function PromotedWorkouts() {
  const { data: workoutsdata } = useStaticCmsData({}, getWorkoutsPromotedTeaserQuery);
  return (
    <section className="promoted_workouts__wrapper">
      <h1 className="promoted_workouts__title">Our workouts</h1>
      <div className="flex flex-wrap -mx-2 overflow-hidden grid-add-content pb-4">
        {workoutsdata?.workouts?.map(item => (
          <WorkoutTeaserCard info={item} key={item?.id} />
        ))}
      </div>
      <div className="text-center">
        <Button variant="btn-cta-section" to="/workouts">Check out all our workouts <BsChevronRight /> </Button>
      </div>

    </section>
  )
}
