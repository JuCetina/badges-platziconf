import React, {useState} from 'react';

export default function BadgeForm(){

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ jobTitle, setJobTitle ] = useState('');
    const [ twitter, setTwitter ] = useState('');

    const handleChange = e => {
        // console.log({ 
        //     name: e.target.name, 
        //     value: e.target.value 
        // });

        switch(e.target.name){
            case "firstName":
                setFirstName(e.target.value);
                break;
            case "lastName":
                setLastName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "jobTitle":
                setJobTitle(e.target.value);
                break;
            case "twitter":
                setTwitter(e.target.value);
                break;
        }

    };

    const handleClick = () => {
        console.log("Se le ha dado click al botón");
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("El formulario fue enviado");
        console.log(firstName, lastName, email, jobTitle, twitter);

        setFirstName('');
        setLastName('');
        setEmail('');
        setJobTitle('');
        setTwitter('');
    }

    return(
        <div>
            <h1>New Attendant</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input onChange={handleChange} className="form-control" type="text" name="firstName" value={firstName}/>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input onChange={handleChange} className="form-control" type="text" name="lastName" value={lastName}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={handleChange} className="form-control" type="email" name="email" value={email}/>
                </div>
                <div className="form-group">
                    <label>Job Title</label>
                    <input onChange={handleChange} className="form-control" type="text" name="jobTitle" value={jobTitle}/>
                </div>
                <div className="form-group">
                    <label>Twitter</label>
                    <input onChange={handleChange} className="form-control" type="text" name="twitter" value={twitter}/>
                </div>
                <button onClick={handleClick} className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}