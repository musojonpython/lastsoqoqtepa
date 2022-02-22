import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const tend = [
    {
        id: 1,
        detail: [
            "/img/1.png", 
            "/img/1.png",
            "/img/1.png",
            "/img/1.png",
        ],
        title: "Lorem ipsum dolor sit amet 1",
        person: "Shanayev Shuhrat",
        start: "17.02.2022",

    },
    {
        id: 2,
        detail: [
            "/img/1.png", 
            "/img/1.png",
            "/img/1.png",
            "/img/1.png",
        ],
        title: "Lorem ipsum dolor sit amet 2",
        person: "Shanayev Shuhrat",
        start: "17.02.2022",

    },
    {
        id: 3,
        detail: [
            "/img/1.png", 
            "/img/1.png",
            "/img/1.png",
            "/img/1.png",
        ],
        title: "Lorem ipsum dolor sit amet 3",
        person: "Shanayev Shuhrat",
        start: "17.02.2022",

    },
]

const Fotogalereya = () => {
    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>Fotogalereya</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                    <div className='row'>
                        {
                            tend.map((item) => (
                                <div key={item.id} className='col-md-4 mb-4'>
                                    <div class="card">
                                        <img src={item.detail[0]} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <div className='d-flex justify-content-between'>
                                            <Link to={`${item.id}`} className="card-title"><h5>{item.title}</h5></Link>
                                                <p class="card-text"><small class="text-muted">{item.start}</small></p>
                                            </div>
                                            <h5>{item.person}</h5>
                                            {/* <p class="card-text">{item.body.slice(0, 190)}....</p> */}
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

export default Fotogalereya;
