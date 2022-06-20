import { useEffect } from 'react';
//ROUTER
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Article = () => {
    //STATE & VARIABLES
    //useParams will give us any route parameters there are on the url
    // we can directly de-construct the id value into a variable
    //remember we called it id in our App.js but this word could be anything
    const { id } = useParams(); 
    const url = 'http://localhost:3000/articles/' + id;
    const { data: article, isPending, error } = useFetch(url);
    const navigate = useNavigate();

    //useEFFECT
    useEffect(() => {
        if(error){
            //redirect
            setTimeout(() => navigate('/'), 2000)
        }
    }, [error, navigate]);
    return(
        <div className="article">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {article && (
                <div>
                    <h2>{article.h2}</h2>
                    <p>By {article.author}</p>
                    <p>{article.body}</p>
                </div>
            )}
        </div>
    )
}

export default Article;