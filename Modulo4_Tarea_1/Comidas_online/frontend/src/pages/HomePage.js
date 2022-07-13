import React from 'react';

const HomePage = (props) => {
    return (
        <main class="holder">
            <div className="homeimg">
                <img scr="img/home/img01.jpg" alt="Comida" />
            </div>
        <div class="columnas">
            <section class="bienvenidos">
                <h2>Bienvenidos</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quam at iste? Repellat qui deleniti suscipit, maxime minus sed quibusdam ullam praesentium inventore vitae iste beatae quis facere ad totam?</p>

            </section>
            <section class="testimonios">
                <h2>Testimonios</h2>
                <div class="testimonio">
                    <span class="cita">La mejor comida, volveré con mas dinero...</span>
                    <span class="autor">Eduardo Martinuzi - Turista contemporaneo</span>
                </div>
            </section>
        </div>

    </main>
    );
}

export default HomePage;