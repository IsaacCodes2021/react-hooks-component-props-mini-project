function About({img = "https://via.placeholder.com/215" , txt}) {
    return (
        <>
        <aside>
            <img src={img} alt='blog logo'></img>
            <p>{txt}</p>
        </aside>
        </>
    )
}

export default About