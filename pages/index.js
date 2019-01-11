import Layout from '../components/Layout';
import Photo from '../components/Photo';
import getPhotos from '../data/data.js';

const Index = (props) => (
    <Layout>
      { props.images.map((image, key) => <Photo id={key} data={image} key={key} />)}
    </Layout>
)
Index.getInitialProps = async ({ }) => {
  // Would fetch data
  return {  images: getPhotos()  } // return { images: [ { }, { } ] }
}


export default Index
