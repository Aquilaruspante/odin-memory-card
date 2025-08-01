export default function Score({ score, record }) {
    return (
        <div className="score">
            <div className="personal-score">Score: {score}</div>
            <div className="record">Record: {record}</div>
        </div>
    )
}