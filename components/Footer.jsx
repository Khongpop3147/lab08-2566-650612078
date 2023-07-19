export const Footer= (props) => {
    return (
        <div className="mt-3">
        <p className="text-secondary text-center">{props.year}</p>
        <p className="text-secondary text-center">{props.fullname}</p>
        <p className="text-secondary text-center">{props.studentId}</p>
        
      </div>
    )
}