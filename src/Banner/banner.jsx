import "./banner.css";

export const Banner = () => {
    return (
        <section id="home">
            <div className="banner">

                <div className="circulo"></div>
                <div className="imagen">
                    <img
                        src="/yo.png"
                        alt="Sneyder Orellana"
                        clasFsName="foto"
                    />
                </div>

                <h1 className="nombre">
                    <a className="nombre">Sneyder</a>
                    <a className="apellido">Orellana</a>
                </h1>
                <div className="skills">
                    <div className="skill">
                        <img src="/Python-logo.png" alt="Python" className="skill-iconos" />
                        <p>Python</p>
                    </div>
                    <div className="skill">
                        <img src="/Excel-logo.png" alt="Excel" className="skill-iconos" />
                        <p>Excel</p>
                    </div>
                    <div className="skill">
                        <img src="/PBI-logo.png" alt="Power BI" className="skill-iconos" />
                        <p>Power BI</p>
                    </div>
                </div>
            </div>
        </section>
    );
};