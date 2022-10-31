import pic from './images/profile__img.jpg';
const Profile = () => {
    return ( 
        <div className="profile">
        <div id='profile__img'>
        <img src={pic} alt="profile_img"/>
        </div>
        <p>Oluwaseyi Yusuf</p>
        <a href="https://twitter.com/xeyiToba" id='twitter'>Twitter Link</a>
        <a href="https://training.zuri.team/”" id='btn__zuri'>Zuri Team</a>
        <a href="http://books.zuri.team/" id='books'>Zuri Books</a>
        <a href="https://books.zuri.team/" id='book__python'>Python Books</a>
        <a href="https://background.zuri.team/" id='pitch'>Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules" id='book__design'>Design Books</a>
        </div>
     );
}
 
export default Profile;