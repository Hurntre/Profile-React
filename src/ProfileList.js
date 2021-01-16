import Profile from './Profile';

const ProfileList = ({ profiles }) => {
    return ( 

        <div className="profile-list">
            {profiles.map((profile) => {
                    return <Profile key={profile.UserName} profile={profile} />
                })}
        </div>
     );
}
 
export default ProfileList;