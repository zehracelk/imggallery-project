

const Picture=({data})=>{
    return(

        <div>
           {data.map((item)=>{
            const {id, img, content} = item

        return(
            <div key={id}> <img src={img} alt="resim" />
             <p>
              {content}  
            </p>
            </div>
        
          )
            })}
        </div>
    )
}

export default Picture;