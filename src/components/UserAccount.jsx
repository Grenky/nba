import { useState } from 'react';
import '../styles/UserAccount.css';

export default function UserAccount() {

    const[userName, setUserName] = useState('User Name');
    const[avatar, setAvatar] = useState('../images/useravatar.png');
    const[userDescription, setUserDescription] = useState('');
    const[editedUserName, setEditedUserName] = useState(userName);
    const[open, setOpen] = useState(false);
   
    const[isEditMode, setIsEditMode] = useState(false);

    const handleNameChange = (event) => {
        setEditedUserName(event.target.value);
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setAvatar(reader.result);
        }

        if(file) {
            if(file.type.startsWith('image/')) {
                reader.readAsDataURL(file);  
            } else {
                setOpen(true);
            }
        } 
    };
    


    const handleSave = () => {   
        console.log('saved');
    };
    
    const handleSaveName = () => {
        setUserName(editedUserName)
        console.log('is saved', editedUserName);
    };


    return(
        <div className="user-acc-wrapper">
            <div className="user-acc-wrapper_container">
                <div className={`popup-error-window ${open ? 'show': ''}`}>
                    clownada
                </div>
                <div className="user-acc-wrapper_container__userphoto">
                    <img className='user-avatar' src={avatar} alt="useravatar"></img>
                    <input className="avatar-btn" type="file" accept="image/*"  onChange={handleAvatarChange} />
                </div>    
                        <h2>{userName}</h2>
                <input type='text' onChange={handleNameChange} placeholder="User Name" value={editedUserName} className={isEditMode ? 'edit-mode' : ''}></input>
                {isEditMode ? (
                    <button onClick={() => setIsEditMode(false)}>Cancel</button>
                    
                ) : ( 
                    <>
                    <button onClick={handleSaveName}>Save</button>
                    <button onClick={() => setIsEditMode(true)}>Edit</button>
                    </>
                )}
                <div className="user-acc-wrapper_container__userinfo">
                <h1>User Information</h1>
                <textarea  rows={14} cols={170} value={userDescription} onChange={(event) => setUserDescription(event.target.value)}></textarea>
                </div>
                <button className="user-acc-wrapper_save-btn" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}