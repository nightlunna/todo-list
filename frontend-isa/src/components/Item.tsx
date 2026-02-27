interface ItemProps{
    id: number;
    title: string; 
    completed: boolean
}

function Item({ id, title, completed}: ItemProps) {


    return (
        <>
            <div key={id}>
                <p> Title: {title}</p>
                <input type="checkbox" checked={completed} />
            </div>

        </>
    )
}

export default Item