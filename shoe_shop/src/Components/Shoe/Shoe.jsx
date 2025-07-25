import './Shoe.css'

const Shoe = ({image,height,width,name,category,description,price})=>{
    
    return(
        <>
            <section className='shoeSection'>
                <div className="shoeImage"><img src={image} alt='' height={height} widht={width}></img></div>
                <div className="content">
                    <div className='shoeCategory'>{category}</div>
                    <div className='shoeName'>{name}</div>
                    <div className='shoeDescription'>{description}</div>
                    <div className='shoePrice'>{price}</div>
                    <button>Buy Now</button>
                </div>
            </section>
        </>
    )
}

export default Shoe