import Link from "next/link"

function Product({ title, pic, productDescription }) {
    let {file } = pic
  
    return (
      <div className="product">
        <img alt='picture' src={`https:${file.url}`}/>
        <Link href ='product/[title]' as={`/product/${title}`} />   
        <h2 className="title">{title} </h2>
        <div className="description">{productDescription}</div>
      </div>
    )
  }
  
  export default Product