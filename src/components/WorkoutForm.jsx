import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
const WorkoutForm = () => {
    const {dispatch} = useWorkoutsContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, load, reps }

        const response = await fetch('https://workout-app-backend-1x4w.onrender.com/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setError(null)
            setTitle('')
            setLoad('')
            setReps('')
            setEmptyFields([])
            console.log('new workout added:', json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return (
        <form className="create bg-snow-white p-8 max-h-105 border rounded-md border-black mx-24 md:mx-5" onSubmit={handleSubmit}>
            <h2 className="text-lg">Add a New Exercise to your workout</h2>
            <hr />
            <div className="form flex flex-col gap-2  mt-5">
            <label>Excersize Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                    className={`${emptyFields.includes('title') ? 'error' : ''} border rounded-sm border-gray-400`}
            />

            <label>Load (in kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={`${emptyFields.includes('load') ? 'error' : ''} border rounded-sm border-gray-400`}
                
            />

            <label>Number of Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                    className={`${emptyFields.includes('reps') ? 'error' : ''} border rounded-sm border-gray-400`}
            />
                
                <button className="cursor-pointer bg-black-slate rounded-md mt-5 p-3 text-white hover:bg-charcoal-black  transition ease-in-out duration-150">Add Workout</button>
                {error && <div className="text-red-600">{error}</div>}
            </div >
        </form>

    )
}

export default WorkoutForm