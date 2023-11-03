export const ApiCall = async() => {
    
    try {
    const response = await fetch('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=4341b315f939b72bd00d3963f809a8af&hash=48d5b0c9297b30531ff6e92118aadc52');

        console.log(response);

        const data = await response.json();
        // return data
        console.log(data);
    } catch(error) {
        console.log(error);
        return null
    }

    


        /* const getImageUrl = (thumbnail) => {
            return `${thumbnail.path}.${thumbnail.extension}`;
        };

        const imageUrl = getImageUrl(character.thumbnail);
            <img src={imageUrl} alt={character.name} />; */
        

}
