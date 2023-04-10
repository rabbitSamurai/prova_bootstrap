     const pegarInformacoes = async () => {

        const url = `https://jsonplaceholder.typicode.com/users`;

        let response = await fetch(url);
        let json = await response.json();

        console.log(json[0])
    }




