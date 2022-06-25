
const GpCircuitDescription = (data) => {

    const {title, description  } = data;

    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )

}

export default GpCircuitDescription;