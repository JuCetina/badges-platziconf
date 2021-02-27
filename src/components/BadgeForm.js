import React from 'react';

export default function BadgeForm(props){

    const handleClick = () => {
        console.log("Se le ha dado click al botón");
    }

    return(
        <>
            <form onSubmit={props.onSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input onChange={props.onChange} className="form-control" type="text" name="firstName" value={props.firstName}/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input onChange={props.onChange} className="form-control" type="text" name="lastName" value={props.lastName}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={props.onChange} className="form-control" type="email" name="email" value={props.email}/>
                </div>
                <div className="form-group">
                    <label>Job Title</label>
                    <input onChange={props.onChange} className="form-control" type="text" name="jobTitle" value={props.jobTitle}/>
                </div>
                <div className="form-group">
                    <label>Twitter</label>
                    <input onChange={props.onChange} className="form-control" type="text" name="twitter" value={props.twitter}/>
                </div>
                <button onClick={handleClick} className="btn btn-primary">Save</button>
            </form>
            {props.error && (
                <p className="text-danger">{props.error}</p>
            )}
        </>
    )
}