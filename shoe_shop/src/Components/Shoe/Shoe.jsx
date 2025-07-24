// import './Shoe.css'

const Shoe = ({image,height,width,name,category,description,price})=>{
    
    return(
        <>
            <section className='shoeSection'>
                <img className="shoeImage" src={image} alt='' height={height} widht={width}></img>
                <div className="content">
                    <div className='shoeCategory'>{category}</div>
                    <div className='shoeName'>{name}</div>
                    <div className='shoeDescription'>{description}</div>
                    <div className='shoePrice'>{price}</div>
                    <div className='buyNowBtn'>
                        <button>Buy Now</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shoe