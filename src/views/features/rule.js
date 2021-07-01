import axios from 'axios';
import { useState, useEffect } from 'react';

async function getRule() {
    console.log('getRule');
    return await axios.get('http://127.0.0.1:30001/getRule');
}

const Rule = () => {
    const [data, setData] = useState(null);
    const requestRule = getRule();

    useEffect(() => {
        console.log(requestRule.data);
        //setData(requestRule.data);
    });

    return (
        <div>
            <p>
                Rule
                {
                    data === null &&
                    <> data </>
                }
            </p >
        </div>
    );
}

export default Rule;