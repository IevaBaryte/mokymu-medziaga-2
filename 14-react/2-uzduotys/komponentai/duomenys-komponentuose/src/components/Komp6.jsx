// TODO: prijunkite šį komponentą prie App.jsx

const Komp6 = () => {
    let temperaturos = [15, 20, 25, 30, 35, 40];

    return (
        // TODO: atvaizduokite visas temperatūras
        // naudodami map funkciją, įdėdami viską
        // į lentelę (table),
        // kurioje būtų du stulpeliai:
        // 1. eilutės numeris (1, 2, 3, ...)
        // 2. temperatūra iš masyvo

        <div>
            <h3>Temperayuru lentele:</h3>
            <table border="1" cellPadding="5">
                <thead>
                    <tr>
                        <th>Eilutes numeris</th>
                        <th>Temperatura</th>
                    </tr>
                </thead>
                <tbody>
                    {temperaturos.map((temp, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{temp} °C</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Komp6
