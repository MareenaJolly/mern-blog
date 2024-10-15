import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, molestiae! Nulla, 
          sit corporis? Sequi vitae ratione perferendis error quod impedit harum quo nam cumque quos dolorem natus dolore, distinctio rem itaque sapiente inventore assumenda? Ea magni aut corrupti omnis natus.
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem recusandae quas error veniam velit, fugiat tempora et, magni omnis ut mollitia laboriosam? Dicta pariatur esse molestias magnam laborum similique, vero commodi est magni accusantium delectus eius, ab maxime possimus
           perspiciatis voluptate recusandae? Voluptate expedita voluptatum nisi voluptas sint, culpa, id magni placeat et facere ab.
        </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita a officiis dolorem pariatur temporibus similique, accusantium vitae soluta molestiae dicta amet unde voluptas quae architecto dignissimos minima quas nesciunt repellat rem placeat modi esse maxime possimus nostrum. Dolore ipsam nihil, natus aut veniam repudiandae, quas illum ducimus deleniti inventore itaque vitae quaerat laborum dignissimos voluptatibus velit earum adipisci cum minus magnam cumque eum quis! Nisi asperiores voluptate rem nihil cum illum ex repudiandae autem veniam accusantium sint, ea culpa temporibus laboriosam! Numquam libero sint eum soluta architecto, qui maiores nulla reprehenderit odit minus similique ab recusandae doloremque neque, blanditiis 
        quidem cumque ipsum accusantium beatae, provident quo ducimus voluptate. Inventore, facilis consequuntur?
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit necessitatibus aut quisquam ipsam adipisci rerum quia laboriosam dolorum beatae reiciendis optio atque autem, at magnam totam! Error eos minima mollitia libero ipsa in at ullam consectetur! Saepe similique eum quod temporibus! Iure, sequi repellendus beatae quidem libero assumenda magnam provident dignissimos corrupti quo totam aspernatur odio aut eligendi officia nobis voluptates. Non necessitatibus expedita asperiores eveniet eum molestiae. Officiis nam neque ut nemo? Nemo libero molestias, nostrum itaque cupiditate impedit voluptates quis dolor numquam deleniti. Quibusdam aspernatur, dolor eaque facere et in error delectus accusamus pariatur! Quae accusantium officiis quaerat illum laborum. Ex cum delectus saepe consequatur, eaque explicabo praesentium vitae quo unde laudantium ratione? Eius vero facilis veniam labore necessitatibus quaerat aliquid quis, aspernatur perferendis, dolorum commodi, quo ea corporis voluptates magnam maiores eveniet officiis magni beatae expedita consequuntur sint mollitia. Quod totam illo eligendi distinctio rerum recusandae sequi velit repellendus, laborum accusamus exercitationem molestias ut aperiam est voluptate voluptatum earum fuga minima perferendis harum, odit neque. Modi minus beatae vel molestiae consequuntur quia commodi sed natus! Eum minus hic doloribus placeat magni praesentium deleniti dignissimos,
        voluptate sed amet dolore non fugiat inventore veritatis. Qui eum nesciunt quos ipsa.
        </p>
      </div>
    
    </section>
  )
}

export default PostDetail