const PersonCards = (data: any) => {
    const { image, label } = data;
    return (

        <div style={{width:"135px", margin: '10px'}}>
            <div style={{ padding: '20px', border: '1px solid silver', borderRadius: '8px', background:"silver" }}>
                <img width={"100%"} src={image} alt={label} />
            </div>
            <div style={{ marginTop: '7px' }}>
                <p style={{margin:"0",color: "silver"}}>{label}</p>
            </div>
        </div>

    )
}

export default PersonCards;