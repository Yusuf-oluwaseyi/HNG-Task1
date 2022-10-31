import pic from './images/profile__img.jpg';
const Profile = () => {
    return ( 
        <div className="profile">
        <div id='profile__img'>
        <img src={pic} alt="profile_img"/>
        </div>
        <p>Oluwaseyi Yusuf</p>
        </div>
     );
}
 
export default Profile;