const Table = () => {
    const data = [
        { id: 1, name: 'John', age: 25},
        { id: 2, name: 'Jane', age: 30},
        { id: 3, name: 'Tom' , age: 28}
    ];

    function handleTableRowClick(item){
        console.log(item);
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
            {data.map(item => (
                <tr key={item.id} onClick={() => handleTableRowClick(item)}>
                <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;