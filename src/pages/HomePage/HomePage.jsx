import css from './HomePage.module.css'

const HomePage = ()=>{
    return (
        <div className={css.body}>
        <div className={css.header}>
        <h1>Оренда Камперів в Україні</h1>
    </div>
    <div className={css.nav}>
        <a href="#">Головна</a>
        <a href="#">Каталог</a>
        <a href="#">Улюблені</a>
    </div>
    <div className={css.hero}>
        <h1>Насолоджуйтесь подорожами з комфортом</h1>
    </div>
    <div className={css.services}>
        <h2>Наші Послуги</h2>
        <p>Ми пропонуємо оренду камперів різних типів та комплектацій для ваших подорожей по Україні. Виберіть відповідний вам кампер та насолоджуйтесь незабутніми моментами на природі з усіма зручностями.</p>
    </div>
    <div className={css.footer}>
        &copy; 2024 Оренда Камперів в Україні. Всі права захищені.
    </div>
    </div>
    )
}

export default HomePage;