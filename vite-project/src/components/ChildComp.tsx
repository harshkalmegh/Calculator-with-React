interface IChildComp {
    data: number;
    name: string;
    city: string;

}
const ChildComp = ({ data, city, name }: IChildComp) => {
    return (
        <p>Result: {data} {city} {name}</p>
    )
}

export default ChildComp;