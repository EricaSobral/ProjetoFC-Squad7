import React from 'react';
import '../../assets/css/cards.css';
import '../../assets/css/reset.css'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
// Importando imagens
import hamburguer from '../../assets/img/burger_Vegan.png';
import coxinha from '../../assets/img/coxinhas.png';
import massas from '../../assets/img/Massas.png';
import marmita from '../../assets/img/marmita.png';
import faz_tudo from '../../assets/img/encanador.png';
import casa_forca from '../../assets/img/eletricista.png';
import mecanica from '../../assets/img/mecanico.png';
import costura from '../../assets/img/costureira.png';
import cell from '../../assets/img/celular.png';
import conserto from '../../assets/img/Tves.png';
import tela from '../../assets/img/Tela.png';
import som from '../../assets/img/Som.png';
import icone from '../../assets/img/IconeCards.png'
import api from '../../services/api'
import {useHistory} from 'react-router-dom'

function Cards({Anuncios , AnuncioCategoria, AnuncioProx}) {
  
  const history = useHistory()

  function handlePageLoja (event) {
    const IdAnuncio = event.target.id
    
    const IdLoja = localStorage.setItem('IdAnuncio', IdAnuncio)
    history.push('loja')
  }

  function handleFiltroCategoria (event) {
    if(AnuncioCategoria !== undefined) {
      return (
        <div className="container-cards">
        {AnuncioCategoria.map(AnuncioCategoria => (
          <div className="item-cards" id={AnuncioCategoria.IdCategoria}>
            <Card className="card-inicio">
            <div className="card-img">
              <CardImg top width="100%" src={'http://localhost:3333/uploads/' + AnuncioCategoria.ImagemAnuncio[0]} alt="Card image cap" />
            </div>
              <CardBody className="body-card">
                <CardTitle className="card-title">{AnuncioCategoria.Titulo}</CardTitle>
                <hr className="hr-card"></hr>
                <CardText className="card-text">{AnuncioCategoria.Descricao}</CardText>
                <Button outline color="primary" id={AnuncioCategoria.IdAnuncio} onClick={handlePageLoja}>Saiba mais</Button>
              </CardBody>
            </Card>
          </div>
          ))}
          </div>
      )
    } 
  }

    function handleFiltroProx (event) {
      if(AnuncioProx != undefined) {
        return (
          <div className="container-cards">
        {AnuncioProx.map(AnuncioProx => (
          <div className="item-cards" id={AnuncioProx.IdCategoria}>
            <Card className="card-inicio">
              <div className="card-img">
              <CardImg top width="100%" src={'http://localhost:3333/uploads/' + AnuncioProx.ImagemAnuncio[0]} alt="Card image cap" />
              </div>
              <CardBody className="body-card">
                <CardTitle className="card-title">{AnuncioProx.Titulo}</CardTitle>
                <hr className="hr-card"></hr>
                <CardText className="card-text">{AnuncioProx.Descricao}</CardText>
                <Button outline color="primary" id={AnuncioProx.IdAnuncio} onClick={handlePageLoja}>Saiba mais</Button>
              </CardBody>
            </Card>
          </div>
          ))}
          </div>
        )
      }
    }

  return (
    <div>
      <section id="card-alimentacao" className="card-section" >

        <div className="container-cards">
        {Anuncios.map(Anuncio => (
          <div className="item-cards" id={Anuncio.IdCategoria}>
            <Card className="card-inicio">
            <div className="card-img">
              <CardImg top width="100%" src={'http://localhost:3333/uploads/' + Anuncio.ImagemAnuncio[0]} alt="Card image cap" />
            </div>
              <CardBody className="body-card">
                <CardTitle className="card-title">{Anuncio.Titulo}</CardTitle>
                <hr className="hr-card"></hr>
                <CardText className="card-text">{Anuncio.Descricao}</CardText>
                <Button outline color="primary" id={Anuncio.IdAnuncio} onClick={handlePageLoja}>Saiba mais</Button>
              </CardBody>
            </Card>
          </div>
          ))}

         
          <div className="item-cards">
            <Card className="card-inicio">
              <CardImg top width="100%" src={coxinha} alt="Card image cap" />
              <CardBody className="body-card">
                <CardTitle className="card-title">Super Salgados</CardTitle>
                <hr className="hr-card"></hr>
                <CardText className="card-text">Quer comer aquele salgado? vaifazer </CardText>
                <Button outline color="primary">Saiba mais</Button>
              </CardBody>
            </Card>
          </div>

        </div>
      </section>

      <section id="card-serviços_lar" className="card-section" >



        <div className="container-cards">
        {AnuncioCategoria.map(AnuncioCategoria => (
          <div className="item-cards" id={AnuncioCategoria.IdCategoria}>
            <Card className="card-inicio">
            <div className="card-img">
              <CardImg top width="100%" src={'http://localhost:3333/uploads/' + AnuncioCategoria.ImagemAnuncio[0]} alt="Card image cap" />
            </div>
              <CardBody className="body-card">
                <CardTitle className="card-title">{AnuncioCategoria.Titulo}</CardTitle>
                <hr className="hr-card"></hr>
                <CardText className="card-text">{AnuncioCategoria.Descricao}</CardText>
                <Button outline color="primary" id={AnuncioCategoria.IdAnuncio} onClick={handlePageLoja}>Saiba mais</Button>
              </CardBody>
            </Card>
          </div>
          ))}
          </div>

        <div className="container-cards">
        {handleFiltroCategoria}
          <div className="item-cards">
            <Card className="card-inicio">
              <CardImg top width="100%" src={faz_tudo} alt="Card image cap" />
              <CardBody className="body-card">
                <CardTitle className="card-title">Dr Faz Tudo</CardTitle>
                <hr className="hr-card"></hr>
                <CardText className="card-text">O melhor hamburger vegano do litoral paulista.</CardText>
                <Button outline color="primary">Saiba mais</Button>
              </CardBody>
            </Card>
          </div>
        
          <div className="item-cards">
            <Card className="card-inicio">
              <CardImg top width="100%" src={casa_forca} alt="Card image cap" />
              <CardBody className="body-card">
                <CardTitle className="card-title">Casa de Força</CardTitle>
                <hr className="hr-card"></hr>
                <CardText className="card-text">Quer comer aquele salgado? vaifazer </CardText>
                <Button outline color="primary">Saiba mais</Button>
              </CardBody>
            </Card>
          </div>

          <div className="item-cards">
            <Card className="card-inicio">
              <CardImg top width="100%" src={mecanica} alt="Card image cap" />
              <CardBody className="body-card">
                <CardTitle className="card-title">Bira Auto Mecânica</CardTitle>
                <hr className="hr-card"></hr>
                <CardText className="card-text">Nós fazemos a melhor massa caseira da.</CardText>
                <Button outline color="primary">Saiba mais</Button>
              </CardBody>
            </Card>
          </div>

          <div className="item-cards">
            <Card className="card-inicio" >
              <CardImg top width="100%" src={costura} alt="Card image cap" />
              <CardBody className="body-card">
                <CardTitle className="card-title">Alta Costura</CardTitle>
                <hr className="hr-card"></hr>
                <CardText className="card-text">Quer comer aquela marmita em casa.</CardText>
                <Button outline color="primary">Saiba mais</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section id="card-Reparos" className="card-section" >

        <div className="container-cards">
        {AnuncioProx.map(AnuncioProx => (
          <div className="item-cards" id={AnuncioProx.IdCategoria}>
            <Card className="card-inicio">
            <div className="card-img">
              <CardImg top width="100%" src={'http://localhost:3333/uploads/' + AnuncioProx.ImagemAnuncio[0]} alt="Card image cap" />
            </div>
              <CardBody className="body-card">
                <CardTitle className="card-title">{AnuncioProx.Titulo}</CardTitle>
                <hr className="hr-card"></hr>
                <CardText className="card-text">{AnuncioProx.Descricao}</CardText>
                <Button outline color="primary" id={AnuncioProx.IdAnuncio} onClick={handlePageLoja}>Saiba mais</Button>
              </CardBody>
            </Card>
          </div>
          ))}
          </div>

      </section>
    </div>

  );
}
export default Cards

