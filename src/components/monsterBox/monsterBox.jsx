import "./monsterBox.css";


const data = [
    {
        name: "Lisa",
        age: 32,
        student: true
    },
    {
        name: "Sten",
        age: 23,
        student: true
    },
    {
        name: "Mio",
        age: 46,
        student: false
    },
];

const Student = () => {
    return <p>{data[0].student ? `Student: ${data[0].name}, Age: ${data[0].age}` : "-"}</p>;
}

export default Student;