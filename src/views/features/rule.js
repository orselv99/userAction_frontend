import { useFetch } from "../../hookHandler";

const Rule = () => {
    const [data, loading] = useFetch('http://127.0.0.1:30001/getRule');

    return (
        <div>
            <p>Rule</p >
            <p>{loading}</p>
            <p>{data}</p>
        </div>
    );
}

export default Rule;