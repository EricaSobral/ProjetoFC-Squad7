import React from 'react';
import { useHistory } from 'react-router-dom'
import Footer from '../../components/Footer/footer';
import Cards from '../../components/Cards/cards';
import banner5 from '../../assets/img/banner5.png';
import '../../assets/css/reset.css';
import '../../assets/css/usuario.css';
import logo from '../../assets/img/LogoAtualizada.PNG';
import api from '../../services/api'
import { useState } from 'react';
import { useEffect } from 'react';

function HomeLogada() {
    const token = localStorage.getItem('token')

    const [Anuncios, setAnuncios] = useState([]);
    const [AnuncioProx, setAnuncioProx] = useState([]);
    const [AnuncioCategoria, setAnuncioCategoria] = useState([]);
    const [Cidades, setCidades] = useState([]);
    const [Bairro, setBairro] = useState('');
    const [Categorias, setCategorias] = useState([]);

    const [selectedCidade, setSelectedCidade] = useState('0');
    const [selectedCategoria, setSelectedCategoria] = useState('0');
    const history = useHistory();

// React de Anuncios
    useEffect(() => {
        api.get('anuncios').then(res => {
            const AllAnuncios = res.data
            
            setAnuncios(AllAnuncios);
        })
    }, []);
// React de Cidades
    useEffect(() => {
        api.get('cidades').then(res => {
            const cityName = res.data.map(IdCidade => IdCidade.CidadeNome);
            //console.log(cityName)
            setCidades(cityName);
        })
    }, []);

    function handleSelectCidade (event) {
        const Cidade = event.target.value

        setSelectedCidade(Cidade);
    }

    useEffect(() => {
        if(selectedCidade === '0') {
            return;
        }
    })
// React de Categorias
    useEffect(() => {
        api.get('categorias').then(res => {
            const categoriaName = res.data
    
            setCategorias(categoriaName);
        })
    }, []);

    function handleSelectCategoria (event) {
        const Categoria = event.target.value

        setSelectedCategoria(Categoria);
    }

    useEffect(() => {
        if(selectedCategoria === '0') {
            return;
        }
    })

    async function handleSubmit(event) {
        event.preventDefault();

        const Cidade = selectedCidade;
        const Categoria = selectedCategoria;

        const data = {
            Cidade,
            Bairro,
            Categoria
           
        };
        if(data.Bairro == "") {
            const res = await api.get('anuncios/filtro', {
                params: {
                    Cidade: data.Cidade,
                    Categoria: data.Categoria
                }
            }).then(res => {
                const AnuncioFiltrado = res.data
    
                setAnuncioProx(AnuncioFiltrado)
            })   
        } if(data.Categoria === '0') {
            const res = await api.get('anuncios/filtro', {
                params: {
                    Cidade: data.Cidade,
                    Bairro: data.Bairro,
                }
            }).then(res => {
                const AnuncioFiltrado = res.data
    
                setAnuncioProx(AnuncioFiltrado)
            })   
        } else {
            const res = await api.get('anuncios/filtro', {
                params: {
                    Cidade: data.Cidade,
                    Bairro: data.Bairro,
                    Categoria: data.Categoria
                }
            }).then(res => {
                const AnuncioFiltrado = res.data
    
                setAnuncioProx(AnuncioFiltrado)
            })   
        } 
    }
    
    function handleFornecedor() {
        if(token.length > 163){
            document.getElementById("Fornecedor").style.display = "none";
        }
    }
    function handleLogout(){
        localStorage.clear(); 

        history.push('/');
    }
      
    return (
        <div onMouseMoveCapture={handleFornecedor}>
            <header>
                <div className="menu-header-home container-fluid">
                    <div >
                        <a href="#"><img className="logo-header" src={logo} alt="bfriend" /></a>
                    </div>

                    <nav className="btn-header-home">
                       
                        <a href="/perfilUsuario"><button className="btn-header" >Perfil</button></a>
                        
                        <button className="btn-header" onClick={handleLogout}>Sair</button>
                            
                    </nav>
                </div>
            </header>
            <div className="hero-image">
                <img className="banner" src={banner5}></img>
                
            </div>
            <div className="fundo-pesquisa">
                
                <div className="form-pl" onSubmit={handleSubmit}>
                    <div className="form-group col-md-4">
                        <label className="text-light " htmlFor="inputText">Em qual cidade?</label>
                        <select className="form-control" name="cidade" id="cidade" value={selectedCidade} onChange={handleSelectCidade}>
                        <option value ="0">Selecione uma Cidade</option>
                        {Cidades.map(Cidade => (
                            <option  key={Cidade} value={Cidade}>{Cidade}</option>
                        ))}
                        </select>
                       
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputText" className="text-light " >Qual Bairro?</label>
                        <input type="text" className="form-control" name="Bairro" id="Bairro"
                        value={Bairro} onChange={event => setBairro(event.target.value)} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputText" className="text-light " >Qual Categoria?</label>
                        <select className="form-control" name="categoria" id="categoria" value={selectedCategoria} onChange={handleSelectCategoria}>
                        <option value ="0">Selecione uma Categoria</option>
                        {Categorias.map(Categoria => (
                            <option key={Categoria.IdCategoria} value={Categoria.IdCategoria}>{Categoria.CategoriaNome}</option>
                        ))}
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn1 btn-primary" onClick={handleSubmit}>Buscar</button>
                <a href="/cadastroFornecedor" ><button id="Fornecedor" type="submit" 
                className="btn1 criar-loja" >Vire Fornecedor</button></a>
            </div>
            
            <Cards Anuncios={Anuncios} AnuncioCategoria={AnuncioCategoria} AnuncioProx={AnuncioProx}/>
            <Footer/>
        </div>

    )
} export default HomeLogada;