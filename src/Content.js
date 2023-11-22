import React from 'react';

const Content = () => {
    return (
        <>
        <div className="row align-items-center text-center justify-content-center">
            <div className="col-8 ">
                <img src="https://images.unsplash.com/photo-1570823635306-250abb06d4b3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="img-fluid" alt="..."/>
            </div>
        </div>
            <div className="row align-items-center text-center justify-content-center background-light-grey p-1 my-4">
                <div className="col-12 ">
                    <span className="font-menu-header font-piazolla">Популярные товары</span>
                </div>
            </div>
            <div className="row align-items-center text-center justify-content-center ">
                <div className="col-10 d-flex justify-content-around flex-wrap">
                    <div className="card card-custom" >
                        <img src="https://terem-ermaka.ru/wp-content/uploads/3/9/c/39c5041054ccf38e7ea39172a9e7a6e4.jpeg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                            </div>
                    </div>
                    <div className="card card-custom" >
                        <img src="https://hakkon.club/uploads/posts/2023-01/thumbs/1673694937_hakkon-club-p-voskovaya-svadba-krasivo-20.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card card-custom" >
                        <img src="https://dnevnikpodelok.ru/wp-content/uploads/2022/12/kofejnye-podelki-31.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center text-center justify-content-center background-light-grey p-1 my-4">
                <div className="col-12 ">
                    <span className="font-menu-header font-piazolla">О нас</span>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center text-center justify-content-center flex-md-row">
                <div className="col-6 col-md-3">
                    <img src="https://cs1.livemaster.ru/storage/78/0f/b89ca4c00d6d2cbde4b3ebfab7zs--suveniry-i-podarki-svechi-ruchnoj-raboty.jpg" className="img-fluid" alt="..."/>
                </div>
                <div className="col-6 col-md-3">
                    <span className='font-piazolla'>Дело, которым мы занимаемся - это любимый и увлекательный процесс.

Каждый день мы стараемся для того, чтобы вы смогли окружить себя красотой и гармонией
                    </span>
            </div>
                <div className="col-6 col-md-3">
                    <img src="https://cs1.livemaster.ru/storage/d9/07/a5a07eb8f9c586e370452fe12a73--suveniry-i-podarki-voskovaya-svecha-tsvetok-lotos.jpg" className="img-fluid" alt="..."/>
                </div>

            </div>
            <div className="row align-items-center text-center justify-content-center background-light-grey p-1 my-4">
                <div className="col-12 ">
                    <span className="font-menu-header font-piazolla">Доставка</span>
                </div>
            </div>
            <div className="flex-column row align-items-center text-center justify-content-center flex-md-row">
                <div className="col-6 col-md-3">
                    <img src="https://img4.goodfon.com/original/640x1136/0/85/konvert-backgrounds-bumaga-kartochka-flowers-tsvety.jpg" className="img-fluid" alt="..."/>
                </div>
                <div className="col-6 col-md-3">
                    <span className='font-piazolla' >Наши свечи- вещь хрупкая, имеющая деликатные детали, поэтому мы бережно упаковываем и отправляем вам
Все заказы, тщательно упакованы и имеют на коробках пометку "хрупкое".
                    </span>
                </div>
            </div>
            <div className="row align-items-center text-center justify-content-center background-light-grey p-1 my-4">
                <div className="col-12 ">
                    <span className="font-menu-header font-piazolla">Ваш бренд</span>
                </div>
            </div>
        </>

    );
};

export default Content;