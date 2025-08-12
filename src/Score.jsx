export default function Score({ score, record }) {
    return (
        <div className="score" tabIndex={0}>
            <div className="personal-score" tabIndex={0} aria-label={`score ${score}`}>Score: {score}</div>
            <div className="record" tabIndex={0} aria-label={`record ${record}`}>Record: {record}</div>
        </div>
    )
}