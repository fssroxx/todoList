const AppHeader = ({toDo, done}) => {
    

    return (
        <>
            <h1>My TodoList</h1>
            <h2>{toDo} осталось, {done} сделано</h2>
        </>
    )
}
export default AppHeader;