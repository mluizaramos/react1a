import estilos from './Cabecalho.module.css'

export function Cabecalho(){
    return(
        <header className={estilos.conteiner}>
            <h1>Pet Palace</h1>
            <div className={estilos.logo}>
                <img src="src/imagens/logo_pet-society_ZsFHsT.png" alt="Logo" />
            </div>
            <div className={estilos.links}>
                <a href='#'>Categorias</a>
                <a href='#'>Produtos</a>
                <a href='#'>Pets</a>
            </div>
        </header>
    )
}