import Toolbar from "./features/components/Toolbar.tsx";
import Home from "./features/Home.tsx";
import {apiUrl} from "./constants.ts";
import {useAppSelector} from "./app/hooks.ts";
import {selectLink} from "./features/linkSlice.ts";

const App = () => {
    const link = useAppSelector(selectLink);

    return (
        <>
            <header>
                <Toolbar/>
            </header>
            <main className='container'>
                <Home/>
                <div className="mt-5 text-center">
                    <h2>Your new link:</h2>
                    {link ? (
                        <div className="alert alert-success d-inline-block">
                            <a
                                href={apiUrl + link.shortUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                            >
                                {apiUrl + link.shortUrl}
                            </a>
                        </div>
                    ) : (
                        <p className="text-muted">No link generated yet.</p>
                    )}
                </div>
            </main>
        </>
    );
};

export default App;