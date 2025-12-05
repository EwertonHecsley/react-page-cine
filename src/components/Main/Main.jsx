import s from './Main.module.scss';

export const Main = () => {
    return (
        <main className={s.main}>
            <section className={s.boxMain}>
                <section className={s.boxMainContent}>
                    <img src="src/assets/content/info.png" alt="info" />
                    <h1>Batman</h1>
                    <p>Gotham City enfrenta uma nova ameaça, e Bruce Wayne  assume o papel do Cavaleiro das Trevas para deter uma organização criminosa. Em meio a seus próprios demônios internos, Wayne luta para salvar a cidade da iminente escuridão eterna.</p>
                    <button>Assistir agora</button>
                </section>
            </section>
        </main>
    )
}