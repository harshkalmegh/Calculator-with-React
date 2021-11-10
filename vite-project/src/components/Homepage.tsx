
import PersonCards from './PersonCards';

const list = [{
    label: 'Person',
    image: 'https://www.iconpacks.net/icons/1/free-user-icon-244-thumb.png',
}, {
    label: 'Person',
    image: 'https://www.iconpacks.net/icons/1/free-user-icon-244-thumb.png',
}, {
    label: 'Person',
    image: 'https://www.iconpacks.net/icons/1/free-user-icon-244-thumb.png',
}, {
    label: 'Person',
    image: 'https://www.iconpacks.net/icons/1/free-user-icon-244-thumb.png',
}, {
    label: 'Person',
    image: 'https://www.iconpacks.net/icons/1/free-user-icon-244-thumb.png',
},{
    label: 'Person',
    image: 'https://www.iconpacks.net/icons/1/free-user-icon-244-thumb.png',
},{
    label: 'Person',
    image: 'https://www.iconpacks.net/icons/1/free-user-icon-244-thumb.png',
},
{
    label: 'Person',
    image: 'https://www.iconpacks.net/icons/1/free-user-icon-244-thumb.png',
},
]


const HomePage = () => {
    const _renderList = () => {
        return list.map((item, index) => {
            return <PersonCards key={index} label={item.label} image={item.image} />
        })
    }
    return (
        <>
            <div style={{ display: 'flex', background:"black" }}>
                {_renderList()}
            </div>
            
        </>
    )
}

export default HomePage;