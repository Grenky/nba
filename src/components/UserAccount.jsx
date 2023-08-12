import { useState } from 'react';
import '../styles/UserAccount.css';

export default function UserAccount() {

    const[userName, setUserName] = useState('User Name');
    const[avatar, setAvatar] = useState('../images/useravatar.png');
    const[userDescription, setUSerDescription] = useState('');

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setAvatar(reader.result);
        }

        if(file) {
            reader.readAsDataURL(file);
        }
    };


    const handleSave = () => {
        console.log('saved');
    };

    return(
        <div className="user-acc-wrapper">
            <div className="user-acc-wrapper_container">
                <div className="user-acc-wrapper_container__userphoto">
                    <img src={avatar} alt="useravatar"></img>
                    <input className="avatar-btn" type="file" accept="image/*"  onChange={handleAvatarChange} />
                </div>
                <div>User Name</div>
                <div className="user-acc-wrapper_container__userinfo">
                <h1>User Information</h1>
                <textarea  rows={14} cols={170} value={userDescription} onChange={(event) => setUSerDescription(event.target.value)}></textarea>
                </div>
                <button className="user-acc-wrapper_save-btn" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}