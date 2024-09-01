import {useAppDispatch} from "../app/hooks.ts";
import React, {useState} from "react";
import {createLink} from "./linkThunk.ts";
import {LinkMutation} from "../types.ts";

const Home = () => {
    const dispatch = useAppDispatch();

    const [url, setUrl] = useState<LinkMutation>({
        link: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

            await dispatch(createLink(url));

            setUrl((prevState) => ({
                ...prevState,
                link: ''
            }));
    }

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setUrl(prevState => {
            return {...prevState, [name]: value};
        });
    };

    return (
        <div>
            <h1 className='mb-5'>Link Shortener</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Enter your link</label>
                    <input
                        type="url"
                        className="form-control"
                        name='link'
                        value={url.link}
                        onChange={inputChangeHandler}
                        required
                        placeholder='Enter your link'
                    />
                </div>
                <button className="btn btn-primary w-100">Short</button>
            </form>
        </div>
    );
};

export default Home;