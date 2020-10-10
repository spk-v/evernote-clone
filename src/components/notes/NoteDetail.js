import React from 'react';
import {useSelector} from 'react-redux';
import {useFirestoreConnect,isLoaded, isEmpty} from 'react-redux-firebase';
import moment from 'moment';


const NoteDetail = (props) => {
    const id=props.match.params.id
    useFirestoreConnect([{collection:'notes',doc:id}]);
    const note=useSelector(({firestore:{data}})=> data.notes && data.notes[id])
    const noteMarkup=!isLoaded(note)?(
        <div className="container section">
            <dic className="card z-depth-0">
                <div className="card-content white">
                    <span className="card-title">Loading...</span>
                    
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    
                </div>
            </dic>
        </div>
    ):isEmpty(note)?(
        <div className="container section">
            <dic className="card z-depth-0">
                <div className="card-content white">
                    <span className="card-title">The Note content is Empty</span>
                    
                </div>
                <div className="card-action grey lighten-4 grey-text">
                </div>
            </dic>
        </div>
    ):(
        <div className="container section">
            <dic className="card z-depth-0">
                <div className="card-content white">
                    <span className="card-title">{note.title}</span>
                    <p>{note.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>{moment(note.createdAt.toDate()).calendar()}</div>
                </div>
            </dic>
        </div>
    )
    return noteMarkup
}

export default NoteDetail
