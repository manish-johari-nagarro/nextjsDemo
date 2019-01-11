import Layout from '../components/Layout';
import Photo from '../components/Photo';
import CommentsFunctionality from '../components/InteractiveButtons'
import getPhotos from '../data/data.js' 

const PhotoPage = (props) => (
    <Layout>
        <div className="container">
            <div className="display_image">
                <img src={`/static/art/${props.image.image}`} alt=''/>
                <CommentsFunctionality likes={props.image.likes} />
            </div>
            <div className="comments">
                <p className="tagline">{props.image.tagline}</p>
                {
                    props.image.comments.map((comment, key) => <p key={key}><strong>{comment.user}:</strong>{comment.body}</p>)
                }
                <form className="comment-form" >
                    <input type="text"placeholder="Author" />
                    <input type="text"  placeholder="comment..." />
                    <input type="submit" hidden />
                </form>
            </div>
        </div>
        <style>{` `}</style>
    </Layout>
)


PhotoPage.getInitialProps = async ({query}) => {
    // could fetch data here
    let {id} = {...query}
    let image = getPhotos().find(m => m.id == id)
    return { image } 
}


export default PhotoPage