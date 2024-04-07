import { useEffect, useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('https://workout-app-backend-1x4w.onrender.com/api/workouts')
            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        fetchWorkouts()
    }, [dispatch])

    return (
        <div className="grid grid-cols-1 md:grid-cols-my-columns container mx-auto gap-5 mt-8">
            <WorkoutForm />
            <div className="workouts flex flex-col gap-5">
                {workouts && workouts.map((workout)=> (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>

        </div>
    )
}

export default Home