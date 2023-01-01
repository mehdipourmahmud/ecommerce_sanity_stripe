import Image from 'next/image';
import NotFoundImage from '../public/5203299.jpg';


const  NotFound = () => {
  
  return(
    <div className='center'>
    <Image src={NotFoundImage} alt="me" width="640" height="640" />
<style jsx>{`
.center {
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
}
`}</style>
    </div>

  ) 
  
}
export default NotFound