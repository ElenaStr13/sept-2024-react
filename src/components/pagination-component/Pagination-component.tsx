import {useSearchParams} from "react-router";
export const PaginationComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentPage = Number(searchParams.get('page') || '1');

    return (
        <div>
            <button className={'border-2'} onClick={() => {
                setSearchParams({page: (--currentPage).toString()})
            }}>prev</button>
            <hr></hr>
            <button className={'border-2'} onClick={() => {
                setSearchParams({page: (++currentPage).toString()})
            }}>next</button>
        </div>
    );
};