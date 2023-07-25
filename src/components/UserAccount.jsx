import '../styles/UserAccount.css';

export default function UserAccount() {
    return(
        <div className="user-acc-wrapper">
            <div className="user-acc-wrapper_container">
                <div className="user-acc-wrapper_container__userphoto">
                    <img src="../images/useravatar.png" alt="useravatar"></img>
                    <h2 className="UserName">User Name</h2>
                </div>
                <div className="user-acc-wrapper_container__userinfo">
                <h1>User Information</h1>
                <textarea  rows={14} cols={170}></textarea>
                </div>
                <div></div>
            </div>
        </div>
    )
}