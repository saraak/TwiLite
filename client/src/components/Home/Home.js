import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from "axios";
import './Home.css';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

const ShowAllChirps = (props) => {
    const [allChirps, setAllChirps] = useState([]);
    const [tickle, setTickle] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/Chirps")
            .then((res) => {
                console.log(res.data);
                setAllChirps(res.data);
            })
            .catch(err => console.log(err))
    }, [tickle])

    const incLikes = (e, id) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8000/api/Chirps/${id}/likes`)
            .then((res) => {
                console.log(res);
                setTickle(!tickle);
            })
            .catch((err) => console.log(err));
    }

    const deleteChirp = (e, id) => {
        e.preventDefault();
        axios
            .delete(`http://localhost:8000/api/Chirps/${id}/delete`)
            .then((res) => {
                console.log(res);
                setTickle(!tickle);
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <h2>{props.getUser.firstName}, let's see what's new today..</h2>
            {allChirps.map((Chirp, i) => {
                return (
                    <div className="main-container">
                        {Chirp.chirp ?
                            <div className="chirp-container">
                                <h4 className="creator">{Chirp.creator}</h4>
                                <IconButton className="delete" aria-label="delete" onClick={(e) => deleteChirp(e, Chirp._id)}>
                                <DeleteIcon />
                                </IconButton>
                                <p key={ i }>
                                    {Chirp.chirp}</p>
                                <button
                                    onClick={(e ) => incLikes(e, Chirp._id)}>
                                    Like
                                </button>
                            </div>
                            : null }
                    </div>
                )
            })}
            <div>
                <br/>

                <Link to="/Home/NewChirp">
                    <button className="blueButton" style={{width:"300px"}}>Add Chirp</button>
                </Link>
            </div>
        </div>
    )
}

export default ShowAllChirps;
