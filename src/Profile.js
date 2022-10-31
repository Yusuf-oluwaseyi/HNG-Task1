import pic from './images/profile__img.jpg';
const Profile = () => {
    return ( 
        <div className="profile">
        <div id='profile__img'>
        <img src={pic} alt="profile_img"/>
        </div>
        <p>Oluwaseyi Yusuf</p>
        <a href="https://twitter.com/xeyiToba" id='twitter'>Twitter Link</a>
        </div>
     );
}
 
export default Profile;