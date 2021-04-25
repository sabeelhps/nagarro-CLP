const list = document.getElementById('list');
const inp = document.getElementById('inp');


async function getShows(show) {
    
    const res=await axios.get(`http://api.tvmaze.com/search/shows?q=${show}`)
    
    for (let item of res.data) {
        if (item.show.image) {

            const imageSrc = item.show.image.medium;
            const img = document.createElement('img');
            img.src = imageSrc;
            img.style.margin = '10px';
            list.append(img);

        }
    }
}

inp.addEventListener('keypress', (e) => {
    
    if (e.key === 'Enter') {
        const show = inp.value;
        getShows(show);
    }
})




