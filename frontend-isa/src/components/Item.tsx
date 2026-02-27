interface ItemProps {
    id: number;
    title: string;
    completed: boolean;
    onDelete: () => void;
}

function Item({ title, completed, onDelete }: ItemProps) {
    return (
        <div style={{ 
            display: 'flex', 
            padding: '8px',
        }}>
            <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                {title}
            </span>
            <button 
                onClick={onDelete}
                style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Deletar
            </button>
        </div>
    );
}

export default Item;