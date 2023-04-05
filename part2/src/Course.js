// part section

const TableRender = ({subject, value}) =>{
    console.log("020101 TableRender", subject)
    return (
        <>
            <tr>
                <td>{subject}</td>
                <td>{value}</td>
            </tr>
        </>
    )
}

const PartTable  = ({parts}) =>{
    const total = reduceTotal(0, parts)
    return(
        <>
            {parts.map(
                part => 
                <TableRender key = {part.id} subject = {part.name} value = {part.exercises} />
            )}
            <TableRender subject = "total" value = {total} />
        </>
    )
}

const reduceTotal = (sum,parts) =>
        parts.reduce((sum,p) => {
            return (sum + p.exercises)
        }, sum)

const PartDisplay = ({parts}) => {
    console.log ("0201 parts", parts)

    return (
        <table>
            <tbody>
                <PartTable parts = {parts} />
            </tbody>
        </table>

    )
}

const CourseDisplay = ({course}) => {
    return(
        <>
            <h1>{course.name}</h1>
            <PartDisplay parts = {course.parts} />
        </>
    )
}

const CourseRender = ({course}) => {
    console.log("02 course render", course)
    return(
        <>
            {course.map( coursePart => 
                <CourseDisplay key = {coursePart.id} course = {coursePart} />    
            )}
        </>
    )
}

const Course = ({course}) => {
    console.log("02 Course", course)

    return (
        <div>
            <CourseRender course = {course} />
        </div>
    )
}

export default Course