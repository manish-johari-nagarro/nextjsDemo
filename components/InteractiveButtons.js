import { MdModeComment, MdFavoriteBorder } from 'react-icons/md'
export default ({likes, commentsNum}) => (
    <div className="meta">
        <a href="/" className="heart"><MdFavoriteBorder />{likes}</a>
        <a href="/"><MdModeComment />{commentsNum}</a>
    </div>
)
