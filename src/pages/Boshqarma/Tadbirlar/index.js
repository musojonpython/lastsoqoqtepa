import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const tend = [
    {
        id: 1,
        img: "/img/1.png",
        title: "Lorem ipsum dolor sit amet 1",
        person: "Shanayev Shuhrat",
        start: "17.02.2022",
        end: "20.02.2022"
    },
    {
        id: 2,
        img: "/img/1.png",
        title: "Lorem ipsum dolor sit amet 2",
        person: "Shanayev Shuhrat",
        start: "17.02.2022",
        end: "20.02.2022"
    },
    {
        id: 3,
        img: "/img/1.png",
        title: "Lorem ipsum dolor sit amet 3",
        person: "Shanayev Shuhrat",
        start: "17.02.2022",
        end: "20.02.2022"
    },
]

const Tadbirlar = () => {
    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>Tadbirlar</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {
                        tend.map((item) => (
                            <div key={item.id} className='col-12 mb-3'>
                                <div className="card mb-3 p-3 tad-card">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item.img} className="img-fluid rounded-start" alt="image"/>
                                        </div>
                                        <div className="col-md-8 p-3">
                                            <div className="card-body">
                                                <Link to={`${item.id}`} className="card-title"><h5>{item.title}</h5></Link>
                                                <p className="card-text">Tashkilotchi: {item.person}</p>
                                                <p className="card-text">Boshlanish sanasi: {item.start}</p>
                                                <p className="card-text">Tugash sanasi: {item.end}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Tadbirlar;
