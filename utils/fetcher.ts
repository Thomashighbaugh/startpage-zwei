const fetcher = (url: string, options: Object) => {
    return fetch(url, options)
        .then(res => res.json());
};

export default fetcher;