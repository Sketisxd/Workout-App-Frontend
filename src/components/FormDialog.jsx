import * as React from 'react';
import {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'


export default function FormDialog(props) {
    const { user } = useAuthContext()
    const { dispatch } = useWorkoutsContext()
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!user) {
            setError("You must be logged in")
            return
        }
        
        const workout = { title, load, reps}
        console.log(workout)
        const response = await fetch('https://workout-app-backend-1x4w.onrender.com/api/workouts/' + props.id, {
            method: 'PATCH',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
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
            console.log('workout updated:', json)
            dispatch({ type: 'UPDATE_WORKOUT', payload: json })
        }
    }

    return (
        <React.Fragment>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                UPDATE
            </Button> */}
            <span className="material-symbols-outlined cursor-pointer absolute top-2 right-16 p-2 rounded-md hover:bg-yellow-300 border  transition ease-in-out duration-300" onClick={handleClickOpen}>update</span>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (e) => {
                        e.preventDefault();
                        handleClose();
                        handleSubmit(e)
                    },
                }}
            >
                <DialogTitle>Edit</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                       Edit exercise - '{props.name}'
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Exercise name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Load"
                        fullWidth
                        variant="standard"
                        type="number"
                        onChange={(e) => setLoad(e.target.value)}
                        value={load}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Reps"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setReps(e.target.value)}
                        value={reps}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Update</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}