import '../styles/Timeline.css';

export default function Timeline({ content = [] }) {
    return (
        <div className="timeline">
            {content.map((item) => (
                <div key={item.id} className={`container ${item.id % 2 === 0 ? 'right' : 'left'}`}>
                    <div className='content'>
                        <h2>{item.year}</h2>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}