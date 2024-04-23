import { useEffect, useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()
    const [loading, setLoading] = useState(true)
    const {user} = useAuthContext()
    function timeout(delay) {
        return new Promise(res => setTimeout(res, delay));
    }
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('https://workout-app-backend-1x4w.onrender.com/api/workouts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok) {
                // await timeout(3000);
                dispatch({type: 'SET_WORKOUTS', payload: json})
                setLoading(false)
            }
        }
        if (user) {
            fetchWorkouts()
        }

    }, [dispatch, user])

    return (
        <div className="grid grid-cols-1 md:grid-cols-my-columns container mx-auto gap-5 mt-8">
            <WorkoutForm />
            <div className="workouts flex flex-col gap-5">
                {loading == true ?
                    <>
                        <div className=" bg-yellow-200 text-black text-center flex justify-center flex-col items-center">
                            <p className=" t  p-3">Please wait. Loading data from database. Might take a bit, because backend server is running on free plan.</p >
                            <svg
                                className="animate-spin"
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillRule="evenodd" opacity="0.2" /><path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="currentColor" /></svg>
                            Processing...
                        </div>
                    </>
                    :
                    (
                        <>
                            {workouts && workouts.map((workout) => (
                                <WorkoutDetails key={workout._id} workout={workout} />
                            ))}
                        </>

                    )}

            </div>
        </div>
    )
}

export default Home