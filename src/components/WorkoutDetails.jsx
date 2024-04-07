import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const WorkoutDetails = ({workout}) => {
    const {dispatch} = useWorkoutsContext()
    const handleClick = async() => {
        const response = await fetch('https://workout-app-backend-1x4w.onrender.com/api/workouts' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }

    }

    return (
        <div className="workout-details bg-zinc-100 text-black pl-6 pr-8 pt-4 border border-black rounded-xl relative mx-12 md:mx-5">
            <h4 className="text-2xl mb-4 underline underline-offset-4">{workout.title}</h4>
            <p><strong>Load (kg): </strong> {workout.load}</p>
            <p><strong>Reps: </strong> {workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined cursor-pointer absolute top-2 right-5 p-2 rounded-md hover:bg-red-600  transition ease-in-out duration-150" onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails