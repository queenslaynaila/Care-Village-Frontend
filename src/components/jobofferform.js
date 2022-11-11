import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
export default function Jobofferform() {
    const navigate = useNavigate()
    const url = 'http://localhost:8000/offer'
    const [title, setTitle] = useState('');
    const [about, setAbout] = useState('');
    const [location, setlocation] = useState('');
    const [keyskills, setKeyskills] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender,setGender]=useState('');
    const [languages,setLanguages]=useState('');
    const [email,setEmail]=useState('');
    const [availability, setAvailability] = useState('');
    const [RateCharged, setRateCharged] = useState('');
    const [education, setEducation] = useState('');
    const [workExperience, setworkExperience] = useState('');
    const [additionalQualification,setAdditionalQualifications]=useState('');
    const [comfortabilityWorkingOutsidelocation,setcomfortabilityWorkingOutsidelocation]=useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    function handleSubmit(e) {
        e.preventDefault()
        const data = {
             title: title,
             about:about,
             location: location,             
             phoneNumber: phoneNumber,
             availability:availability,
             keyskills: keyskills,
             education:education,             
             additionalQualification:additionalQualification,
             workExperience:workExperience,
             email:email,
             languages:languages,             
             RateCharged:RateCharged,                        
             comfortabilityWorkingOutsidelocation:comfortabilityWorkingOutsidelocation,
             gender:gender,
            
        }
        console.log(data)
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(res => {
            console.log(res.json())
            if (!res.ok) setError(" failed. Try again")
            if (res.ok) {
                setSuccess("Filled Successfully")
                setTitle('');
                setAbout("");
                setlocation("");                     
                setPhoneNumber("");            
                setKeyskills("");
                setEducation("");
                setEmail("");
                setAvailability("");
                setGender("");
                setRateCharged("");
                setAdditionalQualifications("");
                setcomfortabilityWorkingOutsidelocation("");            
                setworkExperience("");
                setLanguages("");
                navigate("/sitterdash");
            }
        })
    }

    return (
        <div className="col-sm-6">
            <h2 className="mb-3">JOB OFFER FORM</h2>
            {error ? <div className="alert alert-danger" role="alert">{error}</div> : null}
            {success ? <div className="alert alert-success" role="alert">{success}</div> : null}
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="About"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setlocation(e.target.value)}
                        required
                    />
                </div>
               
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="KeySkills"
                        value={keyskills}
                        onChange={(e) => setKeyskills(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="comfortabilityWorkingOutsidelocation"
                        value={comfortabilityWorkingOutsidelocation}
                        onChange={(e) => setcomfortabilityWorkingOutsidelocation(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Work experience"
                        value={workExperience}
                        onChange={(e) => setworkExperience(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Education"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="comfortabilityWorkingOutsidelocation"
                        value={comfortabilityWorkingOutsidelocation}
                        onChange={(e) => setcomfortabilityWorkingOutsidelocation(e.target.value)}
                        required
                    />
                </div>
               
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Languages"
                        value={languages}
                        onChange={(e) => setLanguages(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="RateCharged"
                        value={RateCharged}
                        onChange={(e) => setRateCharged(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Availability"
                        value={availability}
                        onChange={(e) => setAvailability(e.target.value)}
                        required
                    />
                </div>
               
               
                <button type="submit" className="btn btn-danger">Submit</button>
            </form>
            <div style={{ paddingTop: '25px' }}>
            <button  onClick={() => { navigate('/sitterdash') }}type="submit" className="btn btn-danger">Return to Dashboard</button>
            </div>
        </div>
    )
}
