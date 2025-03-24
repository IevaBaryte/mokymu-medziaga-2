const Komp7 = () => {
    let antraste = 'Objektu masyvas';
    let links = [
        {id: 1, url: '/', title: 'Pradzia'},
        {id: 2, url: 'https://www.delfi.lt/', title: 'Paslaugos'},
        {id: 3, url: 'https://www.15mkin.lt/', title: 'Apie mus'},
        {id: 4, url: 'https://www.nba.lt/', title: 'Kontaktai'}
    ]

    return (
        <div>
            <h2>{antraste}</h2>
            <ul>
            {
            links.map(link => <li><a key={link.id} href={link.url}>{link.title}</a></li>)
            }
            </ul>

        </div>
    )
};

export default Komp7;