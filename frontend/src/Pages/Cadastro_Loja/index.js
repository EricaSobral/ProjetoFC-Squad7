import React from 'react';
import '../../assets/css/style.css';
import FotoUsuario from "../../assets/img/Id_Rosto.png"
import SelecionarFoto from "../../assets/img/AdicionarFoto.png"
import api from '../../services/api'
import logo from '../../assets/img/LogoAtualizada.PNG';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

function Cadastro_Loja() {
    const token = localStorage.getItem('token')
    const history = useHistory();

    const [Categorias, setCategorias] = useState([]);
    const [selectedCategoria, setSelectedCategoria] = useState('0');
    const [selectedFiles, setSelectedFiles] = useState();

    const [formData, setFormData] = useState({
        Titulo: '',
        Descricao: '',
        Telefone: '',
        Facebook: '',
        Instagram: '',
        Site: '',
        IdCategoria: ''
      });

        const handleUploadFiles = event => setSelectedFiles(event.target.files)
        //const handleUploadFiles = event => setSelectedFiles(...event.target.files)

    useEffect(() => {
        api.get('categorias').then(res => {
            const categoriaName = res.data

            setCategorias(categoriaName);
        })
    }, []);

    function handleSelectCategoria(event) {
        const Categoria = event.target.value

        setSelectedCategoria(Categoria);
    }

    useEffect(() => {
        if (selectedCategoria === '0') {
            return;
        }
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
    
        setFormData({ ...formData, [name]: value });
      }

    async function handleSubmitForm(event) {
        event.preventDefault()

        try {
            const IdCategoria = selectedCategoria
            const { Titulo, Facebook, Instagram, Site, Descricao, Telefone} = formData;
    
            const data = new FormData()
            for(var i = 0; i < selectedFiles.length; i++){
                data.append('files', selectedFiles[i]);
            }
            data.append('Titulo', Titulo);
            data.append('Facebook', Facebook);
            data.append('Instagram', Instagram);
            data.append('Site', Site);
            data.append('Descricao', Descricao);
            data.append('Telefone', Telefone);
            data.append('IdCategoria', IdCategoria);
            //data.append('files', selectedFiles)
    
            await api.post('anuncio', data ,{
                headers: {
                    'auth-token': token,
                    'Content-Type': undefined
                },
            }).then(res => {
                alert('Anuncio Cadastrado com succeso!')
            })
        } catch(err) {
            alert('Erro ao cadastrar o anuncio!')
        }
       
    }

    function handleLogout(){
        localStorage.clear(); 

        history.push('/');
    }

    return (
        <div>
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
            <div className="fundo-cadastro">
                <div className="">
                    <div className="fundo-loja col-9">
                        <div className="foto-usuario">
                            <img src={FotoUsuario} className="rounded-circle usuario"></img>
                        </div>
                        <form onSubmit={handleSubmitForm} encType="multipart/form-data" >
                            <div className="form-div">
                                <div className="form-group col-md-12">
                                    <input className="input-cadloja" id="Titulo" name="Titulo" 
                                    placeholder="Nome da Loja" onChange={handleInputChange} />
                                </div>

                                <div className="form-group col-md-12">
                                    <input className="input-cadloja" id="Facebook" name="Facebook"
                                    onChange={handleInputChange} placeholder="Facebook" />
                                </div>

                                <div className="form-group col-md-12">
                                    <input className="input-cadloja" id="Instagram" name="Instagram"
                                    onChange={handleInputChange} placeholder="Instagram" />
                                </div>

                                <div className="form-group col-md-12">
                                    <input className="input-cadloja" id="Site" name="Site"
                                    onChange={handleInputChange} placeholder="Site" />
                                </div>

                                <div className="form-group col-md-12">
                                    <input type="text" className="form-grande" id="Descricao" name="Descricao"
                                    onChange={handleInputChange} placeholder="Descrição" />
                                </div>

                                <div className="form-group col-md-6">
                                    <input type="text" className="input-cadloja" id="Telefone" name="Telefone"
                                    onChange={handleInputChange} placeholder="Celular/WhatsApp" />
                                </div>

                                <div className="form-group col-md-6">
                                    <select className="form-control" name="categoria" id="categoria" value={selectedCategoria} onChange={handleSelectCategoria}>
                                        <option value="0">Selecione uma Categoria</option>
                                        {Categorias.map(Categoria => (
                                            <option key={Categoria.IdCategoria} value={Categoria.IdCategoria}>{Categoria.CategoriaNome}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="selecionar-fotos col-md-12">
                                    <label className="label-fotos">Inserir pelo menos 4 fotos</label>
                                    <div className="colunas col-md-12">
                                        <img src={SelecionarFoto}></img>
                                        <img src={SelecionarFoto}></img>
                                        <img src={SelecionarFoto}></img>
                                        <img src={SelecionarFoto}></img>
                                        <input  type="file" id="AnuncioImages"name="files" 
                                        onChange={handleUploadFiles} multiple></input>
                                    </div>
                                </div>
                                <div className="botao-cadastro">
                                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                                </div>

                            </div>
                        </form>
                        <hr></hr>
                        <div className="mini-footer">
                            <p className="subtitulo">Revise seus dados Antes de Confirmar</p>
                        </div>

                    </div>
                    <p>Ao cadastrar sua loja você concorda com os <a className="redirect">Termos de Uso  </a> e a <a className="redirect">Política de Privacidade</a> de BFriend.</p>
                </div>
            </div>

        </div>
    )
} export default Cadastro_Loja;