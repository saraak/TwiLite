import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'

const NewChirp = (props) => {

    const [chirp, setChirp] = useState("");
    const [errors, setErrors] = useState({});

    const newChirp = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8000/api/Chirps/new`, {
                chirp: chirp,
                creator_id: props.getUser._id,
                creator: props.getUser.userName
            })
            .then((res) => {
                console.log(res.data);
                if(res.data.error){
                    setErrors(res.data.error.errors);
                } else {
                    navigate(`/Home`);
                }
            })
            .catch((err) => console.log(err));
    }

    return (
        <div >
            <div>
                <form onSubmit={newChirp}>
                    <div>
                        <div style={{margin: "5px"}}>
                            <div>
                                <label style= {{display: "inline-block", margin: "0px 12px 5px 5px"}}>Chirp</label>
                                <input
                                    type="text"
                                    value={chirp}
                                    onChange={(e) => {setChirp(e.target.value)}}
                                    style={{width: "200px"}}
                                />
                            </div>
                            {errors.chirp ? (
                                <span className="errorFont" style={{display: "block"}}>{errors.chirp.message}</span>
                            ) : null
                            }
                        </div>
                        <button type="submit"
                                onClick = {(e) => newChirp(e)}
                                style={{margin:"40px 0px", width: "300px"}}>
                            Chirp chirp!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewChirp;