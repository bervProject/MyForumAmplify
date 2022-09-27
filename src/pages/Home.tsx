import { useEffect, useState } from "react";
import {
    Button,
    Flex,
    Heading,
    Text,
} from "@aws-amplify/ui-react";
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../graphql/queries';
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Link, useNavigate } from "react-router-dom";

export default function Home({ user, signOut }: any) {
    const navigate = useNavigate();
    const [posts, setPosts] = useState<any>([]);


    async function loadPosts() {
        const postsData = await API.graphql({ ...graphqlOperation(listPosts, { filter: { draft: { eq: false } } }), authMode: 'AMAZON_COGNITO_USER_POOLS' });
        const data = (postsData as GraphQLResult<any>).data;
        console.log(data);
        setPosts(data.listPosts.items);
    }

    useEffect(() => {
        loadPosts();
    }, []);


    return (<Flex
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        alignContent="flex-start"
        wrap="nowrap"
        gap="1rem"
    ><Flex
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
        alignContent="flex-start"
        wrap="nowrap"
        gap="1rem"
    >
            <Heading level={2}>Hello {user ? user.username : 'Guest'}</Heading>
            <Button size="small" onClick={signOut}>Sign out</Button>
        </Flex>
        <Button size="small" onClick={() => navigate('/post/new')}>Create New Post</Button>
        <Flex
            direction="column"
            justifyContent="space-between"
            alignItems="stretch"
            alignContent="flex-start"
            wrap="nowrap"
            gap="1rem"
        >{posts.map((post: any) => (
            <Flex
                direction="column"
                justifyContent="space-between"
                alignItems="stretch"
                alignContent="flex-start"
                wrap="nowrap"
                gap="1rem"
            >
                <Link to={`/post/${post.id}`}><Heading level={3}>{post.title}</Heading></Link>
                <Flex
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    alignContent="flex-start"
                    wrap="nowrap"
                    gap="1rem"
                >
                    <Text>Last updated: {new Date(post.updatedAt).toLocaleString('en-US')}</Text>
                    <Text>Created by: {post.owner}</Text>
                    <Text>Likes: {post.likes?.items?.length ?? 0}</Text>
                    <Text>Comments: {post.comments?.items?.length ?? 0}</Text>
                </Flex>
                <Text>{post.content}</Text>
            </Flex>
        ))}</Flex>
    </Flex>);
}