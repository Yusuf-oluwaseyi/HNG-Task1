import slack from './images/slack.png';
import git from './images/github.png';

const Links = () => {
    return ( 
        <div className="links">
        <a href="https://twitter.com/xeyiToba" id='twitter'>Twitter Link</a>
        <a href="https://training.zuri.team/”" id='btn__zuri'>Zuri Team</a>
        <a href="http://books.zuri.team/" id='books'>Zuri Books</a>
        <a href="https://books.zuri.team/" id='book__python'>Python Books</a>
        <a href="https://background.zuri.team/" id='pitch'>Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules" id='book__design'>Design Books</a>
        <div>
            <img src={slack} alt="" />
            <img src={git} alt="" />
        </div>
        </div>
     );
}
 
export default Links;