
export const data= [];

const dataPicture=()=>{
    for (let i = 0; i < 20; i++) {
       data.push({
        id:`${i}`,
        img:`https://picsum.photos/id/237/200/300?random=${i}`,
        content:`resim-${i}.`

       })
        
    }
    return data;
}


dataPicture();
