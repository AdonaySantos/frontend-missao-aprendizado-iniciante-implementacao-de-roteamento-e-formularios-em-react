export default function Create() {
    return (
        <div>
            <h1>Criar DevMons</h1>
            <form>
                <div>
                    <label htmlFor="nome">Nome:</label><br />
                    <input type="text" id="nome" name="nome" placeholder="Insira o nome" />
                </div>

                <div>
                    <label htmlFor="imagem">Imagem (URL):</label><br />
                    <input type="text" id="imagem" name="imagem" placeholder="Insira a URL da imagem" />
                </div>

                <div>
                    <label htmlFor="evoluiPara">Evolui Para:</label><br />
                    <input type="text" id="evoluiPara" name="evoluiPara" placeholder="Nome da evolução (opcional)" />
                </div>

                <div>
                    <button type="submit">Criar</button>
                    <button type="reset">Reiniciar</button>
                </div>
            </form>
        </div>

    )
} 