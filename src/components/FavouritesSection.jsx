import './styles.css';

export const FavouritesSection = ({ favourites }) => {
    return (
        <section className='section-fav'>
        {favourites.map(favourite => (
            <li key={favourite.id}>{favourite}</li>
        ))}
        </section>
    )
}