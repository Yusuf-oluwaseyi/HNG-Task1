import pic from '../images/profile__img.jpg';
const Profile = () => {
    return ( 
        <div className="profile">
        <div id='profile__img'>
        <img src={pic} alt="profile_img"/>
        </div>
        <p>Oluwaseyifunmi Yusuf</p>
        <h6 id='slack'>Oluwaseyifunmi Yusuf</h6>
        </div>
     );
}
 
export default Profile;