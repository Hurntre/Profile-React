const ProfileList = ({ profiles}) => {
    return ( 
        <div className="profile-list">
            
            {profiles.map((profile) => {
                return <div className="profile-preview" key={profile.UserName}>
                       <h2>{ `User Name: ${profile.UserName}` }</h2>
                       <p>{ `Name: ${profile.FirstName} ${profile.LastName}` }</p>
                       <p> { `Gender: ${profile.Gender}` }</p>
                       {/* install package that makes this a string */ }
                       <p> { `Location: ${profile.Longitude} ${profile.Latitude}` }</p>
                       <h4> { `Payment Method: ${profile.PaymentMethod}` }</h4>
                       <p> {`Creditcard Number: ${profile.CreditCardNumber}`} </p>
                       <p> {`Creditcard Type: ${profile.CreditCardType}`}</p>
                       <p> {`Email: ${profile.Email}`}</p>
                       <p> {`Domain Name: ${profile.DomainName}`}</p>
                       <p> {`Phone Number: ${profile.PhoneNumber}`}</p>
                       <p> {`Mac Address: ${profile.MacAddress}`}</p>
                       <p> {`URL: ${profile.URL}`}</p>
                       <p> { `Last Login: ${profile.LastLogin}`}</p>
                </div>
            })}
        </div>
     );
}
 
export default ProfileList;