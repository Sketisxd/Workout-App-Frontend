import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const WorkoutDetails = ({workout}) => {
    const {dispatch} = useWorkoutsContext()
    const {user} = useAuthContext()
    const handleClick = async() => {
        if (!user ) {
            return 
        }
        if(confirm("Do you really want to delete this exercise?\nSelect Ok if you want to confirm deleting exercise")==false) {
            return
        }
        else {
            const response = await fetch('https://workout-app-backend-1x4w.onrender.com/api/workouts/' + workout._id, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'DELETE_WORKOUT', payload: json })
            }
        }
    }
    const handleUpdate = async() => {

    }

    return (
        <div className="workout-details bg-snow-white text-black pl-6 pr-8 pt-4 border border-black rounded-xl relative mx-12 md:mx-5">
            <h4 className="text-2xl mb-4 underline underline-offset-4 ">{workout.title}</h4>
            <p><strong>Load (kg): </strong> {workout.load}</p>
            <p><strong>Reps: </strong> {workout.reps}</p>
            <p><strong>Added: </strong>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined cursor-pointer absolute top-2 right-5 p-2 rounded-md hover:bg-red-600 border  transition ease-in-out duration-300" onClick={handleClick}>delete</span>
            <span className="material-symbols-outlined cursor-pointer absolute top-2 right-16 p-2 rounded-md hover:bg-yellow-300 border  transition ease-in-out duration-300" onClick={handleUpdate}>update</span>
        </div>
    )
}

export default WorkoutDetails