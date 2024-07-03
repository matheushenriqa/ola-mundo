import styleS from './Inicio.module.css';
import PostCard from 'componentes/PostCard';

import posts from 'json/posts.json';

export default function Inicio() {
    return (
        <ul className={styleS.posts}>
            {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
        </ul>
    )
}